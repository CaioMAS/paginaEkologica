"use client";

import React from "react";
import { Hammer, Shield, Building2 } from "lucide-react";
import { Button } from "./ui/Button";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Green Radial Glow (High Tech / Sustainable Vibe) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[95px] pointer-events-none" />

      {/* Decorative Beams (CSS lines that look like construction guidelines) */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-slate-200 via-primary/10 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left 7 Columns) */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Tag / Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full py-1.5 px-4 text-xs font-bold text-primary-dark uppercase tracking-widest">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                <span>Engenharia & Obras de Grande Porte</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal delay={150}>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Engenharia de alta <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  performance
                </span>{" "}
                para obras <br className="hidden sm:inline" />
                industriais.
              </h1>
            </ScrollReveal>

            {/* Sub-headline */}
            <ScrollReveal delay={300}>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
                A Ekológica executa construções industriais, retrofits complexos, adequações civis e infraestruturas corporativas de alto padrão. Capacidade operacional testada pelas maiores marcas do país.
              </p>
            </ScrollReveal>

            {/* Buttons & CTA */}
            <ScrollReveal delay={450}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="https://wa.me/5538991110158?text=Olá!%20Gostaria%20de%20solicitar%20uma%20apresentação%20técnica%20da%20Ekológica%20Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <span className="text-white">Solicitar Apresentação Técnica</span>
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() => scrollToSection("servicos")}
                >
                  Conhecer Nossos Serviços
                </Button>
              </div>
            </ScrollReveal>

            {/* Micro Highlights */}
            <ScrollReveal delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-xl">
                <div className="flex items-center space-x-3 sm:space-x-2">
                  <Shield className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-xs md:text-sm font-bold text-slate-700">Padrão SST Rígido</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-2">
                  <Hammer className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-xs md:text-sm font-bold text-slate-700">Retrofit Sem Paradas</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-2">
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-xs md:text-sm font-bold text-slate-700">Estrutura Turnkey</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Interactive Structural Graphics (Right 5 Columns) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            <ScrollReveal delay={400} className="w-full">
              <div className="relative w-full aspect-square max-w-[420px] rounded-2xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between shadow-xl overflow-hidden group hover:border-primary/20 transition-all duration-500">
                
                {/* Animated corner lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-300 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-300 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-300 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-300 rounded-br-xl" />
                
                {/* Construction Blueprint Overlay Vibe */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-45 transition-opacity duration-500">
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="currentColor"
                    className="w-full h-full text-slate-800"
                    strokeWidth="0.8"
                  >
                    {/* Isometric Building Structure */}
                    <polygon points="100,30 160,65 100,100 40,65" strokeDasharray="3 3" />
                    <polygon points="100,100 160,135 100,170 40,135" />
                    <line x1="100" y1="30" x2="100" y2="170" strokeWidth="1.2" className="text-primary" />
                    <line x1="40" y1="65" x2="40" y2="135" />
                    <line x1="160" y1="65" x2="160" y2="135" />
                    <line x1="70" y1="47.5" x2="70" y2="152.5" />
                    <line x1="130" y1="47.5" x2="130" y2="152.5" />
                    {/* Circular Radar / Target Lines */}
                    <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="40" />
                  </svg>
                </div>

                {/* Box Header */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
                    Sistema de Engenharia
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    V: 4.1.2026
                  </span>
                </div>

                {/* Structural Details / Specs */}
                <div className="space-y-4 z-10 my-auto">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Rigor Operacional</span>
                      <span className="text-slate-800 font-bold">100% Norma</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[95%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Logística de Paradas</span>
                      <span className="text-slate-800 font-bold">Impacto Zero</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[100%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-500">Execução Civil</span>
                      <span className="text-slate-800 font-bold">Turnkey</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]" />
                    </div>
                  </div>
                </div>

                {/* Box Footer */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 z-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase">Status</span>
                    <span className="text-xs text-primary-dark font-bold font-mono">OPERANDO COM SEGURANÇA</span>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => scrollToSection("sobre")}>
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Rolar para explorar</span>
          <div className="h-10 w-6 border-2 border-slate-200 rounded-full flex justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}
