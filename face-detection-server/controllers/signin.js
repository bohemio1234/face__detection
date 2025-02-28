const handleSignin = async (req, res, db, bcryptnodejs) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json('incorrect form submission')
    }

    try {
        const data = await db.select('email','hash').from('login').where('email', '=', req.body.email)
        if (data.length === 0) {
            return res.status(400).json("No such email in our DB");
        }

        const isVaild = bcryptnodejs.compareSync(req.body.password, data[0].hash);
        if (!isVaild) {
            return  res.status(400).json('wrong password!')
        }

        const user =  await db.select('*').from('users').where({ email })
        res.json(user[0])
    } catch (error) {
        res.status(500).json("⚠️ Server error during sign-in");
    }
}
export default {
    handleSignin
};