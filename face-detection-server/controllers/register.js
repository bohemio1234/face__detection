const handleRegister = async (req, res, db, bcryptnodejs) => {
    const { email, name, password } = req.body;
  
    if (!email || !name || !password || !email.includes("@") || !email.includes(".com")) {
      return res.status(400).json("⚠️ Invalid registration details");
    }
  
    const hash = bcryptnodejs.hashSync(password);
  
    try {
      await db.transaction(async (trx) => {
        const loginEmail = await trx.insert({ hash, email }).into("login").returning("email");
  
        const user = await trx("users").returning("*").insert({
          email: loginEmail[0].email,
          name,
          joined: new Date(),
        });
  
        res.json(user[0]);
      });
    } catch (error) {
      console.error("❌ Registration error:", error);
      res.status(500).json("⚠️ Unable to register");
    }
  };
  
  export default { handleRegister };