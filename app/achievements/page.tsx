"use client";

import React from 'react'
import { achievements } from "../lib/data";
import Navbar from '../components/Navbar';
import About from '../components/About';
import ItemList from '../components/ItemList';


export default function Achievements() {
  return (
    <div>
      <Navbar />
      <About mostRecent={achievements.items[0]} message="“Is life not a thousand times too short for us to bore ourselves?”" title="Last Crazy Thing I've Done" />
      <ItemList category={achievements} />
    </div>
  )
}
