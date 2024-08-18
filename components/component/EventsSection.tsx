import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export const EventsSection: React.FC = () => {
    return (
        <section id="events" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Events</h2>
                    <p className="text-muted-foreground">
                        Stay updated with our upcoming events and join us for exciting learning experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#2d2e32] rounded-lg p-6">
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="w-10 h-10 text-green-500" />
                            <div>
                                <h3 className="text-xl font-bold">Coding Bootcamp</h3>
                                <p className="text-muted-foreground">August 21, 2024</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mt-4">
                            Join our coding bootcamp to learn the fundamentals of programming and build your first project.
                        </p>
                    </div>
                    <div className="bg-[#2d2e32] rounded-lg p-6">
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="w-10 h-10 text-green-500" />
                            <div>
                                <h3 className="text-xl font-bold">Hackathon</h3>
                                <p className="text-muted-foreground">September 10, 2024</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground mt-4">
                            Participate in our hackathon to collaborate with others and solve challenging problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
