"use client"
import { BlurFade } from "@/components/ui/blur-fade"
import { useState } from "react"

type Project = {
    id: number
    title: string
    description: string
    year: string
    category: string
    role: string
    status: string
    image: string
    tech: string[]
    info: string
    view: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Website Portofolio Janu Pasha",
        description: "Website yang informatif yang digunakan sebagai wadah milik pasha",
        year: "2026",
        category: "Software",
        role: "Frontend Developer",
        status: "Completed",
        image: "/pashacom.png",
        tech: ["Next.js", "Tailwind", "Typescript"],
        info: "Website Portofolio Janu Pasha adalah sebuah platform personal yang dirancang untuk menampilkan profil, pengalaman, dan proyek-proyek yang telah dikerjakan. Website ini dibangun dengan fokus pada performa, responsivitas, dan pengalaman pengguna yang optimal. Dalam pengembangannya, digunakan teknologi modern seperti Next.js dan Tailwind CSS untuk memastikan tampilan yang cepat, ringan, dan konsisten di berbagai perangkat.Selain itu, implementasi TypeScript membantu menjaga kualitas kode agar lebih terstruktur dan mudah dikembangkan di masa depan. Website ini tidak hanya berfungsi sebagai media personal branding, tetapi juga sebagai representasi kemampuan dalam membangun antarmuka yang modern, interaktif, dan scalable.",
        view: "#hero",
    },
    {
        id: 2,
        title: "OmahTI Open Recruitment Assignment",
        description: "Proyek ini dibuat sebagai bagian dari proses open recruitment Divisi Front-End OmahTI di Universitas Gadjah Mada.",
        year: "2025",
        category: "Software",
        role: "Frontend Developer",
        status: "Completed",
        image: "/omahfe.png",
        tech: ["HTML", "CSS", "Javascript"],
        info: "Proyek OmahTI Open Recruitment Assignment merupakan tugas seleksi yang dirancang untuk menguji kemampuan teknis dan pemahaman dalam pengembangan antarmuka web modern.Dalam proyek ini, saya mengimplementasikan tampilan website menggunakan HTML, CSS, dan JavaScript dengan fokus pada struktur yang rapi",
        view: "https://github.com/janupashasp/Oprec_FE_OTI_Pasha"

    },
    {
        id: 3,
        title: "Coming Soon",
        description: "Bagian dari sebuah project penting OmahTI",
        year: "2026",
        category: "Software",
        role: "Frontend Developer",
        status: "Coming Soon",
        image: "soon.jpeg",
        tech: ["tsx", "next.js", "tailwind"],
        info: "SOON",
        view: "SOON"

    },
];

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (<>
        <section id="work" className="py-10 px-6 md:px-20 flex flex-col items-center bg-white dark:bg-black">
            <div className="px-5 py-1 bg-gray-200 dark:bg-gray-700 rounded-xl flex justify-center items-center mb-4">
                <div className="justify-start text-gray-600 dark:text-gray-300 text-sm font-medium font-['Inter'] leading-5">Work</div>
            </div>
            <p className="mb-8 w-full max-w-[576px] text-center justify-start text-gray-600 dark:text-gray-400 text-xl font-normal font-['Inter'] leading-7"> Some of the projects I have built: </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project, idx) => (
                    <BlurFade delay={0.2 + idx * 0.1} inView key={project.id}>
                        <div

                            onClick={() => setSelectedProject(project)}
                            className="relative group break-inside-avoid bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
                        >
                            <div className="absolute inset-0 z-10 rounded-lg bg-gray-50/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none"></div>

                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                <div className="absolute text-gray-900 bg-white w-10 h-10 rounded-full flex items-center justify-center">
                                    ➜
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="absolute text-gray-900 dark:text-orange-200 z-5 bg-gray-200/50 dark:bg-gray-600/50 backdrop-blur text-m px-2 top-5 right-5 rounded-lg">
                                    {project.year}
                                </div>
                                <div className="absolute text-gray-900 dark:text-orange-200 z-5 bg-gray-200/50 dark:bg-gray-600/50 backdrop-blur text-m px-2 top-5 left-5 rounded-lg">
                                    {project.category}
                                </div>

                                <img src={project.image} className="w-full h-40 sm:h-48 rounded-lg object-cover" />

                                <h2 className="text-lg sm:text-xl text-black dark:text-white font-semibold my-2">
                                    {project.title}
                                </h2>

                                <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex gap-2 flex-wrap">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="bg-gray-800 dark:bg-orange-600 px-3 py-1 rounded-lg text-xs text-white">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </section >

        {selectedProject && (
  
                <BlurFade className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-lg px-4">

                    <div className="bg-white dark:bg-gray-800/80 dark:backdrop-blur-md dark:text-gray-200 rounded-2xl max-w-3xl sm:max-w-4xl w-full p-4 sm:p-6 relative shadow-2xl mx-auto">

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            ✕
                        </button>

                        <div className="flex gap-2 flex-wrap mb-4">
                            <p className="bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-lg text-xs text-white">
                                {selectedProject.category}
                            </p>
                            <p className="bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-lg text-xs text-white">
                                {selectedProject.year}
                            </p>
                            <p className="bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-lg text-xs text-white">
                                {selectedProject.role}
                            </p>
                        </div>

                        <h2 className="text-xl sm:text-2xl text-black dark:text-white font-bold my-2">
                            {selectedProject.title}
                        </h2>

                        <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
                            {selectedProject.description}
                        </p>

                        <div className="max-h-[60vh] overflow-y-auto px-5">

                            <img
                                src={selectedProject.image}
                                className="mx-auto rounded-lg max-w-full sm:max-w-sm h-auto"
                            />

                            <div className="grid grid-cols-1 divide-x md:grid-cols-2 divide-gray-300 dark:divide-gray-600 divide-dashed gap-4 border rounded-lg p-3 shadow-lg border-gray-300 dark:border-gray-600 mt-4">

                                <div className="flex flex-col">
                                    <div className="flex flex-wrap  gap-3">
                                        <div className="bg-slate-700 rounded-lg w-10 h-10">
                                            <img src="/chip.svg" className="w-full h-full invert" />
                                        </div>

                                        <h2 className="text-xl sm:text-2xl text-slate-900 dark:text-gray-200 font-bold my-2">
                                            The Tools That I Used:
                                        </h2>
                                    </div>

                                    <div className="flex gap-2 flex-wrap max-w-[250px]">
                                        {selectedProject.tech.map((t, i) => (
                                            <div key={i} className="bg-indigo-800/90 dark:bg-orange-700/90 px-3 py-1 rounded-lg text-xs text-white">
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-wrap gap-3">
                                        <div className="bg-slate-700 rounded-lg w-10 h-10 p-1">
                                            <img src="/calender.svg" className="w-full h-full invert" />
                                        </div>

                                        <h2 className="text-xl sm:text-2xl text-slate-900 dark:text-gray-200 font-bold my-2">
                                            Project Info:
                                        </h2>
                                    </div>

                                    <div className="flex gap-2 flex-col mb-4">

                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 dark:text-gray-300">Year:</p>
                                            <p className="font-semibold text-black dark:text-white">
                                                {selectedProject.year}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 dark:text-gray-300">Category:</p>
                                            <p className="font-semibold text-black dark:text-white">
                                                {selectedProject.category}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 dark:text-gray-300">Position:</p>
                                            <p className="font-semibold text-black dark:text-white">
                                                {selectedProject.role}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-900 dark:text-gray-300">Status:</p>
                                            <p className={`font-semibold ${selectedProject.status === "Completed"
                                                ? "text-green-500"
                                                : selectedProject.status === "Coming Soon"
                                                    ? "text-yellow-500"
                                                    : "text-gray-500"
                                                }`}>
                                                {selectedProject.status}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* INFO */}
                            <div className="flex flex-col">
                                <div className="flex flex-wrap mt-8 gap-3">
                                    <div className="bg-slate-700 rounded-lg w-10 h-10 p-1">
                                        <img src="/info.svg" className="w-full h-full invert" />
                                    </div>

                                    <h2 className="text-xl sm:text-2xl text-slate-900 dark:text-gray-200 font-semibold my-2">
                                        Project Info:
                                    </h2>
                                </div>

                                <p className="text-gray-900 dark:text-gray-300 text-sm sm:text-base text-justify">
                                    {selectedProject.info}
                                </p>

                                <a
                                    href={selectedProject.view}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm sm:text-base text-white text-center mt-5 inline-block w-full text-center"
                                >
                                    🔎 View Project
                                </a>
                            </div>

                        </div>
                    </div>
                </BlurFade>
        )}
    </>
    );
}