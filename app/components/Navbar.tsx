"use client"; 
import { useState, useEffect } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Check if the code is running in the browser
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
                setLastScrollY(currentScrollY);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, [lastScrollY]);

    return (
        <div>
            <div className="flex-col bg-[url('/assets/img-mountain.png')] bg-cover bg-center h-[440px] w-full font-mono ">
                <div className={`fixed top-0 left-0 w-full z-50 flex py-2 h-max justify-between text-white text-lg bg-slate-900 bg-opacity-30 transition-opacity duration-300 ${showNavbar ? "opacity-100" : "opacity-0 -translate-y-full"}`}>
                    <h1 className="text-4xl px-4 ">YOUDAS YESSAD</h1>
                    <div className="flex align-middle divide-x text-right px-2  ">
                        <a href="" className="p-2 rounded-l-md hover:bg-slate-900 hover:bg-opacity-25">HOME</a>
                        <a href="media" className="p-2 hover:bg-slate-900 hover:bg-opacity-25">MEDIA</a>
                        <a href="involvements" className="p-2 hover:bg-slate-900 hover:bg-opacity-25">INVOLVEMENTS</a>
                        <a href="projects" className="p-2 hover:bg-slate-900 hover:bg-opacity-25">PROJECTS</a>
                        <a href="achievements" className="p-2 rounded-r-md hover:bg-slate-900 hover:bg-opacity-25">ACHIEVEMENTS</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
