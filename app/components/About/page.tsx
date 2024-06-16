import React from "react";
import { achievements } from "../../lib/data.js";
import Image from "next/image.js";

export default function About() {
  const mostRecentAchievement = achievements[0];
  return (
    <div>
      <div className="text-3xl px-16 py-4 bg-gray-200 text-black">
        <h1 className="font-bold">ENJOYING LIFE TO THE FULLEST</h1>
        <p className="text-xl">The goal is simple. </p>
      </div>
      <div className="text-4xl px-16 py-4 ">
        <h1 className="font-black py-4">OPENING UP THE LIMIT</h1>
        <div className="w-full h-full py-2 rounded-lg bg-gray-200 shadow-md hover:shadow-xl ">
          <h2 className="py-2 px-4 text-2xl">Most Recent Achievment</h2>
          <div className="flex w-full divide-x-2 divide-gray-400">
            <div className="px-5 py-4 w-full ">
              <Image
                src={mostRecentAchievement.img}
                alt={mostRecentAchievement.title}
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
            <div className="py-2 px-6">
              <h2>{mostRecentAchievement.title}</h2>
              <h3 className="text-xl font-bold">
                Date: {mostRecentAchievement.time}
              </h3>
              <p className="text-xl text-justify">
                {mostRecentAchievement.description}
              </p>
              <a href={mostRecentAchievement.path} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
