"use client";

import React from "react";
import { Factory, Landmark, Layers, Layout, ShieldAlert, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const services = [
    {
      icon: <Factory className="w-8 h-8 text-white" />,
      title: "Obras Industriais & Infraestrutura",
      description: "Construções civis complexas e bases estruturais projetadas para suportar operações fabris de grande escala.",
      scopes: [
        "Fundações especiais e bases de concreto para máquinas",
        "Pisos industriais de alta resistência com cura química",
        "Estruturas auxiliares, canaletas e infraestruturas elétricas/hidráulicas"
      ]
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Engenharia Corporativa & Retrofit",
      description: "Reestruturação e modernização de grandes escritórios, shoppings e agências corporativas para otimizar fluxo e design.",
      scopes: [
        "Reforma e adequação estrutural (retrofit predial)",
        "Instalações elétricas, hidráulicas e climatização central",
        "Layouts modernos corporativos focados em ergonomia e acústica"
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Drywall Técnico & Divisórias",
      description: "Sistemas termoacústicos e estruturais de alta performance sob rígidas normas técnicas de resistência ao fogo.",
      scopes: [
        "Paredes e divisórias corporativas com isolamento de alta densidade",
        "Forros técnicos acústicos e de segurança (resistentes ao fogo)",
        "Adequações acústicas em salas de reunião, salas limpas e CPDs"
      ]
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Steel Frame & Estruturas Metálicas",
      description: "Construção industrializada rápida, de altíssima precisão geométrica e com impacto ambiental reduzido.",
      scopes: [
        "Projetos estruturais em perfis de aço galvanizado leve (LSF)",
        "Fechamentos externos e fachadas estruturadas de alta resistência",
        "Mezaninos metálicos e galpões de montagem rápida"
      ]
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-white" />,
      title: "Manutenção & Adequações Industriais",
      description: "Paradas técnicas programadas para adequação física de plantas produtivas e atendimento a normas de segurança.",
      scopes: [
        "Adequação física de layouts para atendimento da NR-12",
        "Fechamentos de segurança e barreira física em linhas de produção",
        "Reformas rápidas e reparos civis estruturais em paradas de fábrica"
      ]
    }
  ];

  return (
    <section id="servicos" className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white overflow-hidden shadow-inner">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <ScrollReveal>
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/70 font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Nossos Serviços
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engenharia de valor para o seu empreendimento
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <div className="h-1.5 w-20 bg-white mx-auto rounded" />
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Desenvolvemos soluções integradas de engenharia civil, montagens mecânicas e acabamentos técnicos que garantem a segurança, a conformidade normativa e a agilidade operacional da sua empresa.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid (Layout com cards premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex flex-col justify-between bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all duration-300 rounded-2xl p-6 sm:p-8 min-h-[380px] shadow-lg group hover:-translate-y-1">
                <div className="space-y-6">
                  {/* Header Icon + Title */}
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/90 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Scopes List */}
                  <ul className="space-y-2 pt-2 border-t border-white/10">
                    {service.scopes.map((scope, sIndex) => (
                      <li key={sIndex} className="flex items-start space-x-2 text-xs text-white/80 leading-normal">
                        <span className="h-1.5 w-1.5 bg-white rounded-full shrink-0 mt-1.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger inside card */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-white/90 group-hover:text-white">
                    Solicitar Escopo Técnico
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Decorative Call to Action Card in the Grid (WHITE contrast card) */}
          <ScrollReveal delay={500}>
            <div className="relative bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[380px] overflow-hidden shadow-2xl group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-6 z-10">
                <span className="bg-primary/10 text-primary-dark border border-primary/20 text-[10px] font-mono uppercase font-bold py-1 px-3 rounded-full">
                  ESTUDO PRELIMINAR
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight">
                  Seu projeto industrial com análise gratuita.
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Nossa equipe de engenheiros avalia as especificações de carga, isolamento termoacústico e logística de execução da sua planta fabril sem compromisso inicial.
                </p>
              </div>
              
              <a
                href="https://wa.me/5538988360260?text=Olá!%20Gostaria%20de%20falar%20com%20um%20engenheiro%20sobre%20o%20projeto%20da%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-lg font-display font-semibold hover:bg-primary-dark shadow-md shadow-primary/10 transition-colors duration-300 cursor-pointer z-10"
              >
                <span className="text-white font-bold">Falar com Engenheiro</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
              
              {/* Background SVG Grid accent */}
              <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none z-0">
                <svg width="150" height="150" fill="none" viewBox="0 0 100 100" className="text-slate-900">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
