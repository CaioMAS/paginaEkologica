"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const clientLogos = [
  {
    name: "Cristália",
    logo: (
      <img
        src="/images/logomarcas/Cristalia.png"
        alt="Cristália"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  },
  {
    name: "Novo Nordisk",
    logo: (
      <img
        src="/images/logomarcas/novo.png"
        alt="Novo Nordisk"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  },
  {
    name: "Hipolabor",
    logo: (
      <img
        src="/images/logomarcas/HIPOLABOR.png"
        alt="Hipolabor"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  },
  {
    name: "Alpargatas",
    logo: (
      <img
        src="/images/logomarcas/alpargatas.png"
        alt="Alpargatas"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  },
  {
    name: "Montes Claros Shopping",
    logo: (
      <img
        src="/images/logomarcas/montes-claros-shopping-logo-png_seeklogo-476119.png"
        alt="Montes Claros Shopping"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  },
  {
    name: "Eurofarma",
    logo: (
      <img
        src="/images/logomarcas/eurofarma-600x315.png"
        alt="Eurofarma"
        className="h-10 md:h-12 w-auto max-h-10 md:max-h-12 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  }
];

export default function Clients() {
  // Double the list for seamless infinite looping
  const doubleLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-slate-50 border-y border-slate-100 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <ScrollReveal>
          <p className="text-center text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
            Grandes marcas atendidas pela Ekológica Engenharia
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite scrolling carousel container */}
      <div className="relative w-full overflow-hidden mask-fade py-2">
        <div className="flex w-max items-center space-x-10 md:space-x-16 animate-carousel">
          {doubleLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center shrink-0 w-36 md:w-44 h-12 text-slate-400 hover:text-primary transition-colors duration-300 group cursor-pointer"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
