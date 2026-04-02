"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState } from "react";

type Experience = {
    id: number;
    company: string;
    role: string;
    date: string;
    desc: string;
    fullDesc: string[];
    image: string;
    gallery: string[];
};


const experience: Experience[] = [
    {
        id: 1,
        company: "HIPMI PT UGM",
        role: "Staf Organisasi Kaderisasi dan Keanggotaan",
        date: "2026 - Sekarang",
        desc: "Mengelola database dan mendukung program bonding.",
        fullDesc: [
            "Mengelola database keanggotaan dan kepengurusan secara terstruktur dan sistematis.",
            "Mendukung pelaksanaan program bonding untuk meningkatkan kekompakan dan kolaborasi anggota.",
            "Berkontribusi dalam pelaksanaan rapat kerja tahunan organisasi.",
        ],
        image: "/hipmi1.jpeg",
        gallery: ["/HIPMI/i1.jpg", "/HIPMI/i2.jpg", "/HIPMI/i3.jpg", "/HIPMI/i4.jpg", "/HIPMI/i5.jpg", "/HIPMI/i6.jpg"],
    },
    {
        id: 2,
        company: "OMAHTI UGM",
        role: "Staf Project Manager dan Front-End",
        date: "2026 - Sekarang",
        desc: "Belajar frontend dan mengelola timeline project.",
        fullDesc: [
            "Mengikuti pelatihan intensif pengembangan front-end berbasis HTML, CSS, dan JavaScript.",
            "Mengelola dan memantau timeline proyek untuk memastikan setiap tahap berjalan sesuai target.",
            "Berkolaborasi dalam tim untuk mengembangkan tampilan website yang responsif dan user-friendly.",
            "Mencatat progres proyek secara terstruktur sebagai bentuk kontrol dan evaluasi kinerja tim.",
        ],
        image: "/omahTI.png",
        gallery: ["/OMAHTI/o1.jpg", "/OMAHTI/o2.jpg", "/OMAHTI/o3.jpg", "/OMAHTI/o4.jpg", "/OMAHTI/o5.jpg", "/OMAHTI/o6.jpg"]

    },
    {
        id: 3,
        company: "BEM KM FMIPA UGM",
        role: "Staf Hubungan Masyarakat",
        date: "2026 - Sekarang",
        desc: "Mengelola komunikasi dan relasi eksternal.",
        fullDesc: [
            "Mendukung pengelolaan komunikasi internal dan eksternal organisasi untuk menjaga citra serta hubungan dengan berbagai pihak.",
            "Berperan dalam pelaksanaan penerimaan studi banding dengan menyambut delegasi dan memfasilitasi rangkaian kegiatan.",
            "Menjalin relasi dengan mitra dan pihak eksternal guna mendukung keberhasilan program kerja.",
        ],
        image: "/bemmipa.png",
        gallery: ["/HUMAS/h1.jpg", "/HUMAS/h2.jpg", "/HUMAS/h3.jpg", "/HUMAS/h4.jpg", "/HUMAS/h5.JPG", "/HUMAS/h6.jpg"]

    },
    {
        id: 4,
        company: "Malam Apresiasi FMIPA",
        role: "Staf Divisi Acara",
        date: "Sep 2025 - Nov 2025",
        desc: "Mengatur alur acara dan koordinasi teknis.",
        fullDesc: [
            "Menjalin komunikasi dengan tenant dan pihak terkait untuk memastikan kebutuhan teknis serta informasi acara tersampaikan secara jelas.",
            "Mengelola alur waktu kegiatan sebagai timekeeper guna memastikan seluruh rangkaian berjalan sesuai rundown.",
            "Memastikan kesiapan teknis dan operasional selama acara berlangsung.",
        ],
        image: "/malpres.png",
        gallery: ["MALPRES/p1.jpg", "/MALPRES/p2.jpg", "/MALPRES/p3.heic", "/MALPRES/p4.HEIC", "/MALPRES/p5.HEIC", "/MALPRES/p6.jpg", "/MALPRES/p7.jpg", "/MALPRES/p8.jpg", "/MALPRES/p9.jpg", "/MALPRES/p10.jpg"],

    },
];

