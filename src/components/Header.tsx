"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quem Somos", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Processo", href: "#processo" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group py-1">
            <img
              src="/images/logomarcas/logo ekologica png.png"
              alt="Ekológica Engenharia"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-200 relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:38988360260"
              className="flex items-center space-x-2 text-sm text-slate-600 hover:text-primary transition-colors duration-200 font-semibold"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>(38) 98836-0260</span>
            </a>
            <a
              href="https://wa.me/5538988360260?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20engenharia."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="sm"
                className="group"
              >
                <span className="text-white">Orçamento</span>
                <ArrowUpRight className="ml-1 w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-slate-100 transition-all duration-300 overflow-hidden shadow-lg ${
          isOpen ? "max-h-[450px] py-6 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold text-slate-700 hover:text-primary py-2 border-b border-slate-100 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <a
              href="tel:38988360260"
              className="flex items-center space-x-2 text-slate-700 hover:text-primary py-2 transition-colors duration-200 font-semibold"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-base">(38) 98836-0260</span>
            </a>
            <a
              href="https://wa.me/5538988360260?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20engenharia."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              <Button
                variant="primary"
                size="md"
                className="w-full justify-between"
              >
                <span className="text-white">Solicitar Orçamento</span>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
