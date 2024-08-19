"use client";

import React from 'react';
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

export default function Home() {
  const { scrollY } = useScroll();

  // Animations for HeroSection
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animations for AboutUsSection
  const aboutScale = useTransform(scrollY, [300, 600], [1, 1]);
  const aboutOpacity = useTransform(scrollY, [300, 600], [1, 1]);

  // Animations for LeadersSection
  const leadersScale = useTransform(scrollY, [600, 900], [1, 1.5]);
  const leadersOpacity = useTransform(scrollY, [600, 900], [0, 1]);

  // Animations for DomainsSection
  const domainsScale = useTransform(scrollY, [900, 1200], [1, 1.5]);
  const domainsOpacity = useTransform(scrollY, [900, 1200], [0, 1]);

  // Animations for MembersSection
  const membersScale = useTransform(scrollY, [1200, 1500], [1, 1.5]);
  const membersOpacity = useTransform(scrollY, [1200, 1500], [0, 1]);

  // Animations for GallerySection
  const galleryScale = useTransform(scrollY, [1500, 1800], [1, 1.5]);
  const galleryOpacity = useTransform(scrollY, [1500, 1800], [0, 1]);

  // Animations for PastEventsSection
  const pastEventsScale = useTransform(scrollY, [1800, 2100], [1, 1.5]);
  const pastEventsOpacity = useTransform(scrollY, [1800, 2100], [0, 1]);

  // Animations for EventsSection
  const eventsScale = useTransform(scrollY, [2100, 2400], [1, 1.5]);
  const eventsOpacity = useTransform(scrollY, [2100, 2400], [0, 1]);

  // Animations for ContactSection
  const contactScale = useTransform(scrollY, [2400, 2700], [1, 1.5]);
  const contactOpacity = useTransform(scrollY, [2400, 2700], [0, 1]);

  return (
    <div className="text-text min-h-[100dvh] flex flex-col overflow-x-hidden">
      <Header />
      <motion.main className="flex-1 overflow-x-hidden">
        <motion.div
          className="flex-1 overflow-x-hidden"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <HeroSection />
        </motion.div>
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
    </div>
  );
}
