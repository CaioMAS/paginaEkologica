"use client";

import React, { useState } from "react";
import { Pill, Container, Building, ShoppingBag, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Segments() {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Indústria Farmacêutica & Química",
      description: "Ambiências altamente controladas que exigem o mais absoluto rigor técnico, controle de poeira e certificações de segurança durante a execução de obras civis.",
      details: [
        "Construção e adequação de Salas Limpas certificadas",
        "Paredes e forros específicos com resistência química e laváveis",
        "Rigoroso isolamento e controle de contaminação física e biológica"
      ],
      tag: "Segurança Absoluta"
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "Centros Logísticos & Armazéns",
      description: "Estruturas dimensionadas para otimizar velocidade de estocagem, circulação e segurança, com obras rápidas e eficientes em Steel Frame.",
      details: [
        "Pisos industriais de alta planicidade e resistência",
        "Docas, escritórios de expedição e guaritas blindadas",
        "Retrofits rápidos e fechamentos laterais metálicos resistentes"
      ],
      tag: "Construção Rápida"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Sedes Corporativas & Escritórios",
      description: "Espaços projetados para aliar estética de alto padrão, isolamento acústico eficiente e funcionalidade moderna para colaboradores.",
      details: [
        "Divisórias de vidro duplo com persianas embutidas",
        "Forros modulares termoacústicos de alta performance",
        "Instalações elétricas e redes sob piso elevado"
      ],
      tag: "Design & Conforto"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Varejo, Shoppings & Lojas",
      description: "Reformas de rápida implantação, executadas em horários alternativos para garantir que as operações comerciais não sejam interrompidas.",
      details: [
        "Adequação de grandes áreas e lojas de departamento",
        "Montagem rápida de fachadas e paredes drywall técnicas",
        "Cumprimento severo de cronogramas noturnos"
      ],
      tag: "Cronograma Rígido"
    }
  ];

  return (
    <section id="segmentos" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <ScrollReveal>
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
              Segmentos Atendidos
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Especialização técnica para <br />
              múltiplos mercados
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="h-1.5 w-20 bg-primary rounded" />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl">
              Cada segmento comercial e industrial possui exigências legais e operacionais específicas. Nós adaptamos nossa metodologia para entregar a máxima eficiência técnica exigida pelo seu negócio.
            </p>
          </ScrollReveal>
        </div>

        {/* Dynamic Panels Layout (Split: Left menu, Right details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Buttons list (5 Columns) - Scrollable on mobile, stacked on desktop */}
          <div className="lg:col-span-5 min-w-0 w-full overflow-hidden">
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 mask-fade lg:mask-none scrollbar-thin">
              {segments.map((seg, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSegment(index)}
                  className={`shrink-0 lg:w-full text-left p-4 sm:p-5 lg:p-6 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                    activeSegment === index
                      ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                      : "bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`p-2 rounded-lg border shrink-0 transition-colors ${
                      activeSegment === index
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-slate-400 border-slate-200"
                    }`}>
                      {seg.icon}
                    </div>
                    <span className="font-display font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                      {seg.title}
                    </span>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 shrink-0 hidden lg:block ${
                    activeSegment === index ? "text-primary rotate-45" : "text-slate-400"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed active panel (7 Columns) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={300} className="h-full">
              <div className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm transition-all duration-500">
                
                {/* Decorative design accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-6">
                  
                  {/* Active tag & Title */}
                  <div className="flex items-center justify-between">
                    <span className="bg-primary/10 text-primary-dark border border-primary/20 text-[10px] font-mono uppercase font-bold py-1 px-3 rounded-full">
                      {segments[activeSegment].tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Foco Operacional
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {segments[activeSegment].title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                    {segments[activeSegment].description}
                  </p>

                  {/* Details bullet items */}
                  <div className="space-y-3 pt-4 border-t border-slate-200">
                    <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-800">
                      Escopo Principal de Entrega:
                    </h4>
                    <ul className="space-y-3">
                      {segments[activeSegment].details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start space-x-3 text-sm text-slate-600 font-light">
                          <span className="h-2 w-2 bg-primary rounded-full shrink-0 mt-1.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Handoff trigger */}
                <div className="pt-8 mt-8 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Ekológica Engenharia</span>
                  <span className="text-primary-dark font-bold">Capacidade Operacional</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
