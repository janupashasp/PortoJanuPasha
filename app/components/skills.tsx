export default function Skills() {
    return (
        <section id="skills" className="py-10 px-6 md:px-20 flex flex-col items-center bg-white dark:bg-black">
            <div className="px-5 py-1 bg-gray-200 dark:bg-gray-700 rounded-xl flex justify-center items-center mb-4">
                <div className="justify-start text-gray-600 dark:text-gray-300 text-sm font-medium font-['Inter'] leading-5">Skills</div>
            </div>
            <h2 className="w-full max-w-[576px] text-center justify-start text-gray-600 text-md md:text-xl font-normal  leading-7 dark:text-gray-400"> My core competencies in terms of skills, tools, and technologies: </h2>
            <div className="w-full mt-8 max-w-5xl flex flex-col items-center gap-12">
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-10 place-items-center">

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/icon-javscript.svg" alt="Javascript"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal leading-7">Javascript</div>
                    </div>


                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-8 h-8 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/icon-typescript.svg" alt="Typescript"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal leading-7">Typescript</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/icon-react.svg" alt="React"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">React</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/icon-tailwindcss.svg" alt="Tailwind"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">Tailwind</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/icon-figma.svg" alt="Figma"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">Figma</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/github.webp" alt="Github" className="dark:invert"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">Github</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/c++.svg" alt="C++"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">C++</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/java.svg" alt="Java"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">Java</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/css.svg" alt="CSS"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">CSS</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-[70px] sm:w-[90px]">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img src="/icon/HTML.svg" alt="HTML"></img>
                        </div>
                        <div className="justify-start text-gray-600 text-lg dark:text-gray-400 font-normal  leading-7">HTML</div>
                    </div>
                </div>
            </div>
        </section >
    );
}