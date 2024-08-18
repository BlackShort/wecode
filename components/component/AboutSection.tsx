import Image from "next/image";
import ankur from '@/assets/ankur.png';
import priyanshu from '@/assets/priyanshu.png';
import vibha from '@/assets/vibha.png';
import user from '@/assets/user.jpeg';

export const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Founder and About WeCode Section */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 justify-center items-center">
                        <div className="rounded-full w-[230px] md:w-[270px] h-[230px] md:h-[270px] border-[3px] border-red-500  mx-auto mb-4 overflow-hidden">
                            <Image
                                src={ankur}
                                alt="Founder"
                                className="object-cover object-top w-full h-full"
                                priority
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-white mt-4 text-center">Dr. Ankur Singh Bisht</h2>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About WeCode</h2>
                        <p className="text-muted-foreground mb-4">
                            WeCode is a community-driven club dedicated to empowering individuals to explore the world of
                            programming. We offer a supportive environment for beginners and experienced coders alike to learn,
                            collaborate, and grow their skills.
                        </p>
                        <p className="text-muted-foreground">
                            Founded by Ankur Singh Bisht, WeCode began with a vision to create a nurturing space where
                            individuals could not only learn coding but also engage with a vibrant community of like-minded
                            enthusiasts. Ankur's passion for programming and community building led to the inception of WeCode,
                            a platform that continues to inspire and support its members in their coding journey.
                        </p>
                    </div>
                </div>

                {/* Leadership Team Section */}
                <div className="py-16 md:py-24">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Meet the Leaders</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-[#2d2e32] rounded-lg p-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-green-500  mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={priyanshu}
                                    alt="President"
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Priyanshu Kumar</h4>
                            <p className="text-muted-foreground">President</p>
                        </div>
                        <div className="bg-[#2d2e32] rounded-lg p-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-green-500  mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={vibha}
                                    alt="Vice President"
                                    className="rounded-full w-[150px] h-[150px] object-cover object-top mx-auto mb-4"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Vibha Chandola</h4>
                            <p className="text-muted-foreground">Vice President</p>
                        </div>
                        <div className="bg-[#2d2e32] rounded-lg p-6 text-center">
                            <div className="rounded-full w-[150px] h-[150px] border-[3px] border-green-500  mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={user}
                                    alt="Managing Director"
                                    className="rounded-full w-[150px] h-[150px] object-cover object-top mx-auto mb-4"
                                    priority
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Ankit Pandey</h4>
                            <p className="text-muted-foreground">Managing Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
