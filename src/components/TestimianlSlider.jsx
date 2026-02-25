import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Using local assets
const dummyPlaces = [
  {
    name: "Santorini, Greece",
    image: "/src/assets/hero.png",
  },
  {
    name: "Bali, Indonesia",
    image: "/src/assets/swift_movers_van.png",
  },
  {
    name: "Dubai Desert",
    image: "/src/assets/hero.png",
  },
  {
    name: "Paris, France",
    image: "/src/assets/swift_movers_van.png",
  },
  {
    name: "Cape Town, South Africa",
    image: "/src/assets/hero.png",
  },
  {
    name: "Maldives",
    image: "/src/assets/swift_movers_van.png",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="px-5 md:px-10 mt-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-blue-600 text-xl font-semibold mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal italic mb-3 text-black">
          Happy <span className="font-extrabold">Clients</span>
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        coverflowEffect={{
          rotate: -10,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
      >
        {dummyPlaces.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="h-96 md:h-[400px] w-full overflow-hidden rounded-xl">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-black uppercase text-lg font-bold text-center mt-3">
              {place.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="flex justify-center gap-5 items-center mt-10">
        <div className="custom-prev border-gray-700 border-2 p-4 font-bold text-2xl rounded-full text-gray-700 cursor-pointer hover:bg-gray-100">
          ←
        </div>

        <div className="custom-next border-gray-700 border-2 p-4 font-bold text-2xl rounded-full text-gray-700 cursor-pointer hover:bg-gray-100">
          →
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
