"use client";
import React, { useEffect, useState } from 'react';
import ShowcaseCard from './ShowcaseCard';
import { Category } from '../lib/interfaces';

const Showcase: React.FC< {category: Category} > = ({ category }) => {
  const [itemsToShow, setItemsToShow] = useState(0); 

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(Math.floor((window.innerWidth - 100) / 270)); 
    };

    updateItemsToShow(); 
    window.addEventListener('resize', updateItemsToShow); 

    return () => {
      window.removeEventListener('resize', updateItemsToShow); 
    };
  }, []); 

  return (
    <div className='flex p-4 '>
    <div className='flex flex-col p-2 w-full h-full bg-gray-200 rounded-lg divide-y-2 divide-gray-400'>
      <div className='relative flex justify-center items-center h-16'>
        <a href={category.link} className='w-fit justify-self-center absolute font-black uppercase inset-x-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-900 drop-shadow-lg hover:drop-shadow-none hover:text-gray-950 text-center'>
          {category.category}
        </a>
      </div>
      <ul className="flex flex-row h-full">
        {category.items.slice(0, itemsToShow).map((item, index) => (
          <ShowcaseCard key={index} data={item} />
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Showcase;