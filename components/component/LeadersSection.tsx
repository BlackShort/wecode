"use client";
import Image from "next/image";
import priyanshu from '@/assets/priyanshu.png';
import vibha from '@/assets/vibha.png';
import user from '@/assets/user.jpeg';

export const AboutUsSection = () => {
    return (
        <section id="about" className="py-16 bg-black md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Leadership Team Section */}
                <h3 className="text-2xl md:text-3xl font-bold text-start mb-8">Meet the Leaders</h3>
                <div className="py-16 bg-[#ffe0e0] lg:px-5 text-black rounded-[24px] md:py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white flex flex-col items-center justify-center text-black  shadow-[0px_0px_8px_3px_rgba(0,0,0,0.05)] w-[310px] h-[410px] relative rounded-[25px] py-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-white   mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={priyanshu}
                                    alt="President"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Priyanshu Kumar</h4>
                            <p className="text-gray-500 fot-semibold text-[12px]">@President</p>
                            <button className="py-2 px-7 rounded-full bg-[#ef9270] mt-1 text-black font-semibold cursor-pointer">Connect</button>
                        </div>
                        <div className="bg-white flex flex-col items-center justify-center text-black  shadow-[0px_0px_8px_3px_rgba(0,0,0,0.05)] w-[310px] h-[410px] relative rounded-[25px] py-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-white   mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={vibha}
                                    alt="Vice President"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Vibha Chandola</h4>
                            <p className="text-gray-500 fot-semibold text-[12px]">@Vice President</p>
                            <button className="py-2 px-7 rounded-full bg-[#ef9270] mt-1 text-black font-semibold cursor-pointer">Connect</button>
                        </div>
                        <div className="bg-white flex flex-col items-center justify-center text-black  shadow-[0px_0px_8px_3px_rgba(0,0,0,0.05)] w-[310px] h-[410px] relative rounded-[25px] py-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-white   mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={user}
                                    alt="Managing Director"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Ankit Pandey</h4>
                            <p className="text-gray-500 fot-semibold text-[12px]">@Managing Director</p>
                            <button className="py-2 px-7 rounded-full bg-[#ef9270] mt-1 text-black font-semibold cursor-pointer">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
