'use client'

import {media, involvements, projects, achievements} from './lib/data';
import Navbar from './components/Navbar';
import About from './components/About';
import Showcase from './components/Showcase';
import '../styles/style.css';


const Main: React.FC = () => {
    const categories = [media, involvements, projects, achievements];
  

  
    return (
      <main className="font-mono">
        <Navbar />
        <About mostRecent={achievements.items[0]} message="FREE WILL IS CRAZYYYY" title="Most Recent Achievement"/>
        {categories.map((category, index) => (
          <Showcase key={index} category={category} />
        ))}
      </main>
    );
  };
  
  export default Main;
