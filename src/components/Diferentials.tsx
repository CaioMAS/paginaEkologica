"use client";

import React from "react";
import { ShieldAlert, Zap, Layers, Leaf, Award } from "lucide-react";
import { Card } from "./ui/Card";
import ScrollReveal from "./ScrollReveal";

export default function Diferentials() {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Operação Sem Paradas",
      description: "Planejamos e executamos adequações e retrofits civis no coração da sua indústria mantendo sua linha de produção 100% ativa."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      title: "Rigor Absoluto em SST",
      description: "Cultura zero acidentes com técnicos de segurança do trabalho dedicados em campo, auditoria de EPIs/EPCs e treinamento contínuo."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Solução Turnkey Real",
      description: "Centralização completa de responsabilidades. Cuidamos desde o projeto de engenharia de cargas até o acabamento e entrega de chaves."
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "DNA Ecológico Certificado",
      description: "Otimização extrema de insumos, separação rigorosa de resíduos de drywall e gesso e logística reversa alinhada ao nome da nossa marca."
    }
  ];

  return (
    <section id="diferenciais" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Callout (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal delay={200} className="w-full">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between overflow-hidden shadow-xl">
                
                {/* Decorative engineering lines */}
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-primary/20 pointer-events-none" />
                <div className="absolute left-1/3 top-0 w-[1px] h-full bg-primary/10 pointer-events-none" />
                
                {/* Floating technical card */}
                <div className="z-10 bg-primary/15 border border-primary/20 p-4 rounded-xl flex items-center space-x-3 backdrop-blur-md shadow-sm">
                  <Award className="w-8 h-8 text-primary-dark shrink-0 animate-bounce" />
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-800 uppercase">Parceria Estratégica</h4>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-normal font-medium">
                      Equipe homologada para atender multinacionais de alta exigência.
                    </p>
                  </div>
                </div>

                {/* Big Text Overlay */}
                <div className="z-10 space-y-4">
                  <span className="text-[80px] font-display font-black leading-none text-slate-200/50 select-none block">
                    SST
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                    Segurança como pilar inegociável
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Nossos profissionais passam por rigorosos exames médicos, treinamentos de trabalho em altura (NR-35), eletricidade (NR-10) e segurança em máquinas (NR-12).
                  </p>
                </div>

                {/* Tag footer */}
                <div className="z-10 flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-slate-200 pt-4">
                  <span>SEGURANÇA COMPROVADA</span>
                  <span className="text-primary-dark font-bold">100% COMPLIANCE</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: List of Diferentials (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <ScrollReveal>
                <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
                  Nossos Diferenciais
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Por que as maiores indústrias da região escolhem a Ekológica?
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={150}>
                <div className="h-1.5 w-20 bg-primary rounded" />
              </ScrollReveal>
            </div>

            {/* Grid of highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100 + 200}>
                  <Card className="border-slate-100 bg-slate-50 hover:border-primary/20 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 w-fit shrink-0 shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="font-display text-base font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
