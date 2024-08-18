import React from "react";
import { FaCode, FaTrophy, FaDatabase, FaLock, FaRobot, FaImages } from "react-icons/fa";

export const DomainsSection: React.FC = () => {
    return (
        <section id="domains" className="bg-[#2d2e32] py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Domains</h2>
                    <p className="text-muted-foreground">Explore the diverse range of domains offered by WeCode.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaCode className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Web Development</h3>
                        <p className="text-muted-foreground">
                            Learn to build modern, responsive websites and web applications.
                        </p>
                    </div>
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaTrophy className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Competitive Programming</h3>
                        <p className="text-muted-foreground">
                            Sharpen your problem-solving skills through coding competitions.
                        </p>
                    </div>
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaDatabase className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Data Structures & Algorithms</h3>
                        <p className="text-muted-foreground">
                            Master the building blocks of programming to solve complex problems.
                        </p>
                    </div>
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaLock className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
                        <p className="text-muted-foreground">
                            Understand the principles of protecting systems and data from threats.
                        </p>
                    </div>
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaRobot className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">AI & ML</h3>
                        <p className="text-muted-foreground">
                            Explore artificial intelligence and machine learning technologies.
                        </p>
                    </div>
                    <div className="bg-[#1a1b1e] rounded-lg p-6 text-center">
                        <FaImages className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Visual Media</h3>
                        <p className="text-muted-foreground">
                            Learn about graphic design, video editing, and other visual media skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
