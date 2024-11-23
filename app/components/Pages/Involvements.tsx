"use client";

import React from 'react'
import { involvements } from "../../lib/data";
import { Item, Category } from '../../lib/interfaces';
import About from '../About';
import Navbar from '../Navbar';
import ItemList from '../ItemList';

export default function Involvements() {
  return (
    <div>
      <Navbar />
      <About mostRecent={involvements.items[0]} message="If you like it just do it." title="Last Thing I've Roped Myself In" />
      <ItemList category={involvements} />
    </div>
  )
}
