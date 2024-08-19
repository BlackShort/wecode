"use client";
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from "next/image";
import ankur from '@/assets/ankur.png';

export const AboutSection = () => {
    const { scrollY } = useScroll();

    // Define the scale and opacity transformations based on scroll position
    const scale = useTransform(scrollY, [700, 750], [0.5, 1]);
    const opacity = useTransform(scrollY, [600, 700,800], [0,0.2, 1]);
   const ankurTextPositionX = useTransform(scrollY, [800, 850], [25, 1]);
    const ankurTextOpacity = useTransform(scrollY, [800, 820], [0, 1]);
    const ankurSubTextPositionX = useTransform(scrollY, [820, 850], [25, 1]);
    const ankurSubTextOpacity = useTransform(scrollY, [810, 850], [0, 1]);

    return (
        <section id="about" className="py-16 bg-black md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Founder and About WeCode Section */}
                <motion.div  style={{scale, opacity}}  className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div className="flex-1 justify-center items-center">
                        <div className="rounded-full w-[230px] md:w-[270px] h-[230px] md:h-[270px] border-[3px] border-red-500  mx-auto mb-4 overflow-hidden">
                            <Image
                                src={ankur}
                                alt="Founder"
                                className="object-cover object-top w-full h-full"
                                priority
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-white mt-4 text-center">Dr. Ankur Singh Bisht</h2>
                    </motion.div>
                    <motion.div className="flex-1">
                        <motion.h2 style={{x: ankurTextPositionX, opacity: ankurTextOpacity}} className="text-3xl md:text-4xl font-bold mb-4">About WeCode</motion.h2>
                        <motion.p style={{x: ankurSubTextPositionX, opacity: ankurSubTextOpacity}} className="text-muted-foreground mb-4">
                            WeCode is a community-driven club dedicated to empowering individuals to explore the world of
                            programming. We offer a supportive environment for beginners and experienced coders alike to learn,
                            collaborate, and grow their skills.
                        </motion.p>
                        <motion.p style={{x: ankurSubTextPositionX, opacity: ankurSubTextOpacity}} className="text-muted-foreground">
                            Founded by Ankur Singh Bisht, WeCode began with a vision to create a nurturing space where
                            individuals could not only learn coding but also engage with a vibrant community of like-minded
                            enthusiasts. Ankur's passion for programming and community building led to the inception of WeCode,
                            a platform that continues to inspire and support its members in their coding journey.
                        </motion.p>
                    </motion.div>
                </motion.div>
               
            </div>
        </section>
    );
};
