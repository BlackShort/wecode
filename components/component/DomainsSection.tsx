import React, { useRef } from "react";
import { FaCode, FaTrophy, FaDatabase, FaLock, FaRobot, FaImages } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';

const domains = [
    {
        icon: <FaTrophy className="text-4xl text-accent mb-4 mx-auto" />,
        title: "Competitive Programming",
        description: "Enhance your problem-solving skills through exciting coding challenges and contests."
    },
    {
        icon: <FaCode className="text-4xl text-accent mb-4 mx-auto" />,
        title: "Data Structures & Algorithms",
        description: "Master fundamental data structures and algorithms to improve your programming proficiency."
    },
    {
        icon: <FaDatabase className="text-4xl text-accent mb-4 mx-auto" />,
        title: "Web Development",
        description: "Build dynamic and responsive websites using modern web technologies."
    },
    {
        icon: <FaLock className="text-4xl text-accent mb-4 mx-auto" />,
        title: "Cybersecurity",
        description: "Learn to safeguard systems and data from cyber threats."
    },
    {
        icon: <FaRobot className="text-4xl text-accent mb-4 mx-auto" />,
        title: "AI and ML",
        description: "Explore artificial intelligence and machine learning to build intelligent systems."
    },
    {
        icon: <FaImages className="text-4xl text-accent mb-4 mx-auto" />,
        title: "Visual Media",
        description: "Dive into the world of visual media, including graphics and multimedia."
    }
];

export const DomainsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

    return (
        <section id="domains" className="bg-white py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Domains</h2>
                    <p className="text-text">Explore the diverse range of domains offered by WeCode.</p>
                </div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
                            className="p-6 rounded-lg shadow-md bg-light-blue transition-all duration-300"
                        >
                            {domain.icon}
                            <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                            <p className="text-text">{domain.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
