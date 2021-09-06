import React from "react";
import { InfoSection, Pricing } from "../../components";
import { HomeObj2, HomeObj3, HomeObj4 } from "../Data";
const Home = () => {
  return (
    <>
      <InfoSection {...HomeObj2} />
      <InfoSection {...HomeObj3} />
      <Pricing />
      <InfoSection {...HomeObj4} />
    </>
  );
};

export default Home;
