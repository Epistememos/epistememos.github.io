import {useEffect} from 'react'
import {media, involvements, projects, achievements} from '../../lib/data';
import Navbar from '../Navbar';
import About from '../About';
import Showcase from '../Showcase';

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
