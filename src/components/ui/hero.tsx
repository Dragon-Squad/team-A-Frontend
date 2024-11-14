import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

function hero() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-primary-midnight-blue text-start text-white h-screen small-mobile:pl-10">
      <div className="space-y-5 md:text-start">
        <h1 className="font-semibold text-4xl md:text-6xl">
          Empowering change <br></br> Through Collective Goodwill
        </h1>
        <p className="text-base font-light">
          Join Charitan Today to discover and support charity initiatives that{" "}
          <br />
          resonate with your values, and help create a better world for all
        </p>
        <Link to="/register">
          <Button className="bg-white text-primary-midnight-blue w-40 h-14 font-bold text-base hover:text-white hover:bg-primary-steel-blue mt-10">
            DONATE NOW
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default hero;
