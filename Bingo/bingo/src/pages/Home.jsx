import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";

const Home = () => {
  return (
    <div className="">
      <Snowfall snowflakeCount={200} />

      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
