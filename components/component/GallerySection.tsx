import Image from "next/image";
import galleryImage1 from '@/assets/gallary.jpeg';
import galleryImage2 from '@/assets/gallary.jpeg';
import galleryImage3 from '@/assets/gallary.jpeg';
import galleryImage4 from '@/assets/gallary.jpeg';

export const GallerySection = () => {
    return (
        <section id="gallery" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
                    <p className="text-muted-foreground">
                        Explore the moments captured from our events and activities.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="relative w-full h-[250px]">
                        <Image
                            src={galleryImage1}
                            alt="Gallery Image 1"
                            layout="fill"
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-[250px]">
                        <Image
                            src={galleryImage2}
                            alt="Gallery Image 2"
                            layout="fill"
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <div className="relative w-full h-[250px]">
                        <Image
                            src={galleryImage3}
                            alt="Gallery Image 3"
                            layout="fill"
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
