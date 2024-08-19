"use client";
import { motion, useTransform, useScroll } from 'framer-motion';
import { WavyBackground } from "@/components/ui/wavy-background";

export const HeroSection = () => {
    const { scrollY } = useScroll();

    // Define the scale and opacity transformations based on scroll position
    const scale = useTransform(scrollY, [0, 400], [1, 1.5]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <WavyBackground blur={10} backgroundFill={'white'} className='h-[90vh] w-full items-center justify-center flex flex-col'>
            <motion.section
                className="bg-[url('/dotted-bg.svg')] w-full bg-cover bg-center px-4 md:px-8 flex flex-col items-center justify-center text-center"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
                >
                    Unleash Your Coding Potential
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-gray-800 mb-8"
                    style={{ scale, opacity }} // Apply scale and opacity to p
                >
                    Join the WeCode club and explore the world of programming together.
                </motion.p>
            </motion.section>
        </WavyBackground >
    );
};
