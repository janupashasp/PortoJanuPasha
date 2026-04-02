export default function Contact() {
    return (

        <div id="contact" className="bg-neutral-800 w-full h-auto flex flex-col px-6 md:px-[80px] py-16 md:py-[96px] justify-between">            <div className="flex flex-row items-start justify-between border-b border-neutral-700">
            <h2 className="text-gray-50 text-4xl md:text-6xl font-semibold">
                Lets Connect there
            </h2>
            <a
                href="/CV_Janu.pdf"
                className="hover:bg-orange-800 w-auto md:w-[202px] py-2.5 px-6 bg-orange-400 rounded-full inline-flex items-center justify-center gap-2 overflow-hidden cursor-pointer text-white text-base md:text-xl font-sm transition"            >
                <span>Hire me</span>
                <img src="/panah.svg" className="w-8 h-8" alt="arrow" />
            </a>
        </div>
            <div className="w-full  flex flex-col md:flex-row justify-between items-start py-8 md:py-10 border-b border-neutral-700">                <div className="flex flex-col max-w-md w-full">
                <div className="w-full flex justify-start items-center gap-2.5">
                    <div className="w-11 h-11 rounded-full overflow-hidden">
                        <img
                            src="/avatar.png"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="justify-center text-orange-400 text-xl font-semibold ">Janu Pasha Shandy Putra</p>

                </div>

                <p className="w-full text-gray-100 text-sm md:text-base font-normal leading-relaxed ">
                    Let's build something great together.
                    If you have an idea, a project, or just want to say hi, don't hesitate to reach out!
                </p>

                <div className="flex gap-2 items-center">
                    <a
                        href="https://github.com/janupashasp"
                        className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                    >
                        <img src="/github.png" alt="github" className=" w-[24px] h-[24] invert" />
                    </a>
                    <a
                        href="https://instagram.com/janupashasp"
                        className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                    >
                        <img src="/instagram.png" alt="instagram" className="w-[24px] h-[24px] invert" />
                    </a>
                    <a
                        href="https://wa.me/628112852007"
                        className="p-[6px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition w-[36px] h-[36px] flex items-center justify-center"
                    >
                        <img src="/wa.png" alt="whatsapp" className="w-[24px] h-[24] invert" />
                    </a>
                </div>
            </div>


                <div className="flex flex-col justify-start items-start gap-7 w-full md:w-auto">
                    <div className="justify-center text-orange-400 text-xl font-semibold pt-2">Contact</div>
                    <div className="flex flex-col justify-start items-start gap-5">
                        <div className="justify-center text-gray-50 text-base font-normal" >+62 8810 8110 8116</div>
                        <div className="break-all text-gray-50 text-base font-normal">janupashashandyputra@gmail.com</div>
                        <div className="justify-center text-gray-50 text-base font-normal" >janupasha.com</div>
                    </div>
                </div>



                <div className="flex flex-col justify-start items-start gap-7 w-full md:w-auto">
                    <div className="justify-center text-orange-400 text-xl font-semibold pt-2">Feel free to contact</div>
                </div>
            </div>

            <p className="py-8 justify-center text-white text-xl font-normal"> Thanks for visiting my website :)</p>

        </div>
    )
}