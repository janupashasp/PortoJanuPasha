"use client"
import { BlurFade } from "@/components/ui/blur-fade"
import { useState } from "react"

type Medal = {
    id: number
    title: string
    description: string
    year: string
    category: string
    get: string
    status: string
    image: string
    preview: string
    tech: string[]
    info: string
}

const medal: Medal[] = [
    {
        id: 1,
        title: "Astra Honda Motor Best Student",
        description: "2nd Place Winner of Astra Honda Motor (AHM) Best Student 2023.",
        year: "2023",
        category: "Academic research",
        get: "2nd Place",
        status: "Completed",
        image: "medal/AHM.pdf",
        preview: "previewmedal/preview1.png",
        tech: ["Chemistry", "Physics", "Biology", "Research", "Teamwork", "Problem Solving"],
        info: "Awarded 2nd Place in the Astra Honda Motor (AHM) Best Student 2023, a prestigious competition organized by Astra Honda Motor to recognize academic excellence and student innovation across Indonesia.",
    },
    {
        id: 2,
        title: "AISEEF (ASEAN Innovative Science Environmental and Entrepreneur Fair)",
        description: "Gold Medalist at AISEEF 2024 in the Environmental Science category.",
        year: "2024",
        category: "Environmental Science Research",
        get: "Gold Medal",
        status: "Completed",
        image: "medal/AISEEF.pdf",
        preview: "previewmedal/preview2.png",
        tech: ["Environmental Science", "Research", "Innovation", "Biology", "Chemistry", "Scientific Writing"],
        info: "Awarded the Gold Medal at AISEEF 2024 (ASEAN Innovative Science Environmental and Entrepreneur Fair), an international research competition organized by the Indonesian Young Scientists Association. The project, titled 'Synthesis of Carbon Dots from Tinospora cordifolia (Brotowali) as a Potential Inhibitor of Diabetic Wound Infections,' highlights innovation in environmental and health science. The competition was held online with participants from various ASEAN and international backgrounds.  ",
    },
    {
        id: 3,
        title: "BEBRAS (Computational Thinking Challenge)",
        description: "3rd Place Winner at Bebras Challenge 2019 (Junior Category).",
        year: "2019",
        category: "Computational Thinking",
        get: "3rd Place",
        status: "Completed",
        image: "medal/BEBRAS.pdf",
        preview: "previewmedal/preview3.png",
        tech: ["Computational Thinking", "Problem Solving", "Logic", "Algorithms"],
        info: "Awarded 3rd Place in the Bebras Challenge 2019, Junior Category (SMP/MTs level), organized by Bebras Indonesia in collaboration with the Informatics Department of Universitas Islam Indonesia. This competition focuses on developing computational thinking, logical reasoning, and problem-solving skills through algorithmic challenges. ",
    },
    {
        id: 4,
        title: "ISIF (International Science and Invention Fair)",
        description: "Gold Medalist at ISIF 2023 in the Life Science category.",
        year: "2023",
        category: "Life Science Research",
        get: "Gold Medal",
        status: "Completed",
        image: "medal/ISIF.pdf",
        preview: "previewmedal/preview4.png",
        tech: ["Life Science", "Research", "Biotechnology", "Chemistry", "Innovation", "Scientific Writing"],
        info: "Awarded the Gold Medal at ISIF 2023 (International Science and Invention Fair), an international research competition organized by the Indonesian Young Scientists Association. The project, titled 'Carbon Nanodots Tinospora cordifolia (Brotowali) as an Antibacterial to Improve the Healing of Diabetic Wounds,' focuses on biomedical and life science innovation. The competition was held online in Bali, Indonesia, with participants from various international backgrounds.",
    },
    {
        id: 5,
        title: "E-Fest Nurse #3",
        description: "2nd Place Winner at E-Fest Nurse #3 2024.",
        year: "2024",
        category: "Health Science Competition",
        get: "2nd Place",
        status: "Completed",
        image: "medal/KEMENKES.pdf",
        preview: "previewmedal/preview5.png",
        tech: ["Health Science", "Nursing", "Research", "Problem Solving", "Public Health"],
        info: "Awarded 2nd Place at E-Fest Nurse #3, a national-level competition organized by the Nursing Student Association of Poltekkes Kemenkes Yogyakarta. The event was held online on August 24, 2024, focusing on health science knowledge, critical thinking, and problem-solving in the medical field.",
    },
    {
        id: 6,
        title: "KIHAJAR STEM (Kihajar STEM Competition)",
        description: "Finalist in KIHAJAR STEM 2021.",
        year: "2021",
        category: "STEM Competition",
        get: "Finalist",
        status: "Completed",
        image: "medal/KIHAJAR.pdf",
        preview: "previewmedal/preview6.png",
        tech: ["STEM", "Technology", "Problem Solving", "Critical Thinking", "Digital Literacy"],
        info: "Selected as a Finalist in KIHAJAR STEM 2021, a national-level competition organized by the Ministry of Education, Culture, Research, and Technology of Indonesia through the Center for Data and Information Technology. The competition was held from July to September 2021 and focuses on enhancing students' competencies in science, technology, engineering, and mathematics (STEM).",
    },
    {
        id: 7,
        title: "TIOS (Teknik Industri On The Spot)",
        description: "2nd Place Winner at TIOS 2024 National Scientific Writing Competition.",
        year: "2024",
        category: "Scientific Writing Competition",
        get: "2nd Place",
        status: "Completed",
        image: "medal/TIOS.pdf",
        preview: "previewmedal/preview7.png",
        tech: ["Scientific Writing", "Research", "Critical Thinking", "Problem Solving", "Innovation"],
        info: "Awarded 2nd Place in the National Scientific Writing Competition at TIOS 2024 (Teknik Industri On The Spot), organized by the Industrial Engineering Student Association of Universitas Atma Jaya Yogyakarta. The competition was held from November 2023 to March 2024 and focused on analytical thinking, research skills, and innovation in scientific writing. ",
    },
];



