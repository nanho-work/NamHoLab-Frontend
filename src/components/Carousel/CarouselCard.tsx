// CarouselCard.tsx


import React from 'react';

interface CarouselCardProps {
  data: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    color : string
  };
}


const CarouselCard: React.FC<CarouselCardProps> = ({ data }) => {
  return (
    <div
      className="w-60 h-70 text-white rounded-3xl shadow-xl flex flex-col items-center justify-between px-6 py-5 transition-opacity duration-500 ease-in-out"
      style={{ backgroundColor: data.color }}
    >
      <div className="flex flex-col items-center">
        <div className="mb-4">{data.icon}</div>
        <h2 className="text-2xl font-bold text-center">{data.title}</h2>
        <p className="text-sm text-center mt-2 text-blue-100">
          {data.description}
        </p>
      </div>
      <a
        href={data.link}
        className="mt-6 inline-flex items-center text-white text-sm font-semibold hover:text-blue-300 transition"
      >
        자세히 보기 →
      </a>
      
    </div>
    
  );
};

export default CarouselCard;