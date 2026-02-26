import HomeHero from "../components/HomeHero";
import Moving from "../components/Moving";
import Services from "../components/Services";
import TestimonialSlider from "../components/TestimonialSlider";
import TollFree from "../components/TollFree";

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-24">
        <HomeHero />
        <Moving />
      </div>
      <Services />
      <TestimonialSlider />
      <TollFree />
    </>
  );
};

export default Home;