function ExperienceItem({ exp }: { exp: Experience }) {
    const [open, setOpen] = useState(false);
    return (
        <BlurFade delay={0.3} inView>
            <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-4">
                <div className="relative flex justify-center items-center w-[80px] sm:w-[100px]">
                <div className="absolute w-[2px] h-full bg-gray-400 dark:bg-orange-500"></div>

                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gray-400 dark:border-orange-500 items-center justify-center">
                    <img
                        src={exp.image}
                        className="w-full h-full object-cover"
                        alt="avatar"
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1 md:py-6 py-4">
                <time className="text-xs text-gray-600 dark:text-neutral-300">
                    {exp.date}
                </time>

                <h2 className="font-semibold leading-none text-gray-900 dark:text-orange-600">
                    {exp.company}
                </h2>

                <p className="text-sm text-gray-700 dark:text-neutral-300">
                    {exp.role}
                </p>

                <div className="w-full max-w-full sm:max-w-[500px] text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <div className="overflow-hidden transition-all duration-300 ease-in-out">
                        <div
                            className={`text-sm transition-all duration-300 ${open ? "max-h-40" : "max-h-6"
                                }`}
                        >
                            {open ? (
                                <ul className="list-disc pl-5">
                                    {exp.fullDesc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                exp.desc
                            )}
                        </div>
                    </div>

                    <button onClick={() => setOpen(!open)}
                        className="text-xs text-primary hover:underline mt-1 focus:outline-none transition-opacity duration-200"
                        aria-expanded={open}
                    >
                        {open ? "Show less" : "Show more"}
                    </button>
                </div>
            </div>
            </div>
        </BlurFade>
    )
}


export default function Exper() {
    const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
    return (
        <>
            <section id="experience" className="relative bg-gray-50 dark:bg-gray-950 px-4 md:px-16 py-24 items-center overflow-hidden sm:py-12 sm:px-8 min-h-screen text-gray-200">
                <div className="px-5 py-1 bg-gray-200 dark:bg-gray-700 rounded-xl flex justify-center items-center mb-4 mx-auto w-max">
                    <p className="justify-start text-gray-600 dark:text-gray-300 text-sm font-medium font-['Inter'] leading-5">Experience</p>
                </div>

                <p className="mb-8 w-full max-w-[576px] mx-auto text-center justify-center text-slate-500 text-md md:text-xl font-normal font-['Inter'] leading-7"> Actively involved in communities, events, and competition teams to grow both technical skills and leadership experience. </p>

                <div className="mx-auto w-full max-w-screen-xl flex flex-col md:flex-row gap-10">
                    <div className="bg-white dark:bg-gray-900 w-full md:w-2/3 rounded-xl hover:shadow-md transition divide-y divide-dashed divide-gray-400 dark:divide-orange-500">
                        {experience.map((exp) => (
                            <ExperienceItem key={exp.id} exp={exp} />
                        ))}
                    </div>

                    <div className="bg-white dark:bg-gray-800 md:w-1/3 w-full rounded-xl shadow-lg p-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-orange-500 mb-3">Highlights</h3>
                            <div className="columns-1 md:columns-2 gap-3">

                            {experience.map((item, idx) => (
                                <div key={item.id}>
                                    <BlurFade delay={0.2 + idx * 0.05} inView>
                                
                                    <div
                                        onClick={() => setSelectedGallery(item.gallery)}
                                        className="relative group overflow-hidden rounded-lg cursor-pointer mb-3 "
                                    >
                                        <img
                                            src={item.gallery[0]}
                                            alt={item.company}
                                            className="w-full h-40 sm:h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-t from-black/50 to-transparent transition-all duration-300"></div>

                                        <p className="absolute bottom-2 left-2 text-white text-xs opacity-0 group-hover:opacity-100 transition">
                                            {item.company}
                                        </p>

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                                                ➜
                                            </div>
                                        </div>
                                        </div>
                                    </BlurFade>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {
                selectedGallery && (
                    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-lg">
                        <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl max-w-4xl w-full mx-4 p-6 relative shadow-2xl">

                            <button
                                onClick={() => setSelectedGallery(null)}
                                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-black"
                            >
                                ✕
                            </button>
                            <TypingAnimation className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
                                Galery Highlights
                            </TypingAnimation>
                            <div className=" max-h-[60vh] overflow-y-auto">
                                <div className="columns-1 md:columns-2 gap-1 mb-4">
                                    {selectedGallery.map((src, i) => (
                                        <div key={i}>
                                            <img
                                                src={src}
                                                alt="highlight"
                                                className="mx-auto mb-1"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div >
                )
            }
        </>
    );
}   