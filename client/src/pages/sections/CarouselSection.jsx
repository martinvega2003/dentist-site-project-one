import React, { useEffect, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { TestimonialCard } from "../../components/TestimonialCard";
import { reviewsData } from "../../data/reviewsData";

const CarouselSection = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const prev = () => {
    if (reviewsData.length === 0) return;
    setIndex((index) => (index === 0 ? reviewsData.length - 1 : index - 1));
  };

  const next = () => {
    if (reviewsData.length === 0) return;
    setIndex((index) => (index === reviewsData.length - 1 ? 0 : index + 1));
  };

  return (
      	<div id="testimonials" className="bg-white flex justify-center items-center min-h-screen">
          	<div className="md:w-[70%] w-full p-6 pt-24">
                <h2 className="text-4xl font-bold text-center text-gray-600 lg:block xs:hidden">This is what our clients can tell you about us...</h2>
                <h2 className="text-4xl font-bold text-center text-white lg:hidden xs:block">This is how our clients rated us...</h2>
                <div className="flex justify-center items-center gap-4 mb-8">
                <div className="text-2xl text-dark">
                    <span className="text-yellow-500">★★★★☆</span> (100 reviews)
                </div>
            </div>

                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform ease-out duration-500"
                        style={{
                        transform: `translateX(-${index * 100}%)`,
                        }}
                    >
                        {reviewsData.map((review) => (
                            <div className="min-w-full min-h-full flex justify-center items-center">
                                <TestimonialCard 
                                    reviewer={review.reviewer}
                                    review={review.review}
                                    stars={review.stars}
                                    image={review.image}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute w-full inset-0 flex items-center justify-between">
                        <button onClick={prev} className="p-2 sm:p-3 text-3xl sm:text-5xl rounded-full shadow bg-white/30 sm:bg-white/80 text-gray-800 hover:bg-primary hover:text-white">
                        <SlArrowLeft />
                        </button>
                        <button onClick={next} className="p-2 sm:p-3 text-3xl sm:text-5xl rounded-full shadow bg-white/30 sm:bg-white/80 text-gray-800 hover:bg-primary hover:text-white">
                        <SlArrowRight />
                        </button>
                    </div>
                    <div className="absolute bottom-4 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                        {reviewsData.map((_, i) => (
                            <div
                            key={i}
                            className={`transition-all w-2 sm:w-3 h-2 sm:h-3 bg-black rounded-full ${
                                index === i ? "p-2" : "bg-opacity-50"
                            }`}
                            />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default CarouselSection;
