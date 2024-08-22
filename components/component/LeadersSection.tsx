"use client";
import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from "next/image";
import priyanshu from '@/assets/priyanshu.png';
import vibha from '@/assets/vibha.png';
import ankit from '@/assets/ankit.png';
import Link from 'next/link';
import { Button } from '../ui/button';

export const LeadersSection = () => {
    const { scrollY } = useScroll();

    // Generate transformations based on the scroll position
    const xTransform1 = useTransform(scrollY, [940, 1040], [0, 0]);
    const opacity1 = useTransform(scrollY, [940, 1040], [1, 1]);

    const xTransform2 = useTransform(scrollY, [970, 1070], [100, 0]);
    const opacity2 = useTransform(scrollY, [970, 1070], [0, 1]);

    const xTransform3 = useTransform(scrollY, [1080, 1190], [200, 0]);
    const opacity3 = useTransform(scrollY, [1080, 1130], [0, 1]);

    return (
        <section id="about" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-bold md:text-start mb-8 text-gray-900 text-center pl-0 md:pl-12">Meet the Leaders</h3>
                <div className="bg-[#f7f7f7] lg:px-5 text-gray-900 rounded-[24px] h-auto">
                    <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 p-4">
                        {/* Card 1 */}
                        <motion.div
                            className="bg-[#ffffff] flex flex-col items-center justify-center text-gray-900 shadow-lg w-[310px] h-[410px] rounded-[25px] py-6 text-center"
                            style={{
                                x: xTransform1,
                                opacity: opacity1,
                                zIndex: 3
                            }}
                        >
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-gray-300 mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={priyanshu}
                                    alt="@President"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold">Priyanshu Kumar</h4>
                            <p className="text-gray-700 font-semibold text-sm">@President</p>
                            <Link target='_blank' href={'https://www.linkedin.com/in/priyanshu-kumar7374/'}>
                                <Button variant="outline" className="inline-flex bg-green-500 mt-4 rounded-full text-white hover:bg-green-600">Connect</Button>
                            </Link>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-[#ffffff] flex flex-col items-center justify-center text-gray-900 shadow-lg w-[310px] h-[410px] rounded-[25px] py-6 text-center"
                            style={{
                                x: xTransform2,
                                opacity: opacity2,
                                zIndex: 2
                            }}
                        >
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-gray-300 mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={vibha}
                                    alt="@Vice President"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold">Vibha Chandola</h4>
                            <p className="text-gray-700 font-semibold text-sm">@Vice President</p>
                            <Link target='_blank' href={'https://www.linkedin.com/in/vibha-chandola/'}>
                                <Button variant="outline" className="inline-flex bg-green-500 mt-4 rounded-full text-white hover:bg-green-600">Connect</Button>
                            </Link>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-[#ffffff] flex flex-col items-center justify-center text-gray-900 shadow-lg w-[310px] h-[410px] rounded-[25px] py-6 text-center"
                            style={{
                                x: xTransform3,
                                opacity: opacity3,
                                zIndex: 1
                            }}
                        >
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-gray-300 mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={ankit}
                                    alt="@Managing Director"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold">Ankit Pandey</h4>
                            <p className="text-gray-700 font-semibold text-sm">@Managing Director</p>
                            <Link target='_blank' href={'https://www.linkedin.com/in/ankit-pandey-b1697928a'}>
                                <Button variant="outline" className="inline-flex bg-green-500 mt-4 rounded-full text-white hover:bg-green-600">Connect</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
