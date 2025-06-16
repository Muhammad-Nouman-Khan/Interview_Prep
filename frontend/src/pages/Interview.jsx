import React from "react";
import Navbar from "../components/Navbar";
import Agent from "../components/Agent";

const Interview = () => {
  return (
    <div className="flex mx-auto max-w-7xl flex-col gap-12  px-16 py-4 max-sm:px-4 ">
      <Navbar />
      <h2 className="text-2xl font-bold">Interview Generation</h2>
      <Agent userName="You" userId="user1" type="generate" />
    </div>
  );
};

export default Interview;
