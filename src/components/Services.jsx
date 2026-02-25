import React from "react";
import van from "../assets/hero.png";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="bg-blue-600 grid grid-cols-1 md:grid-cols-2 gap-16 p-10 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Residential Moving</h3>
          <p className="font-light text-base mb-6">
            We provide expert residential moving services to ensure a smooth and
            stress-free move for you and your family.
          </p>
          <Link
            to="/services"
            className="font-bold px-4 py-2 text-red-600  rounded hover:text-red-700 transition"
          >
            Learn More <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Commercial Moving</h3>
          <p className="font-light text-base mb-6">
            Our commercial moving services are designed to minimize downtime and
            ensure a seamless transition for your business.
          </p>
          <Link
            to="/services"
            className="font-bold px-4 py-2 text-red-600 rounded hover:text-red-700 transition"
          >
            Learn More <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Long-Distance Moving</h3>
          <p className="font-light text-base mb-6">
            We offer reliable long-distance moving services across Canada,
            ensuring your belongings arrive safely and on time.
          </p>
          <Link
            to="/services"
            className="font-bold px-4 py-2 text-red-600  rounded hover:text-red-700 transition"
          >
            Learn More <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Long-Distance Moving</h3>
          <p className="font-light text-base mb-6">
            We offer reliable long-distance moving services across Canada,
            ensuring your belongings arrive safely and on time.
          </p>
          <Link
            to="/services"
            className="font-bold px-4 py-2 text-red-600  rounded hover:text-red-700 transition"
          >
            Learn More <ChevronRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
      <div>
        <img
          src={van}
          alt="Moving Services"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Services;
