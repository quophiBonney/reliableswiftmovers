import React from "react";

const Steps = () => {
  return (
    <section className="mt-16 lg:mt-24 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-600 text-white rounded-full w-16 h-16 p-4 font-bold text-4xl flex items-center justify-center">
            1
          </div>
          <h3 className="text-xl font-bold">Get a Quote</h3>
          <p className="text-center">
            Fill out our online form or call us to get a free, no-obligation
            quote for your move.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-600 text-white rounded-full w-16 h-16 p-4 font-bold text-4xl flex items-center justify-center">
            2
          </div>
          <h3 className="text-xl font-bold">Schedule Your Move</h3>
          <p className="text-center">
            Choose a convenient date for your move and we will work with you to
            create a customized moving plan.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-600 text-white rounded-full w-16 h-16 p-4 font-bold text-4xl flex items-center justify-center">
            3
          </div>
          <h3 className="text-xl font-bold">Move with Confidence</h3>
          <p className="text-center">
            Our professional movers will handle your belongings with care and
            ensure a smooth and stress-free moving experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
