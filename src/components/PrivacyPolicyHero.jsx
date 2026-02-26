import React from "react";
import van from "../assets/swift_movers_van.png";
const PrivacyPolicyHero = () => {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center ">
        <h1 className="text-start text-3xl md:text-6xl font-bold text-shadow-lg mb-6 text-blue-700">
          Privacy Policy
        </h1>
      </div>
      <div>
        <img src={van} alt="Reliable Swift Movers" className="w-full" />
      </div>
    </section>
  );
};

export default PrivacyPolicyHero;
