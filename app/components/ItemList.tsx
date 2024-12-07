import React from 'react'
import { Category } from '../lib/interfaces'
import Image from 'next/image'

 const ItemList: React.FC<{category: Category}> = ({category}) => {
  return (
    <div className='bg-gray-50 dark:bg-sand-400 border-dashed border-4 shadow-lg border-gray-200 m-4 rounded-lg'>
        <ul className="flex flex-col h-full">
        {category.items.slice(1).map((item, index) => (
          <div key={index} className="text-lg sm:text-4xl  px-2 sm:px-16 py-4 font-mono ">
          <div className="w-full h-full py-2 rounded-lg bg-gray-200 dark:bg-sand-700 shadow-md hover:shadow-xl">
            <div className={`flex w-full divide-y-2 divide-gray-400 dark:divide-white md:divide-y-0 md:divide-x-2  ${index % 2 === 1 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse md:divide-x-reverse'} `}>
              <div className="px-6 py-4 w-full md:w-1/3 ">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="rounded-md max-h-76 w-auto justify-self-center"
                />
              </div>
              <div className="py-2 px-6 w-full text-center sm:text-justify">
                <h2>{item.title}</h2>
                <h3 className="text-xl font-bold">
                  Date: {item.time}
                </h3>
                <p className="text-sm sm:text-xl text-center sm:text-justify">
                  {item.description}
                </p>
                {item.path && (
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        ))}
      </ul>
    
    </div>
  )
}
export default ItemList;
