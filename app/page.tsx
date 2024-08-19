"use client";
import React from 'react';
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
import { useScroll, useTransform,motion } from "framer-motion";
import { AboutUsSection } from '@/components/component/LeadersSection';

export default function Home() {
  const { scrollY } = useScroll();
    
  // Define the scale and opacity transformations based on scroll position
  const scale = useTransform(scrollY, [0, 300], [ 0.8,6]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className=" text-white min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1">
          <HeroSection />

      </main>
      <main className="flex-1">
        <AboutSection /> 
        <AboutUsSection />
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
