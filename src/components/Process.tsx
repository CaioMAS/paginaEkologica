"use client";

import React from "react";
import { Search, Compass, Play, ClipboardCheck } from "lucide-react";
import { Card } from "./ui/Card";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Diagnóstico & Engenharia",
      description: "Análise aprofundada dos requisitos técnicos do cliente. Validação de cargas, isolamento térmico, especificações acústicas e desenhos técnicos preliminares."
    },
    {
      num: "02",
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Planejamento & Setup SST",
      description: "Montagem do cronograma logístico integrado e plano de segurança. Emissão de ARTs, credenciamento de equipes e adequação às diretrizes de segurança da contratante."
    },
    {
      num: "03",
      icon: <Play className="w-6 h-6 text-primary" />,
      title: "Execução Rígida",
      description: "Execução civil e mecânica conduzida por equipe homologada e supervisionada por engenheiro residente, seguindo processos certificados de controle e medição."
    },
    {
      num: "04",
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: "Handoff & As-Built",
      description: "Comissionamento final das instalações com testes operacionais. Entrega formal do projeto com manual de uso, laudos de segurança e as-built detalhados."
    }
  ];

  return (
    <section id="processo" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <ScrollReveal>
            <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
              Metodologia
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Como garantimos a precisão e a segurança da sua obra
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded" />
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Nossa metodologia de engenharia de ciclo completo (end-to-end) assegura conformidade técnica absoluta, mitigação completa de riscos e entregas rigorosamente dentro do prazo acordado.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Horizontal connecting line (hidden on mobile, shown on lg screens) */}
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-slate-200 pointer-events-none -translate-y-6 hidden lg:block" />

          {/* Vertical connecting line (shown on mobile/tablet, hidden on desktop) */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-[2.5px] bg-slate-200/80 pointer-events-none -translate-x-[1px] lg:hidden z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <ScrollReveal delay={index * 150} className="h-full">
                  <Card className="h-full flex flex-col justify-between border-slate-100 bg-slate-50 hover:border-primary/20 p-8 pt-10">
                    <div className="space-y-6">
                      
                      {/* Header: Step Number & Icon */}
                      <div className="flex items-center justify-between">
                        <span className="font-display text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-primary/20 transition-colors duration-300">
                          {step.num}
                        </span>
                        <div className="p-3 bg-white rounded-xl border border-slate-200 shrink-0 shadow-sm group-hover:border-primary/30 transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="font-display text-lg font-bold text-slate-800 leading-tight">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed font-sans">
                        {step.description}
                      </p>

                    </div>
                  </Card>
                </ScrollReveal>

                {/* Mobile/Tablet connector dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-4 w-4 bg-white border-2 border-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -translate-y-6 hidden lg:block z-20 pointer-events-none" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
