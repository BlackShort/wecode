import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import img1 from '@/assets/past_events/img1.jpg';
import img2 from '@/assets/past_events/img2.jpg';
import img3 from '@/assets/past_events/img3.jpg';
import img4 from '@/assets/past_events/img4.jpg';
import img5 from '@/assets/past_events/img5.jpg';
import img6 from '@/assets/past_events/img6.jpg';
import img7 from '@/assets/past_events/img7.jpg';
import img8 from '@/assets/past_events/img8.jpg';
import img9 from '@/assets/past_events/img9.jpg';
import img10 from '@/assets/past_events/img10.jpg';
import img11 from '@/assets/past_events/img11.jpg';
import img12 from '@/assets/past_events/img12.jpg';
import img13 from '@/assets/past_events/img13.jpg';
import img14 from '@/assets/past_events/img14.jpg';
import img15 from '@/assets/past_events/img15.jpg';
import img16 from '@/assets/past_events/img16.jpg';
import img17 from '@/assets/past_events/img17.jpg';
import img18 from '@/assets/past_events/img18.jpg';
import img19 from '@/assets/past_events/img19.jpg';
import img20 from '@/assets/past_events/img20.jpg';
import img21 from '@/assets/past_events/img21.jpg';
import img22 from '@/assets/past_events/img22.jpg';
import img23 from '@/assets/past_events/img23.jpg';
import img24 from '@/assets/past_events/img24.jpg';
import img25 from '@/assets/past_events/img25.jpg';
import img26 from '@/assets/past_events/img26.jpg';

const galleryImages = [
    { src: img1, alt: "Gallery Image 1", quote: "Quote 1", name: "Name 1", title: "Title 1" },
    { src: img2, alt: "Gallery Image 2", quote: "Quote 2", name: "Name 2", title: "Title 2" },
    { src: img3, alt: "Gallery Image 3", quote: "Quote 3", name: "Name 3", title: "Title 3" },
    { src: img4, alt: "Gallery Image 4", quote: "Quote 4", name: "Name 4", title: "Title 4" },
    { src: img5, alt: "Gallery Image 5", quote: "Quote 5", name: "Name 5", title: "Title 5" },
    { src: img6, alt: "Gallery Image 6", quote: "Quote 6", name: "Name 6", title: "Title 6" },
    { src: img7, alt: "Gallery Image 7", quote: "Quote 7", name: "Name 7", title: "Title 7" },
    { src: img8, alt: "Gallery Image 8", quote: "Quote 8", name: "Name 8", title: "Title 8" },
    { src: img9, alt: "Gallery Image 9", quote: "Quote 9", name: "Name 9", title: "Title 9" },
    { src: img10, alt: "Gallery Image 10", quote: "Quote 10", name: "Name 10", title: "Title 10" },
    { src: img11, alt: "Gallery Image 11", quote: "Quote 11", name: "Name 11", title: "Title 11" },
    { src: img12, alt: "Gallery Image 12", quote: "Quote 12", name: "Name 12", title: "Title 12" },
    { src: img13, alt: "Gallery Image 13", quote: "Quote 13", name: "Name 13", title: "Title 13" },
    { src: img14, alt: "Gallery Image 14", quote: "Quote 14", name: "Name 14", title: "Title 14" },
    { src: img15, alt: "Gallery Image 15", quote: "Quote 15", name: "Name 15", title: "Title 15" },
    { src: img16, alt: "Gallery Image 16", quote: "Quote 16", name: "Name 16", title: "Title 16" },
    { src: img17, alt: "Gallery Image 17", quote: "Quote 17", name: "Name 17", title: "Title 17" },
    { src: img18, alt: "Gallery Image 18", quote: "Quote 18", name: "Name 18", title: "Title 18" },
    { src: img19, alt: "Gallery Image 19", quote: "Quote 19", name: "Name 19", title: "Title 19" },
    { src: img20, alt: "Gallery Image 20", quote: "Quote 20", name: "Name 20", title: "Title 20" },
    { src: img21, alt: "Gallery Image 21", quote: "Quote 21", name: "Name 21", title: "Title 21" },
    { src: img22, alt: "Gallery Image 22", quote: "Quote 22", name: "Name 22", title: "Title 22" },
    { src: img23, alt: "Gallery Image 23", quote: "Quote 23", name: "Name 23", title: "Title 23" },
    { src: img24, alt: "Gallery Image 24", quote: "Quote 24", name: "Name 24", title: "Title 24" },
    { src: img25, alt: "Gallery Image 25", quote: "Quote 25", name: "Name 25", title: "Title 25" },
    { src: img26, alt: "Gallery Image 26", quote: "Quote 26", name: "Name 26", title: "Title 26" },
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
