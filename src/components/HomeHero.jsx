import React from "react";
import van from "../assets/swift_movers_van.png";
const HomeHero = () => {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-shadow-lg mb-6 text-blue-700">
          Save Up To 60% On Your Move With Reliable Swift Movers
        </h1>
        <div class="bg-blue-600 rounded-lg p-4 md:p-6 lg:p-10">
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
            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded font-bold text-lg hover:bg-red-700 transition-colors cursor-pointer">
              Get Quote
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={van} alt="Reliable Swift Movers" className="w-full" />
      </div>
    </section>
  );
};

export default HomeHero;
