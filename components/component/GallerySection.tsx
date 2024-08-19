import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import galleryImage1 from '@/assets/gallery.jpeg';
import galleryImage2 from '@/assets/gallery.jpeg';
import galleryImage3 from '@/assets/gallery.jpeg';

const galleryImages = [
    { src: galleryImage1, alt: "Gallery Image 1", quote: "Quote 1", name: "Name 1", title: "Title 1" },
    { src: galleryImage2, alt: "Gallery Image 2", quote: "Quote 2", name: "Name 2", title: "Title 2" },
    { src: galleryImage3, alt: "Gallery Image 3", quote: "Quote 3", name: "Name 3", title: "Title 3" }
];

export const GallerySection = () => {
    return (
        <section id="gallery" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Gallery</h2>
                    <p className="text-gray-600">
                        Explore the moments captured from our events and activities.
                    </p>
                </div>
                <InfiniteMovingCards items={galleryImages} />
            </div>
        </section>
    );
};
