"use client"; 
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { theme, setTheme } = useTheme();


    //hook to show navbar when scrolling up
    useEffect(() => {
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

    useEffect(() => {
        if (theme != 'light' && theme != 'dark') {
            setTheme('light');
        }
    }, [theme, setTheme]);

    return (
        <div>
            <div className="flex-col bg-[url('/assets/img-mountain.png')]  bg-cover bg-center h-[440px] w-full font-mono dark:bg-[url('/assets/img-desert.png')]">
                <div className={`fixed top-0  left-0 w-full z-50 flex py-2 h-16 justify-center sm:justify-between text-white text-lg bg-gray-900 bg-opacity-30 dark:bg-opacity-80 dark:bg-sand-950 transition-opacity duration-300 ${showNavbar ? "opacity-100" : "opacity-0 -translate-y-full"}`}>
                    <h1 className="text-4xl px-4 hidden sm:block">YOUDAS YESSAD</h1>
                    <div className="flex flex-row items-center justify-center h-full divide-x text-right sm:px-2 text-xs sm:text-lg">
                        <a href="/" className="flex items-center h-full sm:p-2 rounded-l-md hover:bg-slate-900 dark:hover:bg-sand-950 hover:bg-opacity-25 dark:hover:bg-opacity-25">HOME</a>
                        <a href="/media" className="flex items-center h-full sm:p-2 hover:bg-slate-900 dark:hover:bg-sand-950 hover:bg-opacity-25 dark:hover:bg-opacity-25">MEDIA</a>
                        <a href="/involvements" className="flex items-center h-full sm:p-2 hover:bg-slate-900 dark:hover:bg-sand-950 hover:bg-opacity-25 dark:hover:bg-opacity-25">INVOLVEMENTS</a>
                        <a href="/projects" className="flex items-center h-full sm:p-2 hover:bg-slate-900 dark:hover:bg-sand-950 hover:bg-opacity-25 dark:hover:bg-opacity-25">PROJECTS</a>
                        <a href="/achievements" className="flex items-center h-full sm:p-2  hover:bg-slate-900 dark:hover:bg-sand-950 hover:bg-opacity-25 dark:hover:bg-opacity-25">ACHIEVEMENTS</a>
                        <div>
                            <button 
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className="flex items-center p-2 hover:bg-opacity-25 rounded-r-md"
                            >
                                {theme === 'light' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
