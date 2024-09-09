"use client";
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from "next/image";
import ankur from '@/assets/ankur.png';

export const AboutUsSection = () => {
    const { scrollY } = useScroll();

    const aboutTranslateY = useTransform(scrollY, [300, 400], [100, 0]);
    const aboutOpacity = useTransform(scrollY, [300, 350], [0.5, 1]);

    return (
        <section id="aboutus" className="bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <motion.section
                    style={{ y: aboutTranslateY, opacity: aboutOpacity }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Founder Profile */}
                        <motion.div
                            className="flex-1 flex justify-center items-center mb-8 md:mb-0"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="rounded-full w-[200px] md:w-[18rem] h-[200px] md:h-[18rem]  mx-auto overflow-hidden">
                                <Image
                                    src={ankur}
                                    alt="Founder"
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </motion.div>
                        {/* About WeCode */}
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-800">About WeCode</h2> {/* Darker heading */}
                            <p className="text-gray-700 mb-4 text-justify">
                                WeCode is a community-driven club dedicated to empowering individuals to explore the world of
                                programming. We offer a supportive environment for beginners and experienced coders alike to learn,
                                collaborate, and grow their skills.
                            </p>
                            
                            <p className="text-gray-700 text-justify">
                                Founded by <span className="font-semibold text-blue-700">Dr. Ankur Singh Bisht</span>, WeCode began with a vision to create a nurturing space where
                                individuals could not only learn coding but also engage with a vibrant community of like-minded
                                enthusiasts. Ankur&apos;s passion for programming and community building led to the inception of WeCode,
                                a platform that continues to inspire and support its members in their coding journey.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </section>
    );
};
