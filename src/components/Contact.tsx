"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        nome: "",
        email: "",
        empresa: "",
        telefone: "",
        mensagem: "",
      });

      // Clear success notification after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="relative py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <ScrollReveal>
                <span className="text-[10px] uppercase font-mono tracking-widest text-primary-dark font-bold">
                  Fale Conosco
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Pronto para iniciar seu projeto de engenharia?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="h-1.5 w-20 bg-primary rounded" />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Nossos engenheiros estão à disposição para analisar escopos de obras, adequações industriais e projetos acústicos modulares de alta performance.
                </p>
              </ScrollReveal>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4">
              
              {/* Address */}
              <ScrollReveal delay={250}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-primary shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-800">Endereço Oficial</h4>
                    <p className="text-sm text-slate-600 mt-1 font-light leading-normal">
                      R. Quatro, 168 - Distrito Industrial<br />
                      Montes Claros - MG, CEP 39404-623
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone */}
              <ScrollReveal delay={300}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-primary shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-800">Telefone Comercial</h4>
                    <a href="tel:3832160260" className="text-sm text-slate-600 hover:text-primary transition-colors mt-1 inline-block font-medium">
                      (38) 3216-0260
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* E-mail */}
              <ScrollReveal delay={350}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-primary shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-800">E-mail Corporativo</h4>
                    <a href="mailto:contato@ekologicadrywall.com.br" className="text-sm text-slate-600 hover:text-primary transition-colors mt-1 inline-block font-medium">
                      contato@ekologicadrywall.com.br
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={400}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-primary shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-800">Horário de Atendimento</h4>
                    <p className="text-sm text-slate-600 mt-1 font-light leading-normal">
                      Segunda a Sexta: 08:00 às 18:00
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* WhatsApp Premium CTA Button */}
            <ScrollReveal delay={450}>
              <div className="pt-4">
                <a
                  href="https://wa.me/5538991110158?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20técnico%20com%20a%20Ekológica%20Engenharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-display font-bold shadow-md shadow-[#25D366]/10 transition-all duration-300 hover:shadow-[#25D366]/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span className="text-white">Chamar Engenheiro no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form Card (7 Columns) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={300} className="w-full">
              <Card className="border-slate-200 bg-white p-5 sm:p-8 md:p-10 relative shadow-lg">
                
                {/* Form Success State Notification */}
                {isSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center space-x-3 text-primary-dark animate-fadeIn">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                    <p className="text-sm font-bold">
                      Solicitação enviada com sucesso! Nossos engenheiros analisarão os dados e retornarão o contato em breve.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formState.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: João Silva"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-850 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        value={formState.empresa}
                        onChange={handleInputChange}
                        placeholder="Ex: Indústria Nestlé"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-850 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* E-mail */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Ex: joao@empresa.com.br"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-850 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formState.telefone}
                        onChange={handleInputChange}
                        placeholder="Ex: (38) 99999-9999"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-850 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensagem / Escopo da Obra */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-xs uppercase font-mono tracking-wider font-bold text-slate-800">
                      Mensagem ou Escopo da Obra *
                      <span className="text-[10px] text-slate-400 capitalize font-normal ml-2">
                        (Descreva as dimensões ou tipo de serviço)
                      </span>
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formState.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva detalhes como metragem, necessidade de isolamento acústico, trabalho em altura, prazos..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-slate-850 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group"
                    isLoading={isSubmitting}
                  >
                    <span className="mr-1 text-white font-bold">Enviar Solicitação de Orçamento</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </Button>

                  <p className="text-[10px] text-center text-slate-450 font-light leading-relaxed">
                    Ao enviar este formulário, seus dados serão processados exclusivamente pela equipe comercial de engenharia para confecção de proposta técnica. Retorno em até 24h úteis.
                  </p>
                </form>

              </Card>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
