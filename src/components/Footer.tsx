"use client";

import React from "react";
import { Phone, MapPin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden text-slate-300">
      {/* Background Graphic Grid Accent */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Branding & Intro (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center group w-fit bg-white/95 rounded-2xl p-3 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/logomarcas/logo ekologica png.png"
                alt="Ekológica Engenharia"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Desde 2009 unindo rigor técnico, conformidade legal e gestão de segurança para executar construções industriais, reformas de plantas operacionais e retrofits corporativos de alta exigência.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/ekologicaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-primary transition-all duration-300 group"
                aria-label="Instagram"
              >
                <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-white transition-colors">@ekologicaa</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Quem Somos", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Segmentos", href: "#segmentos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Processo", href: "#processo" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-white">
              Nossas Soluções
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-light">
              <li>Construções Civis Industriais</li>
              <li>Retrofit Predial Corporativo</li>
              <li>Sistemas Drywall Técnico</li>
              <li>Fechamentos Steel Frame</li>
              <li>Adequações Civis (NR-12)</li>
              <li>Isolamento Acústico de Plantas</li>
            </ul>
          </div>

          {/* Column 4: Contact & Support (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-white">
              Atendimento Técnico
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-xs sm:text-sm text-slate-400 font-light">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>R. Quatro, 168 - Distrito Industrial, Montes Claros - MG, 39404-623</span>
              </li>
              <li className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 font-light">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:3832160260" className="hover:text-primary transition-colors">
                  (38) 3216-0260
                </a>
              </li>
              <li className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 font-light">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contato@ekologicadrywall.com.br" className="hover:text-primary transition-colors truncate">
                  contato@ekologicadrywall.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] text-slate-500 font-light space-y-1 text-center sm:text-left">
            <p>
              &copy; {currentYear} Ekológica Engenharia. Todos os direitos reservados.
            </p>
            <p>
              Razão Social: Ekológica Drywall Ltda. | CNPJ: 10.963.784/0001-94
            </p>
          </div>
          
          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-primary font-mono tracking-wide transition-colors cursor-pointer group"
          >
            <span>Voltar ao topo</span>
            <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-brand-dark transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
