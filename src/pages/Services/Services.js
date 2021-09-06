import React from "react";
import { InfoSection, Pricing } from "../../components";
import { HomeObj4 } from "../Data";
const Home = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...HomeObj4} />
    </>
  );
};

export default Home;
