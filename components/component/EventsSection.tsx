"use client";
import React from "react";
import { motion } from 'framer-motion';

// Event data array
const events = [
    {
        title: "Coding Bootcamp",
        date: "December 12, 2024",
        description: "An intensive bootcamp to sharpen your coding skills with hands-on projects.",
        location: "Online"
    },
    {
        title: "AI Workshop",
        date: "January 15, 2025",
        description: "A workshop exploring the latest trends and technologies in artificial intelligence.",
        location: "Campus"
    },
    {
        title: "Hackathon",
        date: "February 20, 2025",
        description: "A 48-hour hackathon to build innovative projects and win exciting prizes.",
        location: "Campus"
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
                            className={`p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out bg-slate-50`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                            <p className="text-gray-800 mb-4">{event.description}</p>
                            <p className="text-sm text-gray-500">Location: {event.location}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
