"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Indicators() {
  const stats = [
    {
      end: 15,
      suffix: "+ Anos",
      label: "De experiência consolidada na construção civil e drywall técnico."
    },
    {
      end: 500000,
      suffix: " m²+",
      label: "De infraestruturas, forros, divisórias e steel frame instalados."
    },
    {
      end: 100,
      suffix: "%",
      label: "Conformidade em auditorias de segurança e zero sinistros de SST."
    },
    {
      end: 50,
      suffix: "+",
      label: "Grandes corporações e indústrias atendidas recorrentemente."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white border-y border-white/10 overflow-hidden shadow-inner">
      {/* Background graphic grid lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Subtle green glow behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center sm:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 relative group">
              <ScrollReveal delay={index * 150}>
                {/* Top accent line */}
                <div className="h-0.5 w-12 bg-white/20 group-hover:bg-white transition-colors duration-300 mx-auto sm:mx-0 rounded" />
                
                {/* Numerical Counter */}
                <div className="pt-2 flex justify-center sm:justify-start">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                
                {/* Metadata Title */}
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-xs mx-auto sm:mx-0 mt-2">
                  {stat.label}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
