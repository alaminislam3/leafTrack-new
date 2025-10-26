"use client"
import firstImg from "@/assets/first.jpg";
import secondImg from "@/assets/secound.jpg";
import thirdImg from "@/assets/third.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "slide1",
      image: thirdImg,
      text: "Discover Your Green Thumb: Essential Plant Care Tips for Thriving Indoor Gardens.",
    },
    {
      id: "slide2",
      image: firstImg,
      text: "Nurture nature, and it will nurture you back.",
    },
    {
      id: "slide3",
      image: secondImg,
      text: "Transform your space with the calm of green leaves.",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto ">
        {/* Swiper Container */}
        <div className="relative w-full  overflow-hidden  shadow-lg">
          {/* Slides Container */}
          <div className="relative w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {/* Responsive Image Heights */}
                <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Text Overlay - Responsive */}
                <div
                  className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 
                     bg-gradient-to-r from-green-700 to-transparent 
                     text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-md text-sm sm:text-base md:text-lg font-semibold max-w-xs sm:max-w-md md:max-w-2xl text-center"
                >
                  {slide.text}
                </div>

                {/* Navigation Buttons - Responsive */}
                <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                  <button
                    onClick={handlePrev}
                    className="px-2 py-2  hover:bg-gray-200 text-black border-none shadow-md"
                    aria-label="Previous slide"
                  >
                    ❮
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-2 py-2  hover:bg-gray-200 text-black border-none shadow-md"
                    aria-label="Next slide"
                  >
                    ❯
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators - Responsive */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-6 sm:w-8"
                    : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swiper;