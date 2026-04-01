import { BlurFade } from "@/components/ui/blur-fade"
import { TypingAnimation } from "@/components/ui/typing-animation"

export default function Hero() {
    return (
        <BlurFade inView delay={0.2} direction="up" className="w-full">
            <section id="hero" className="flex relative min-h-screen justify-center items-center gap-10 px-4 sm:px-10 md:px-20 overflow-x-hidden bg-white/0 dark:bg-neutral-900/50">
            
            <div className="relative w-full py-16 sm:py-24 backdrop-blur-xl bg-white-100/30 dark:bg-neutral-800/10 border border-white/10 dark:border-white/10 rounded-2xl shadow-xl px-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2">
                <div className="absolute hidden md:block z-10 bottom-0 right-10">
                    <img
                        src="/ProfileAdobe.png"
                        alt="profile"
                        className=" w-[500px] h-[500px] gradien object-cover  object-[50%_0.1%] "
                    />
                </div>

                <div className="flex flex-col items-start gap-6 sm:gap-10 z-20 w-full">
                    <div className="pl-2 gap-2 flex flex-col w-full">
                        <h2 className="text-2xl text-slate-800 dark:text-gray-100 font-bold">Hi, I'm Janu</h2>
                        <TypingAnimation className="text-4xl sm:text-5xl md:text-6xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-blue-500 dark:bg-gradient-to-r dark:from-orange-800 dark:to-orange-400 font-inter dark:font-lato">
                            Frontend Developer
                        </TypingAnimation>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md">
                            Building clean, responsive, and interactive web interfaces.
                        </p>
                    </div>
                    <div className="flex flex-col gap-0">
                        <div className="gap-2 flex items-center">
                            <img src="/location.png" alt="maps" className="w-6 h-6 dark:invert" />
                            <p className="text-sm text-gray-900 dark:text-gray-300">Based in Yogyakarta, Indonesia</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/phone1.png" alt="maps" className="w-6 h-6 dark:invert" />
                            <p className="text-sm text-gray-900 dark:text-gray-300">Available for work</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/mail.png" alt="maps" className="w-6 h-6 dark:invert" />
                            <p className="text-sm text-blue-900 dark:text-slate-200 break-all">
                                janupashashandyputra@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <a
                            href="https://github.com/janupashasp"
                            className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                        >
                            <img src="/github.png" alt="github" className=" w-[24px] h-[24px] dark:invert" />
                        </a>
                        <a
                            href="https://instagram.com/janupashasp"
                            className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                        >
                            <img src="/instagram.png" alt="instagram" className="w-[24px] h-[24px] dark:invert" />
                        </a>
                        <a
                            href="https://wa.me/628112852007"
                            className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                        >
                            <img src="/wa.png" alt="whatsapp" className="w-[24px] h-[24px] dark:invert" />
                        </a>
                    </div>
                </div>
                <div className="relative mt-6 md:absolute md:bottom-5 md:right-30 z-50">
                    <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full p-1 shadow-sm dark:bg-slate-800/60">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:scale-105 transition dark:bg-orange-500 dark:hover:bg-orange-600">
                            <a href="/CV_Janu.pdf" target="_blank" rel="noopener noreferrer">
                                Download CV
                            </a>
                        </button>

                        <a href="#experience" className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100/20 dark:hover:bg-gray-700 rounded-full transition">
                            View Work
                        </a>
                    </div>

                </div >
                <div className="pointer-events-none z-30 absolute bottom-0 right-0 w-full h-[120px] bg-gradient-to-t from-violet-100/90 dark:from-slate-900/90 to-transparent rounded-b-2xl "></div>

            </div>
            
        </section >
        </BlurFade>
    );
}