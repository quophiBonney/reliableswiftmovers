import { Link } from "react-router-dom";
import staff from "../assets/hero.png";
const Moving = () => {
  return (
    <section className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="space-y-4 lg:space-y-5">
        <p className="font-light text-xl leading-relaxed">
          If you are relocating or moving anywhere in <strong>Canada</strong>,
          get an instant hassle-free moving quote from{" "}
          <strong>
            Reliable Swift <span className="text-red-500">Movers</span>
          </strong>
        </p>
        <p className="font-light text-xl leading-relaxed">
          When you are planning a move, there are many details to consider, and
          one of the most important issues is how will you accomplish the move.
          For a seamless, stress-free move, the best thing to do is to have
          professional movers handle your move for you. And with
          allcanadamovers.com, you can get instant, free and competitive quotes
          from the best movers in your area, to save up to 65% on your move.
          With just a few clicks, you will have several no-obligation quotes
          from Canadian moving companies to compare and you will have your move
          arranged in no time!
        </p>
        <p className="font-light text-xl leading-relaxed">
          When you hire the best movers in Canada for your move, you can count
          on professional Canadian movers who know how to efficiently and safely
          move your belongings, ensuring everything is properly protected, and
          loaded strategically and efficiently, for a seamless move.
        </p>
        <Link
          to="/services"
          className="inline-block px-6 py-3 rounded bg-red-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get Your Free Quote
        </Link>
      </div>
      <div>
        <img src={staff} alt="Man working in moving service van" />
      </div>
    </section>
  );
};

export default Moving;
