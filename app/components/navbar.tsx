"use client";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export default function Navbar() {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () => {
        setisClick(!isClick);
    }






    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-xl backdrop-saturate-150 shadow-lg z-50 rounded-full border border-gray-200/80 dark:border-yellow-500  transition">
            <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between rounded-full">
                <div className="text-xl font-bold text-blue-900 dark:text-orange-500 ">Janu Porto</div>
                <div className="space-x-4 gap-4 flex items-center justify-center">
                    
                    <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex">
                        Home
                    </a>
                    <a href="#aboutme" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex ">
                        About Me
                    </a>
                    <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex ">
                        Skills
                    </a>
                    <a href="#achievement" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex ">
                        Achievements
                    </a>
                    <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex ">
                        Work
                    </a>
                    <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 hidden md:flex ">
                        Contact
                    </a>
                    <AnimatedThemeToggler />
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>)}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden fixed top-full left-1/2 -translate-x-1/2 w-full mt-4">
                    <div className="w-[90%] backdrop-blur-xl backdrop-saturate-150 max-w-md mx-auto flex flex-col items-center space-y-4 py-6 rounded-2xl bg-gray-100/90 dark:bg-black/90 shadow-2xl border border-blue-500 dark:border-yellow-500 transition-all duration-300">
                        <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1">
                            Home
                        </a>
                        <a href="#aboutme" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            About Me
                        </a>
                        <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Contact
                        </a>
                        <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Skills
                        </a>
                        <a href="#achievement" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Achievements
                        </a>
                        <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Work
                        </a>
                        <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-100 hover:bg-blue-900/80 dark:hover:text-gray-900 dark:hover:bg-orange-500 transition-all duration-300 rounded-lg p-1 ">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav >
    );
}
