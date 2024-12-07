import React, { useState } from "react";
import Image from "next/image";
import { Item } from "../lib/interfaces";


const ShowcaseCard: React.FC<{ data: Item }> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const titleClass = data.title.length > 20 ? "text-md" : "text-xl"; 

  return (
    <div 
      onClick={() => { window.location.assign(data.path || "#")}}
      className="flex flex-col w-full h-full justify-center items-center p-2 hover:filter sm:hover:grayscale transition duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[20rem] sm:h-[30rem]">
        <Image
          src={data.img}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-md"
          sizes="10vm"
        />
        <h1 
          className={`${isHovered && window.innerWidth >= 640 ? "text-sm" : titleClass} text-center p-2 z-10 absolute transition-all duration-300 ease-in-out ${isHovered && data.description && window.innerWidth >= 640 ? "top-1/2 bg-opacity-80 max-h-[29rem] text-xs" : "top-1/4"} left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-60 bg-black text-white w-5/6 rounded-md`}
        >
          {isHovered && data.description && window.innerWidth >= 640 ? data.description : data.title}
        </h1>
      </div>
    </div>
  
  );
};

export default ShowcaseCard;
