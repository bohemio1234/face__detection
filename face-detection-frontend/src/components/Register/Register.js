import { React, useState } from "react";

const Register = ({ onRouteChange, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const onNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const onEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onSubmitRegister = async () => {

    try{
        const response = await fetch("http://localhost:3000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password,
              name: name,
            }),
          })

          if(!response.ok) {
            setErrorMessage("something wrong in server");
            throw new Error("Failed to register. Please try again.");
            
          }

          const user = await response.json()

          if(user.id){
            loadUser(user);
            onRouteChange('home')
          } else {
            setErrorMessage("failed to load user");
          }

    } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Please check your input.");
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
        <h5>Create Your Account 😆</h5>
        <br />
        <h6 className="mb-4">{errorMessage}</h6>
        <form onSubmit={onSubmitRegister}>
          <div className="form-group mb-3">
            <label className="mb-2" htmlFor="exampleInputName1">
              Name
            </label>
            <input
              type="text"
              className="form-control shadow"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
              onChange={onNameChange}
              autoFocus
            />
          </div>
          <div className="form-group mb-2">
            <label className="mb-2" htmlFor="exampleInputEmail1">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              onChange={onEmailChange}
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

            className="btn btn-primary mt-3 mb-2 shadow"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
