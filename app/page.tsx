import Image from "next/image";

import "../styles/style.css";
import Navbar from "./components/Navbar/page";
import About from "./components/About/page";

export default function Home() {
  return (
    <main className="font-mono">
      <Navbar />
      <About />
    </main>
  );
}
