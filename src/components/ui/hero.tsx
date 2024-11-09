import React from "react";
import { Button } from "./button";

function hero() {
  return (
    <div className="flex flex-col w-full bg-primary-midnight-blue text-start pl-20 text-white h-screen ">
      <div className="mt-auto mb-auto space-y-5">
        <h1 className="text-6xl font-semibold ">
          Empowering change <br></br> Through Collective Goodwill
        </h1>
        <p>
          Join Charitan Today to discover and support charity initiatives that{" "}
          <br />
          resonate with your values, and help create a better world for all
        </p>
        <Button className="bg-white text-primary-midnight-blue w-40 h-14 font-bold text-base hover:text-white hover:bg-primary-steel-blue">
          DONATE NOW
        </Button>
      </div>
    </div>
  );
}

export default hero;
