import React from "react";
import { Outlet } from "react-router-dom";
import HowToPlay from "../components/HowToPlay";
const Rules = () => {
  return (
    <section>
      <div className="Container border border-white my-6 rounded-lg bg-white overflow-y-scroll max-h-[50dvh]">
        <HowToPlay />
      </div>
    </section>
  );
};

export default Rules;
