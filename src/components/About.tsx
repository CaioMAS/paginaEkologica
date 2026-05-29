"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import { Card } from "./ui/Card";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Cultura Zero Acidentes",
      description: "Rigores técnicos absolutos e conformidade integral com as normas regulamentadoras NR-10, NR-12, NR-35."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Logística sem Interrupção",
      description: "Planejamento cirúrgico de cronogramas para executar obras mantendo as fábricas 100% ativas."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Soluções Turnkey",
      description: "Gerenciamento de ponta a ponta: desde os projetos de cargas e engenharia até a entrega final e as-built."
    }
  ];

  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Evolutionary Narrative (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
                Quem Somos
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Sólida infraestrutura para <br />
                obras de grande porte.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="h-1.5 w-20 bg-primary rounded" />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Fundada em 2009 com a proposta de trazer sustentabilidade e inteligência construtiva, a <strong>Ekológica</strong> consolidou-se como uma referência em engenharia corporativa e construções industriais.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                O que nos diferencia é a capacidade de realizar intervenções complexas, retrofits e adequações em ambientes operacionais sem paralisar a produção do cliente. Nossos processos integrados unem engenheiros especialistas, técnicos de segurança dedicados e mão de obra homologada.
              </p>
            </ScrollReveal>

            {/* List of details */}
            <ScrollReveal delay={300}>
              <div className="space-y-3 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Engenharia consultiva e suporte técnico em todas as etapas da obra.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Rigores extremos de segurança para indústrias farmacêuticas, têxteis e de alimentos.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">Expertise em soluções termoacústicas, drywall técnico e steel frame.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pillars & Structural Visualization (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative space-y-4">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={index} delay={index * 150 + 200}>
                  <Card className="flex items-start space-x-4 border-slate-100 bg-slate-50 hover:border-primary/20">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shrink-0 shadow-sm">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-800">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}

              {/* Decorative Technical Callout */}
              <ScrollReveal delay={650}>
                <div className="rounded-2xl p-4 border border-primary/20 bg-primary/5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
                    <span className="text-[11px] font-mono text-slate-800 uppercase tracking-wider font-bold">
                      Engenharia Estruturada e Certificada
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-primary-dark font-black">Desde 2009</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
