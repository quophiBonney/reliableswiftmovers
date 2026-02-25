import React from "react";
import van from "../assets/hero.png";
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Commercial Moving</h3>
          <p className="font-light text-base mb-6">
            Our commercial moving services are designed to minimize downtime and
            ensure a seamless transition for your business.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Long-Distance Moving</h3>
          <p className="font-light text-base mb-6">
            We offer reliable long-distance moving services across Canada,
            ensuring your belongings arrive safely and on time.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Long-Distance Moving</h3>
          <p className="font-light text-base mb-6">
            We offer reliable long-distance moving services across Canada,
            ensuring your belongings arrive safely and on time.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Learn More
          </button>
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
