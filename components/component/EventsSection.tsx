"use client";
import wecode from "@/assets/wecode-light.png";
import { motion } from 'framer-motion';
import Image from "next/image";

// Event data array
const events = [
    {
        title: "Hackathon",
        date: "October 25, 2024",
        description: "A 72-hour hackathon to build innovative projects and win exciting prizes.",
        location: "Campus",
        src: wecode,
    },
];

export const EventsSection: React.FC = () => {
    return (
        <section id="events" className="py-16 md:py-24 px-4 md:px-8 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
                    <p className="text-gray-700">Stay updated with our latest events and join us for exciting opportunities!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col items-center justify-center  p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out bg-slate-50`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={event.src}
                                alt={event.title}
                                className="object-cover w-[10rem] h-[10rem]"
                                priority
                            />
                            <div className="flex flex-col items-start justify-start">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                                <p className="text-gray-800 mb-4">{event.description}</p>
                                <p className="text-sm text-gray-500">Location: {event.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
