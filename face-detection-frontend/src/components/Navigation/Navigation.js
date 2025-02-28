import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className="d-flex justify-content-end m-2 p-3">
      {isSignedIn ? (
        <button
          className="btn btn-link text-dark fs-6 text-decoration-none mx-3"
          onClick={() => onRouteChange("signout")}
        >
          Sign Out
        </button>
      ) : (
        <>
          <button
            className="btn btn-link text-dark fs-6 text-decoration-none mx-3"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </button>
          <button
            className="btn btn-link text-dark fs-6 text-decoration-none mx-3"
            onClick={() => onRouteChange("register")}
          >
            Register
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;