export default function Achive() {
    const [selectedMedal, setselectedMedal] = useState<Medal | null>(null);
    const [isOpen, setIsOpen] = useState(4);

    return (<>
        <section id="achievement" className="py-10 px-6 md:px-20 flex flex-col items-center bg-gradient-to-b from-white via-transparent to-transparent dark:from-black dark:to-transparent dark:via-transparent dark:bg-neutral-900/50">
            <div className="px-5 py-1 bg-gray-200 dark:bg-gray-700 rounded-xl flex justify-center items-center mb-4">
                <div className="justify-start text-gray-600 dark:text-gray-300 text-sm font-medium font-['Inter'] leading-5">Achivement</div>
            </div>
            <p className="mb-8 w-full max-w-[576px] text-center justify-start text-gray-600 dark:text-gray-400 text-base sm:text-xl font-normal font-['Inter'] leading-7"> Honoring achievements in competitions, research activities, and ongoing professional development.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" >
                {medal.slice(0, isOpen).map((medal, idx) => (
                    <BlurFade delay={0.2 + idx * 0.1} inView key={medal.id}>
                        <div
                            className="relative group bg-white dark:bg-black rounded-lg hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
                            onClick={() => setselectedMedal(medal)}
                        >
                            <div className="absolute inset-0 z-10 rounded-lg bg-gray-50/0 group-hover:bg-black/30 group-hover:dark:bg-gray-600/70 transition-all duration-300"></div>

                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                <div className="absolute text-gray-900 bg-white dark:bg-black w-10 h-10 rounded-full flex items-center justify-center text-black dark:text-white">
                                    ➜
                                </div>
                            </div>

                            <div className="p-4 gap-2 flex flex-col">
                                    <img src={medal.preview} alt={medal.title} className=" h-32 w-full rounded-lg inset-0 w-full h-full object-cover rounded-lg  duration-300" />

                                <div className="flex gap-2 flex-wrap group-hover:scale-105 transition-transform duration-300">
                                    <div className="bg-indigo-800 dark:bg-orange-600 px-3 py-1 rounded-full text-xs text-white dark:text-black">{medal.year}</div>
                                    <div className="bg-indigo-100 dark:bg-orange-100 px-3 py-1 rounded-full text-xs text-mauve-700 dark:text-black">{medal.category}</div>
                                    <div className="bg-indigo-100 dark:bg-orange-100 px-3 py-1 rounded-full text-xs font-semibold text-mauve-700">{medal.get}</div>
                                </div>

                                <h2 className="text-lg sm:text-xl text-gray-900 dark:text-white font-bold group-hover:scale-105 transition-transform duration-300">
                                    {medal.title}
                                </h2>

                                <p className="text-neutral-500 text-sm group-hover:scale-105 transition-transform duration-300 pb-4 leading-relaxed">
                                    {medal.description}
                                </p>


                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>

            {isOpen < medal.length && (
                <button
                    onClick={() => setIsOpen((prev) => prev + 4)}
                    className="mt-6 px-6 py-2 dark:bg-orange-600 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition"
                >
                    View More
                </button>
            )}
            {isOpen >= medal.length && (
                <button
                    onClick={() => setIsOpen(4)}
                    className="mt-3 px-6 py-2 dark:bg-orange-100 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
                >
                    View Less
                </button>
            )}
        </section >

        {selectedMedal && (
            <BlurFade className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-200/20 backdrop-blur-xl ">

                <div className="bg-white/80 dark:bg-gray-950/80 rounded-2xl max-w-4xl w-full p-6 relative shadow-2xl backdrop-blur-xl border border-gray-200/80 dark:border-yellow-500">

                    <button
                        onClick={() => setselectedMedal(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition"
                    >
                        x
                    </button>

                    <h2 className="text-xl sm:text-2xl text-black dark:text-white font-bold my-2 transition-transform duration-300 group-hover:scale-105">
                        {selectedMedal.title}
                    </h2>
                    <p className="text-neutral-500 dark:text-gray-300 text-xs sm:text-sm mb-4 transition-transform duration-300 group-hover:scale-105">
                        {selectedMedal.description}
                    </p>

                    <div className="max-h-[60vh] overflow-y-auto ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-30">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap mt-8 gap-3">
                                    <iframe
                                        src={selectedMedal.image}
                                        className="mx-auto rounded-lg w-full max-w-full sm:max-w-2xl h-40 sm:h-60 transition-transform duration-300 group-hover:scale-105 shadow-xl"
                                    />
                                    <p className="text-neutral-500 dark:text-gray-300 text-sm mb-4 transition-transform duration-300 group-hover:scale-105 leading-relaxed">
                                        {selectedMedal.info}
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-col ">

                                <div className="flex gap-2 flex-col mb-4 border border-gray-200/80 dark:border-yellow-500 rounded-lg shadow-lg">
                                    <div className="flex flex-col py-4 px-8 border-b border-gray-200/80 dark:border-yellow-500 mb-4">
                                        <h3 className="font-bold dark:text-gray-100 text-xl sm:text-2xl text-gray-900 mb-2">
                                            Key Highlights
                                        </h3>
                                        <div className="flex gap-2 flex-wrap">
                                            {selectedMedal.tech.map((t, i) => (
                                                <div key={i} className="bg-cyan-200/40 dark:bg-orange-500/70 px-3 py-1 rounded-full text-xs text-mauve-700 dark:text-gray-300">{t}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 px-8">
                                        <div className="flex flex-col">
                                            <p className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                                Year
                                            </p>
                                            <p className="font-semibold text-sm sm:text-base text-black dark:text-gray-100">
                                                {selectedMedal.year}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                                Category
                                            </p>
                                            <p className="font-semibold text-sm sm:text-base text-black dark:text-gray-100">
                                                {selectedMedal.category}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                                Result
                                            </p>
                                            <p className="font-semibold text-sm sm:text-base text-black dark:text-gray-100">
                                                🏆{selectedMedal.get}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-medium text-sm text-gray-600 dark:text-gray-400">
                                                Status
                                            </p>
                                            <p className="font-bold text-sm sm:text-base text-indigo-800 dark:text-orange-500">
                                                {selectedMedal.status}
                                            </p>
                                        </div>
                                    </div>
                                    <a href={selectedMedal.image} target="_blank" rel="noopener noreferrer" className="bg-indigo-800/90 rounded-b-lg text-gray-200 justify-center text-center font-semibold py-2 mt-4 hover:bg-indigo-600 dark:hover:bg-orange-600 dark:bg-orange-700 transition">
                                        <h3 className="font-medium text-sm sm:text-lg">
                                            View Certificate 
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade >
        )
        }
    </>
    );
}