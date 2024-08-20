"use client";
import { motion } from 'framer-motion';
import { WavyBackground } from "@/components/ui/wavy-background";
import badge from '@/assets/svg/badge_right.svg';
import bell from '@/assets/svg/bell_right.svg';
import box from '@/assets/svg/box_right.svg';
import bulb from '@/assets/svg/bulb_right.svg';
import compass from '@/assets/svg/compass_right.svg';
import gear from '@/assets/svg/gear_right.svg';
import headphone from '@/assets/svg/headphone_right.svg';
import Image from 'next/image';

// Define icon properties with specific start and end positions
const icons = [
    { src: badge, alt: 'badge', start: { x: 1020, y: 50 }, end: { x: 1060, y: 150 } },
    { src: compass, alt: 'compass', start: { x: 50, y: 350 }, end: { x: 0, y: 250 } },
];

// Function to generate a slower animation with delay based on the index
const generateAnimation = (endPosition: { x: number, y: number }, index: number) => ({
    x: endPosition.x,
    y: endPosition.y,
    transition: {
        duration: 10, 
        ease: "easeInOut" as const,
        delay: index * 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const
    }
});

export const HeroSection = () => {
    return (
        <WavyBackground blur={10} backgroundFill={'white'} className='h-[90vh] w-full items-center justify-center flex flex-col relative'>
            <div className="flex relative h-full w-full">
                <motion.section
                    className="bg-[url('/dotted-bg.svg')] w-full z-[15] bg-cover bg-center px-4 md:px-8 flex flex-col items-center justify-center text-center"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
                    >
                        Unleash Your Coding Potential
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-800 mb-8"
                    >
                        Join the WeCode club and explore the world of programming together.
                    </motion.p>
                </motion.section>
                <div className="absolute inset-0 w-full h-full z-10">
                    {icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute"
                            initial={{ x: icon.start.x, y: icon.start.y }}
                            animate={generateAnimation(icon.end, index)}
                            style={{ width: '12rem', height: '12rem' }}
                        >
                            <Image src={icon.src} alt={icon.alt} layout="fill" objectFit="contain" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </WavyBackground>
    );
};
