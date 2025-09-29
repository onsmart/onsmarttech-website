"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, Settings, Monitor, Server, Smartphone, Printer, ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function LocacaoPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const equipamentos = [
    {
      title: "Computadores",
      description: "Desktops e notebooks de alta performance para sua empresa.",
      icon: <Monitor className="size-8" />,
      benefits: ["Intel i5/i7", "SSD 256GB+", "8GB RAM+", "Garantia 12 meses"]
    },
    {
      title: "Servidores",
      description: "Infraestrutura de servidores para hospedar suas aplicações.",
      icon: <Server className="size-8" />,
      benefits: ["Dell/HP", "RAID Configurado", "Redundância", "Suporte 24/7"]
    },
    {
      title: "Dispositivos Mobile",
      description: "Smartphones e tablets para equipe móvel.",
      icon: <Smartphone className="size-8" />,
      benefits: ["iOS/Android", "Proteção", "MDM", "Recarga Automática"]
    },
    {
      title: "Impressoras",
      description: "Equipamentos de impressão profissional e multifuncionais.",
      icon: <Printer className="size-8" />,
      benefits: ["Laser/Inkjet", "Multifuncional", "Manutenção", "Suprimentos"]
    }
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                  <Settings className="size-4" />
                  Locação de Equipamentos
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Locação de <span className="text-primary">Equipamentos</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Otimize seus recursos com nossa solução de locação de equipamentos tecnológicos. 
                Equipamentos de qualidade com suporte completo.
              </p>
              
              {/* Estatísticas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                  { number: "500+", label: "Equipamentos Disponíveis" },
                  { number: "24/7", label: "Suporte Técnico" },
                  { number: "12", label: "Meses de Garantia" },
                  { number: "99%", label: "Disponibilidade" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipamentos Grid */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Nossos Equipamentos
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Equipamentos de última geração com manutenção e suporte incluídos. 
                Ideal para empresas que querem otimizar custos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {equipamentos.map((equipamento, i) => (
                <Card key={i} className="h-full group hover:shadow-xl transition-all duration-300 border-border/40 bg-background hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {equipamento.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {equipamento.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {equipamento.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary mb-3">
                        Especificações
                      </h4>
                      <div className="space-y-1">
                        {equipamento.benefits.map((benefit, j) => (
                          <div
                            key={j}
                            className="text-xs text-muted-foreground flex items-center gap-2"
                          >
                            <div className="size-1 bg-primary rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Por Que Escolher Nossa <span className="text-primary">Locação?</span>
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-6">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <Settings className="size-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Manutenção Incluída</h3>
                <p className="text-muted-foreground">
                  Todos os equipamentos incluem manutenção preventiva e corretiva sem custo adicional.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <Monitor className="size-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Equipamentos Atualizados</h3>
                <p className="text-muted-foreground">
                  Sempre trabalhamos com equipamentos de última geração e em perfeito estado.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <Server className="size-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Suporte 24/7</h3>
                <p className="text-muted-foreground">
                  Suporte técnico disponível 24 horas por dia, 7 dias por semana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-12 shadow-lg">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                    <Settings className="size-4" />
                    Solicite um Orçamento
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Pronto para <span className="text-primary">Otimizar</span> Seus Custos?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  Entre em contato conosco e receba uma proposta personalizada para locação 
                  de equipamentos tecnológicos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="rounded-xl h-16 px-10 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Solicitar Orçamento
                    <ArrowLeft className="ml-2 size-5 rotate-180" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl h-16 px-10 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--footer-bg))' }}>
        <div className="container flex flex-col gap-8 px-4 py-16 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Image
                  src="/logo.png"
                  alt="OnSmart Tech Logo"
                  width={120}
                  height={40}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  style={{ maxWidth: '120px', height: 'auto' }}
                />
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Transformando negócios através da tecnologia. Soluções digitais inovadoras para acelerar seu
                crescimento.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-white/80">
                  <span>(11) 5093-1836</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span>contato@onsmart.com.br</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Soluções</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Apps Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Consultoria Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Cloud Computing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/80 hover:text-white transition-colors">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-white/20 pt-8">
            <p className="text-xs text-white/80">
              &copy; {new Date().getFullYear()} OnSmart Tech Solutions. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-white/80 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs text-white/80 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}