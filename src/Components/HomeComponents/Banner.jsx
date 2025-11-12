import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

const Banner = () => {
  const slides = [
    {
      title: "Unleash Your Reading List",
      text: "Dive into our vast, user-curated collection and discover hidden gems.",
      buttonText: "Explore All Books",
      buttonLink: "/all-books",
      gradient: "from-blue-700 to-indigo-800",
      buttonClasses: "bg-yellow-400 hover:bg-yellow-500 text-blue-900",
    },
    {
      title: "Build The Haven",
      text: "Share your favorite books with the community in a few simple steps.",
      buttonText: "Create New Book",
      buttonLink: "/add-books",
      gradient: "from-indigo-800 to-purple-900",
      buttonClasses: "bg-green-400 hover:bg-green-500 text-purple-900",
    },
  ];

  const buttonBaseClasses =
    "font-bold text-lg md:text-xl py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg min-w-[200px] text-center";

  return (
    <section className="banner w-full h-[500px] mb-12 shadow-2xl overflow-hidden relative">
      <style>
        {`
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background: #ccc;
        }
        `}
      </style>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        effect={"flip"}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`w-full h-full text-white flex items-center justify-center bg-linear-to-r ${slide.gradient}`}
          >
            <div className="text-center p-16 relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 font-light opacity-90 max-w-3xl mx-auto">
                {slide.text}
              </p>
              <Link
                to={slide.buttonLink}
                className={`${buttonBaseClasses} ${slide.buttonClasses}`}
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
