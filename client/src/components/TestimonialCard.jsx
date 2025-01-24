import React from 'react';

export const TestimonialCard = ({ reviewer, review, stars, image }) => {
  return (
    <div className="relative z-0 flex-shrink-0 w-[60%] lg:p-6 xs:p-16 bg-white rounded-tl-[50px] rounded-br-[50px] border-2">
      <div className="flex justify-center mb-4">
        <img src={image} className="w-20 h-20 bg-gray-800 rounded-full" alt={reviewer} />
      </div>
      <p className="text-gray-800 text-lg mb-4 lg:block xs:hidden">"{review}"</p>
      <div className="flex items-center mb-4">
        <span className="mr-2">{stars}</span>
        <span className="text-gray-600">5 stars</span>
      </div>
      <p className="text-gray-700 font-medium">{reviewer}</p>
    </div>
  );
};

