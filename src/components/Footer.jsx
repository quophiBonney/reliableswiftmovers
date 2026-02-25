import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black/5 grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8 text-black">
      <div className="mt-10">
        <h3 className="text-2xl font-bold ">Reliable Swift Movers</h3>
        <p className="mt-2">
          Reliable Swift Movers is a trusted moving company dedicated to
          providing
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <ul>
          <li>
            <Link to="#">Facebook</Link>
          </li>
          <li>
            <Link to="#">Twitter</Link>
          </li>
          <li>
            <Link to="#">Instagram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
