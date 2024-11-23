"use client";

import React from 'react'
import { projects } from "../../lib/data";
import { Item, Category } from '../../lib/interfaces';
import About from '../About';
import Navbar from '../Navbar';
import ItemList from '../ItemList';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <About mostRecent={projects.items[0]} message="This section is fr lacking hahaha, but watch it grow soon and very fast" title="Last Project" />
      <ItemList category={projects} />
    </div>
  )
}

