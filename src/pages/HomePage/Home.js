import React from "react";
import { InfoSection } from "../../components";
import { HomeObj1, HomeObj2, HomeObj3, HomeObj4 } from "./Data";
const Home = () => {
  return (
    <>
      <InfoSection {...HomeObj1} />
      <InfoSection {...HomeObj2} />
      <InfoSection {...HomeObj3} />
      <InfoSection {...HomeObj4} />
    </>
  );
};

export default Home;
