import React from 'react';
import Image from "next/image";
import event1 from '@/assets/past_events/hackthon1.jpg';
import event2 from '@/assets/past_events/hackthon2.jpg';

// Array of event data
const events = [
    {
        src: event1,
        alt: "CodeAthon",
        title: "CodeAthon - 2023",
        description: "CodeAthon 2023, organized by WeCode, is a premier coding event showcasing top programming talent."
    },
    {
        src: event2,
        alt: "Coding Competition",
        title: "Brainer's Week - 2023",
        description: "A vibrant festival organized by GEHU Bhimtal in collaboration with its first startup, Trusting Brains."
    },
];

export const PastEventsSection = () => {
    return (
        <section id="past-events" className="py-16 bg-gray-100 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Past Events</h2>
                    <p className="text-gray-600">
                        Explore the moments captured from our events and activities.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="bg-slate-50 w-[24rem] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <Image
                                src={event.src}
                                alt={event.alt}
                                className="object-cover w-full h-[10rem]"
                                priority
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2 text-gray-900">{event.title}</h4>
                                <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                                {/* <a href="#" className="text-[#ef9270] hover:text-[#d37e5d] font-medium transition-colors duration-300 text-xs">
                                    Read More
                                </a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
