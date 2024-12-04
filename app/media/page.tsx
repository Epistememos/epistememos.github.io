"use client";

import React from 'react'
import { media } from "../lib/data";
import About from '../components/About';
import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';

export default function Media() {
  return (
    <div>
      <Navbar />
      <About mostRecent={media.items[0]} message="Writing what you think is based" title="Last Article I Wrote" />
      <ItemList category={media} />
    </div>
  )
}

