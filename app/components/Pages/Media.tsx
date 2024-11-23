"use client";

import React from 'react'
import { media } from "../../lib/data";
import { Item, Category } from '../../lib/interfaces';
import About from '../About';
import Navbar from '../Navbar';
import ItemList from '../ItemList';

export default function Media() {
  return (
    <div>
      <Navbar />
      <About mostRecent={media.items[0]} message="Writing what you think is based" title="Last Article I Wrote" />
      <ItemList category={media} />
    </div>
  )
}

