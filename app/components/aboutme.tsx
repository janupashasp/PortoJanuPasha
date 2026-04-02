
import { BlurFade } from "@/components/ui/blur-fade"
import { TypingAnimation } from "@/components/ui/typing-animation"
export default function AboutMe() {
    return (
        <section id="aboutme" className="relative py-10 md:px-16 pb-24 px-4 bg-gradient-to-t from-white to-transparent via-transparent dark:from-black dark:via-transparent dark:to-transparent dark:bg-neutral-900/50">

            <BlurFade delay={0.5} inView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center justify-center">
                <div className="flex flex-col gap-6 items-center lg:items-start">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square duration-700 ease-in-out [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] mx-auto lg:mx-0">                            <img
                                src="/profile2.png"
                                alt="profile"
                                className="absolute w-full h-full object-cover rounded-lg object-[50%_0.1%] [backface-visibility:hidden]"
                            />
                            <img
                                src="/profile3.png"
                                alt="profile back"
                                className="absolute w-full h-full object-cover rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]"
                            />
                        </div>
                </div>


                <div className="flex z-10 flex-col items-start gap-[16px] pl-2 flex flex-col pt-4 backdrop-blur-xl border border-white/10 dark:border-white/10 rounded-2xl shadow-xl bg-indigo-100/30 dark:bg-zinc-900/70  relative">
                    <div className="z-20 flex flex-col gap-6 lg:m-10 m-4">
                        <div>
                            <TypingAnimation className="text-4xl font-bold text-gray-900 dark:text-orange-500 mb-4">
                                Get to Know Me
                            </TypingAnimation>
                            <p className="text-gray-600 dark:text-gray-300 text-lg ">
                                Building clean, responsive, and user-friendly websites.
                            </p>
                        </div>


                        <p className="text-gray-600 dark:text-gray-300 max-w-xl text-md text-justify">
                            I’m a passionate frontend developer who enjoys turning ideas into clean,
                            functional, and user-friendly interfaces. I focus on building modern web
                            experiences with strong attention to detail and performance.
                        </p>


                        <div className="grid sm:grid-cols-3 gap-4 text-gray-900 dark:text-gray-200">
                            <div className="hover:-translate-y-1 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
                                <p className="font-semibold"> Frontend</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Responsive Website</p>
                            </div>

                            <div className="hover:-translate-y-1 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
                                <p className="font-semibold"> 👨‍👩‍👧‍👦 Interpersonal </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Clear & effective teamwork</p>
                            </div>

                            <div className="hover:-translate-y-1 p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition">
                                    <p className="font-semibold"> Problem Solving </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">ideas into solutions</p>
                            </div>
                        </div>


                        <div className="flex flex-col gap-3 text-sm">
                            <div className="flex flex-row gap-2 bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src="/ugm.png"
                                    className="w-10 h-10"
                                />
                                <div className="flex flex-col border-l-4 border-orange-400 pl-3">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        Ilmu Komputer
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Universitas Gadjah Mada
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2 bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src="/padma.png"
                                    className="w-10 h-10"
                                />
                                <div className="flex flex-col border-l-4 border-orange-400 pl-3">

                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        MIPA
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        SMAN 3 Yogyakarta
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="z-10 absolute top-0 right-0 w-full h-[120px] bg-gradient-to-b from-violet-100/90 dark:from-slate-900/90 to-transparent rounded-b-2xl "></div>

                </div>
            </div>
            </BlurFade>
        </section>
    );
}
