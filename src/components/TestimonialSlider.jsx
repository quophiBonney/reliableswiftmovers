import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Customer testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    message:
      "Reliable Swift Movers made my relocation stress-free! The team was professional, on time, and handled my belongings with extreme care. I highly recommend their services to anyone looking for a reliable moving company.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles, CA",
    message:
      "Excellent moving experience! The crew was efficient and careful with all our furniture. They arrived on time and completed the move within the estimated timeframe. Great value for money!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Miami, FL",
    message:
      "I was nervous about moving cross-country, but Reliable Swift Movers exceeded my expectations. The team was communicative, professional, and my items arrived in perfect condition.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Chicago, IL",
    message:
      "Best moving company I've ever used. The staff was friendly and professional. They wrapped everything carefully and handled my antique furniture with special care. Will definitely use again!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Seattle, WA",
    message:
      "Outstanding service from start to finish. The booking process was easy, the movers were punctual, and they handled my fragile items with extra care. Very satisfied customer here!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Boston, MA",
    message:
      "Reliable Swift Movers delivered excellent service. The team was organized, efficient, and very professional. They made my office move smooth and hassle-free. Highly recommended!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
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
          320: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full min-h-[380px] flex flex-col relative">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-blue-100">
                <Quote size={48} />
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 mb-4 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Message */}
              <p className="text-gray-600 text-center leading-relaxed flex-grow">
                "{testimonial.message}"
              </p>

              {/* Customer Info */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
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
