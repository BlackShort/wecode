import { AboutSection } from "@/components/component/AboutSection";
import { ContactSection } from "@/components/component/ContactSection";
import { DomainsSection } from "@/components/component/DomainsSection";
import { EventsSection } from "@/components/component/EventsSection";
import { Footer } from "@/components/component/Footer";
import { GallerySection } from "@/components/component/GallerySection";
import { Header } from "@/components/component/Header";
import { HeroSection } from "@/components/component/HeroSection";
import { MembersSection } from "@/components/component/MembersSection";
import { PastEventsSection } from "@/components/component/PastEventsSection";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <div className="bg-[#1a1b1e] text-white min-h-[100dvh] flex flex-col">
      <main className="flex-1">
        <WavyBackground blur={10}>
          <Header />
          <HeroSection />
        </WavyBackground>
      </main>
      <main className="flex-1">
        <AboutSection />
        <DomainsSection />
        <MembersSection />
        <GallerySection />
        <PastEventsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
