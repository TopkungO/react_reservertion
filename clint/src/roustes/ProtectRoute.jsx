import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router";

const ProtectRoute = ({ element }) => {
  const { isLoaded, isSignedIn } = useAuth();

  console.log(isSignedIn);

  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }
  if (!isSignedIn) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <h1>Access denide!! goto..<Link to="/">Home</Link></h1>
        
      </div>
    );
  }

  return element;
};

export default ProtectRoute;
