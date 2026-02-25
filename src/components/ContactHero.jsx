import React from "react";
import van from "../assets/swift_movers_van.png";
const ContactHero = () => {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center ">
        <h1 className="text-start text-3xl md:text-6xl font-bold text-shadow-lg mb-6 text-blue-700">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          We are here to help you with all your moving needs. Whether you have
          questions about our services, need a quote, or want to schedule a
          move, our team is ready to assist you. Please fill out the form below
          or give us a call, and we will get back to you as soon as possible.
        </p>
      </div>
      <div>
        <img src={van} alt="Reliable Swift Movers" className="w-full" />
      </div>
    </section>
  );
};

export default ContactHero;
