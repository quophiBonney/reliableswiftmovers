import React from "react";

const GetQuote = () => {
  return (
    <section className="bg-red-600 p-6 lg:p-16 grid grid-cols-1 lg:grid-cols-2 mt-16 space-y-4 lg:space-y-0">
      <div className="text-white flex flex-col justify-center items-center">
        <h4 className="text-3xl font-bold">Get Your Free Quote</h4>
        <p>
          Submit your information and get your quote confirmation shortly after.
        </p>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-bold text-white">Moving From:</label>
              <input
                type="text"
                placeholder="Enter your moving from location"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="font-bold text-white">Moving To:</label>
              <input
                type="text"
                placeholder="Enter your moving to location"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="font-bold text-white">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="font-bold text-white">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="font-bold text-white">Phone:</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="font-bold text-white">Zip Code:</label>
              <input
                type="text"
                placeholder="Enter your zip code"
                className="w-full p-3 md:p-4 rounded-md bg-white"
              />
            </div>
            {/* <div>
                <label className="font-bold text-white">
                  Preferred Timing:
                </label>
                <select className="w-full p-3 md:p-4 rounded-md bg-white">
                  <option value="">Select preferred timing</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-white">Type Of Move:</label>
                <select className="w-full p-3 md:p-4 rounded-md bg-white">
                  <option value="">Select Type Of Move</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
              </div> */}
          </div>
          <button className="mt-6 w-full border-2 border-white py-3 rounded font-bold text-lg text-white transition-colors cursor-pointer">
            Get Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetQuote;
