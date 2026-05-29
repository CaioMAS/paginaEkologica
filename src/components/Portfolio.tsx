"use client";

import React, { useState } from "react";
import { Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Sala Limpa & Infraestrutura Técnica - Indústria Farmacêutica",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Execução civil de salas limpas, instalações elétricas e hidráulicas industriais integradas sob normas rígidas.",
      image: "/images/portfolio/sala_limpa_1.jpg",
      stat: "Grau de Pureza ISO 7 / ISO 8"
    },
    {
      id: 2,
      title: "Estrutura Metálica & Lajes Técnicas - Planta Fabril",
      category: "sistemas",
      categoryLabel: "Sistemas & Divisórias",
      scope: "Montagem de estrutura metálica de alta capacidade de carga para mezaninos e coberturas industriais.",
      image: "/images/portfolio/estrutura_metalica_1.jpg",
      stat: "Aço Galvanizado Estrutural"
    },
    {
      id: 3,
      title: "Fabricação de Estruturas de Madeira para Cobertura",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Montagem e pré-fabricação de tesouras e estruturas de madeira para telhados e coberturas industriais.",
      image: "/images/portfolio/lazer_industrial_1.jpg",
      stat: "Estrutura de Madeira"
    },
    {
      id: 4,
      title: "Montagem de Quadros Elétricos & Painéis Industriais",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Instalação e montagem de quadros elétricos de comando e distribuição com alto padrão de organização e alta sofisticação técnica.",
      image: "/images/portfolio/sala_limpa_2.jpg",
      stat: "Conformidade NR-10"
    },
    {
      id: 5,
      title: "Galpão Industrial & Fechamento Lateral - Área de Carga",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Execução de fundações, estruturas de sustentação e telhas termoacústicas para proteção de docas.",
      image: "/images/portfolio/estrutura_metalica_2.jpg",
      stat: "Conclusão Recorde"
    },
    {
      id: 6,
      title: "Infraestrutura Hidráulica & Tubulação Industrial",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Instalação subterrânea de tubulações hidráulicas, redes de escoamento e linhas de utilidades para plantas fabris.",
      image: "/images/portfolio/lazer_industrial_2.jpg",
      stat: "Infra Hidráulica"
    },
    {
      id: 7,
      title: "Instalação Elétrica Industrial de Alta Performance",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Montagem de infraestrutura, leitos de cabos e distribuição elétrica industrial de alta performance.",
      image: "/images/portfolio/sala_limpa_3.jpg",
      stat: "Alta Performance"
    },
    {
      id: 8,
      title: "Rede Hidráulica & Escavação de Utilidades Subterrâneas",
      category: "industrial",
      categoryLabel: "Obras Industriais",
      scope: "Abertura de valas e escavação especializada para assentamento de redes hidráulicas industriais e de combate a incêndio.",
      image: "/images/portfolio/lazer_industrial_3.jpg",
      stat: "Escavação & Redes"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterTabs = [
    { id: "all", label: "Todas as Obras" },
    { id: "industrial", label: "Obras Industriais" },
    { id: "corporativo", label: "Corporativo & Comercial" },
    { id: "sistemas", label: "Sistemas & Divisórias" }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <ScrollReveal>
              <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
                Portfólio de Engenharia
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Obras que consolidam nossa capacidade operacional
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <div className="h-1.5 w-20 bg-primary rounded" />
            </ScrollReveal>
          </div>

          {/* Filter Navigation Tabs */}
          <ScrollReveal delay={200} className="w-full md:w-auto overflow-hidden shrink-0">
            <div className="flex flex-row gap-2 overflow-x-auto pb-3 mask-fade scrollbar-thin w-full md:overflow-x-visible md:pb-0 md:flex-wrap">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold border transition-all duration-300 cursor-pointer ${
                    filter === tab.id
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div
                className="group relative rounded-2xl overflow-hidden border border-slate-200/60 bg-white flex flex-col shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-500"
              >
                {/* Top Section: Image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Overlay Gradient (darker at the bottom for hover eye button) */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-950/40 transition-colors duration-300" />
                  
                  {/* Floating Highlight Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm border border-slate-100 text-[9px] font-mono uppercase tracking-widest text-slate-900 font-bold py-1 px-3 rounded-full shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Trigger Circle Icon (Center of the image) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary text-white flex items-center justify-center backdrop-blur-sm shadow-xl hover:scale-110 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Text block */}
                <div className="p-6 space-y-3 bg-white border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-primary-dark font-bold bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                      {project.stat}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-base font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-light leading-relaxed font-sans">
                    {project.scope}
                  </p>
                </div>

                {/* Decorative Bottom Border glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
