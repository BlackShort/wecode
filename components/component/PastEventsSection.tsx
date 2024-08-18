import Image from "next/image";
import codingBootcampImage from '@/assets/gallary.jpeg';
import hackathonImage from '@/assets/gallary.jpeg';
import aiWorkshopImage from '@/assets/gallary.jpeg';

export const PastEventsSection = () => {
    return (
        <section id="past-events" className="py-16 md:py-24 px-4 md:px-8 bg-[#1a1b1e]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
                    <p className="text-muted-foreground">
                        Take a look back at some of the exciting events we’ve hosted.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#2d2e32] rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={codingBootcampImage}
                            alt="Coding Bootcamp 2024"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Coding Bootcamp 2024</h3>
                            <p className="text-muted-foreground mb-4">March 10, 2024</p>
                            <p className="text-muted-foreground">
                                Our annual coding bootcamp brought together aspiring developers for a day of intense coding and learning.
                            </p>
                            <a href="#" className="hover:underline mt-4 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#2d2e32] rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={hackathonImage}
                            alt="Hackathon 2023"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Hackathon 2023</h3>
                            <p className="text-muted-foreground mb-4">November 5, 2023</p>
                            <p className="text-muted-foreground">
                                A thrilling 48-hour hackathon where participants collaborated on innovative projects and solutions.
                            </p>
                            <a href="#" className="hover:underline mt-4 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#2d2e32] rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={aiWorkshopImage}
                            alt="AI Workshop"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">AI Workshop</h3>
                            <p className="text-muted-foreground mb-4">August 15, 2023</p>
                            <p className="text-muted-foreground">
                                An insightful workshop on Artificial Intelligence, featuring guest speakers and hands-on sessions.
                            </p>
                            <a href="#" className="hover:underline mt-4 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
