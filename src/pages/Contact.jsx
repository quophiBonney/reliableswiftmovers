import React from "react";
import ContactHero from "../components/ContactHero";
import TollFree from "../components/TollFree";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-24">
        <ContactHero />
        <ContactForm />
      </div>
      <TollFree />
    </>
  );
};

export default Contact;
