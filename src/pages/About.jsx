import React from "react";
import AboutInfo from "../components/AboutInfo";
import Steps from "../components/Steps";
import GetQuote from "../components/GetQuote";

const About = () => {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-24">
        <AboutInfo />
        <Steps />
      </div>
      <GetQuote />
    </>
  );
};

export default About;
