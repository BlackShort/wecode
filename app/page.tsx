"use client";

import React, { useState, useEffect } from 'react';
import { AboutUsSection } from "@/components/component/AboutSection";
import { ContactSection } from "@/components/component/ContactSection";
import { DomainsSection } from "@/components/component/DomainsSection";
import { EventsSection } from "@/components/component/EventsSection";
import { Footer } from "@/components/component/Footer";
import { GallerySection } from "@/components/component/GallerySection";
import { Header } from "@/components/component/Header";
import { HeroSection } from "@/components/component/HeroSection";
import { MembersSection } from "@/components/component/MembersSection";
import { PastEventsSection } from "@/components/component/PastEventsSection";
import { useScroll, useTransform, motion } from "framer-motion";
import { LeadersSection } from '@/components/component/LeadersSection';
import { FaAngleUp } from "react-icons/fa6";

export default function Home() {
  const { scrollY } = useScroll();
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down 300px
  useEffect(() => {
    const handleScroll = (currentScrollY: number) => {
      if (currentScrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const heroScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="text-text min-h-[100dvh] flex flex-col overflow-x-hidden relative">
      <Header />
      <motion.main className="flex-1 overflow-x-hidden">
        <div className='w-full h-[85vh] overflow-hidden'>
          <motion.div
            className="flex-1 overflow-x-hidden"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <HeroSection />
          </motion.div>
        </div>
        <AboutUsSection />
        <LeadersSection />
        <DomainsSection />
        <MembersSection />
        <GallerySection />
        <PastEventsSection />
        <EventsSection />
        <ContactSection />
      </motion.main>
      <Footer />

      {showButton && (
        <motion.button
          className="fixed z-30 bottom-5 right-5 bg-green-500 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-xl"
          onClick={scrollToTop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={buttonVariants}
          transition={{ duration: 0.3 }}
        >
          <FaAngleUp fontSize={27} />
        </motion.button>
      )}
    </div>
  );
}
