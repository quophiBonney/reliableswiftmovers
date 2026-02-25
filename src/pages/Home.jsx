import HomeHero from "../components/HomeHero";
import Moving from "../components/Moving";
import Services from "../components/Services";
import TestimonialSlider from "../components/TestimianlSlider";
import TollFree from "../components/TollFree";

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-10">
        <HomeHero />
        <Moving />
      </div>
      <Services />
      <TollFree />
      <TestimonialSlider />
    </>
  );
};

export default Home;
