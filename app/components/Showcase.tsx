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
    <div className='flex flex-col p-2 w-full h-full bg-gray-200 dark:bg-sand-700 rounded-lg divide-y-2 divide-gray-400 dark:divide-white'>
      <div className='relative flex justify-center items-center h-16'>
        <a href={category.link} className='w-fit text-2xl justify-self-center flex font-black uppercase sm:text-4xl  drop-shadow-lg hover:drop-shadow-none  text-center'>
          {category.category}
        </a>
      </div>
      <ul className="flex flex-row h-full">
        {itemsToShow > 0 && category.items.length > 0 ? (
          category.items.slice(0, itemsToShow).map((item, index) => (
            <ShowcaseCard key={index} data={item} />
          ))
        ) : (
          <li className="text-center text-gray-500">No items to display</li>
        )}
      </ul>
    </div>
    </div>
  );
}

export default Showcase;