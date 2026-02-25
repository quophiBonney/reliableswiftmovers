import React from "react";

const TollFree = () => {
  return (
    <section className="mt-16 lg:mt-20 flex flex-col justify-center items-center space-y-3 bg-red-500 text-white p-10">
      <p className="mt-10 text-2xl md:text-3xl  font-normal italic">
        If you are looking for{" "}
        <span className="font-extrabold">moving service</span> that meets your
        budget
      </p>
      <div className="flex items-center space-x-4 bg-blue-600 rounded-full p-5 lg:px-5">
        <span className="text-xl md:text-2xl lg:text-4xl font-bold">
          Call Us Toll-Free:
        </span>
        <a
          href="tel:1-800-123-4567"
          className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-200 hover:text-blue-400 transition-colors"
        >
          1-800-123-4567
        </a>
      </div>
    </section>
  );
};

export default TollFree;
