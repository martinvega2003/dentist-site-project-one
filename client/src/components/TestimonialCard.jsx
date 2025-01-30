import React from 'react';

export const TestimonialCard = ({ reviewer, review, stars, image }) => {
  return (
    <div className="relative z-0 flex-shrink-0 w-[90%] sm:w-[60%] lg:p-6 xs:p-16 bg-white rounded-tl-[50px] rounded-br-[50px] border-2">
      <div className="flex justify-center mb-4">
        <img src={image} className="w-8 sm:w-12 md:w-20 h-8 sm:h-12 md:h-20 bg-gray-800 rounded-full" alt={reviewer} />
      </div>
      <p className="text-gray-800 text-xs md:text-md lg:text-lg mb-4">"{review}"</p>
      <div className="flex items-center mb-4">
        <span className="mr-2 text-xs sm:text-base">{stars}</span>
        <span className="text-gray-600 text-xs sm:text-base">5 stars</span>
      </div>
      <p className="text-gray-700 font-medium">{reviewer}</p>
    </div>
  );
};

