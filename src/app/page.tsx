import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Segments from "@/components/Segments";
import Diferentials from "@/components/Diferentials";
import Indicators from "@/components/Indicators";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Credibility / Clients logos */}
        <Clients />

        {/* History / About Us */}
        <About />

        {/* Key Engineering Services */}
        <Services />

        {/* Industrial & Commercial Segments */}
        <Segments />

        {/* Statistics & Success Indicators */}
        <Indicators />

        {/* Competitive Differentials */}
        <Diferentials />

        {/* Photo Gallery Portfolio */}
        <Portfolio />

        {/* Operational Timeline Process */}
        <Process />

        {/* Contact Form & Call to Action */}
        <Contact />
      </main>

      {/* Corporate Detailed Footer */}
      <Footer />
    </>
  );
}
