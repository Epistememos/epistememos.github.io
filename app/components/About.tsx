import React from "react";
import { Item } from "../lib/interfaces";
import { achievements } from "../lib/data";
import Image from "next/image";

const About: React.FC<{mostRecent: Item, message:string, title:string}> = ({mostRecent, message, title}) => {
  
  return (
    <div>
      <div id="about" className="text-4xl text-gray-900 px-4 sm:px-16 py-4 font-mono ">
        <h1 className="font-black pb-4 uppercase">{message}</h1>
        <div className="w-full h-full py-2 rounded-lg bg-gray-200 shadow-md hover:shadow-xl">
          <h2 className="py-2 px-6 text-xl sm:text-4xl">{title}</h2>
          <div className="flex w-full divide-y-2 divide-gray-400 flex-col md:flex-row md:divide-x-2 md:divide-y-0">
            <div className="px-6 py-4 w-full md:w-1/3">
              <Image
                src={mostRecent.img}
                alt={mostRecent.title}
                width={1000}
                height={1000}
                className="rounded-md max-76 w-auto justify-self-center"
              />
            </div>
            <div className="py-2 px-6 w-full">
              <h2>{mostRecent.title}</h2>
              <h3 className="text-xl font-bold">
                Date: {mostRecent.time}
              </h3>
              <p className="text-sm sm:text-xl text-justify">
                {mostRecent.description}
              </p>
              {mostRecent.path && (
                <a href={mostRecent.path} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default About;