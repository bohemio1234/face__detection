import { React, useState } from "react";

const Signin = ({ onRouteChange, loadUser }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEmailChange = (event) => {
    console.log(event.target.value);
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    console.log(event.target.value);
    setSignInPassword(event.target.value);
  };


  const onSubmitSignIn = async () => {
    console.log("🔹 email:", signInEmail);
    console.log("🔹 password:", signInPassword);

    try {
        const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword,
        }),
      })

      if(!response.ok) {
        setErrorMessage('something wrong in server')
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const user = await response.json()

      if(user.id) {
        loadUser(user);
        onRouteChange('home')
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
        console.log("Error", error)
        setErrorMessage("⚠️ Failed to sign in. Please try again.")
    }
  


  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-10 ">
      <div
        className="card text-center p-4"
        style={{
          maxWidth: "28rem",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <h1>FACE DETECTION</h1>
        <h5>Welcome! Please Sign In ☺️</h5>
        <h6 className="mt-3">{errorMessage}</h6>

        <br />
        <form onSubmit={onSubmitSignIn}>
          <div className="form-group mb-3 ">
            <label className="mb-2 " htmlFor="exampleInputEmail1">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              onChange={onEmailChange}
              autoFocus
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control shadow"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              onChange={onPasswordChange}
            />
          </div>
          <button
            // type="submit"
            className="btn btn-primary mt-3 mb-2 shadow"
            // onClick={() => onSubmitSignIn()}
          >
            Sign In
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
