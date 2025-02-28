import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Signin from "./components/Signin/Signin";
import ParticlesBg from "particles-bg";
import { React, useState } from "react";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Register from "./components/Register/Register";

function App() {
  const initialUserState = {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  };

  const [statusMessage, setStatusMessage] = useState("");
  const [box, setBox] = useState({});
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(initialUserState);

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const onInputChange = (event) => {
    if (event.target.value) setInput(event.target.value);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const BACKEND_URL = "https://face-detection-lqou.onrender.com"

  const onButtonSubmit = async () => {
    if (!input.trim()) {
      setStatusMessage("Please put your URL");
      return;
    }

    setBox({});
    setStatusMessage("⏳ Analyzing the image…");
    setImageURL(input);

    try {
      const response = await fetch(`${BACKEND_URL}/clarifai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_app_id: { user_id: "hccu8v4urskl", app_id: "test" },
          inputs: [{ data: { image: { url: input } } }],
        }),
      });

      const result = await response.json();

      if (!result || !result.outputs) {
        setStatusMessage("something wrong in API😢");
      }

      displayFaceBox(calculateFaceLocation(result));
      setStatusMessage("✅ Face detected! 🥰");

      const imageUpdateRes = await fetch(`${BACKEND_URL}/image`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id }),
      });

      const count = await imageUpdateRes.json();
      setUser((prevUser) => ({ ...prevUser, entries: count }));
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("No face detected. 😢");
    }
  };


  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
      setUser(initialUserState);
      setImageURL("");
      setBox({});
      setStatusMessage(null);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <div className="container-fluid particles-container">
        <ParticlesBg type="circle" bg={true} />
      </div>

      {route === "home" ? (
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      ) : (
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      )}
      {route === "home" ? (
        <div>
          <Logo />
          <Rank name={user.name} entries={user.entries} />
          <ImageLinkForm
            input={input}
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <p className="fs-4 mt-3 text-center fw-bold">{statusMessage}</p>
          <FaceRecognition box={box} imageurl={imageURL} />
        </div>
      ) : route === "signin" ? (
        <div>
          <Logo />
          <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
        </div>
      ) : (
        <div>
          <Logo />
          <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        </div>
      )}
    </div>
  );
}

export default App;
