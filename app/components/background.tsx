"use client";
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Particles } from "@/components/ui/particles"
import { Meteors } from "@/components/ui/meteors"

export default function Background() {
    return (
        <>

        <AuroraBackground className="fixed inset-0 -z-10 bg-white dark:bg-black">
            

                
                <Meteors number={80} className="-z-5 dark:hidden" />
                <Particles
                    className="w-full absolute inset-0 -z-5 opacity-0 dark:opacity-100"
                    quantity={800}
                    ease={40}
                    color="#ffffff"
                />
            </AuroraBackground>
        </>
    )
}