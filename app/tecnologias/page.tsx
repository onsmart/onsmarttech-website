"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, Code, Cloud, Shield, Database, Smartphone, Globe, Server, ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

export default function TecnologiasPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const tecnologias = [
    {
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      icon: <Globe className="size-8" />,
      benefits: ["React/Next.js", "Node.js", "TypeScript", "Responsive Design"]
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
      icon: <Smartphone className="size-8" />,
      benefits: ["React Native", "Flutter", "iOS/Android", "PWA"]
    },
    {
      title: "Cloud Computing",
      description: "Migração e otimização de infraestrutura em nuvem para máxima eficiência.",
      icon: <Cloud className="size-8" />,
      benefits: ["AWS", "Azure", "Google Cloud", "DevOps"]
    },
    {
      title: "Banco de Dados",
      description: "Soluções de armazenamento e gestão de dados para qualquer escala.",
      icon: <Database className="size-8" />,
      benefits: ["PostgreSQL", "MongoDB", "Redis", "Big Data"]
    },
    {
      title: "Segurança Digital",
      description: "Proteção completa de dados e sistemas com as melhores práticas.",
      icon: <Shield className="size-8" />,
      benefits: ["Criptografia", "Firewall", "Backup", "Monitoramento"]
    },
    {
      title: "Infraestrutura",
      description: "Servidores, redes e infraestrutura de TI para suportar seu negócio.",
      icon: <Server className="size-8" />,
      benefits: ["Servidores", "Redes", "Virtualização", "Manutenção"]
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
                  <Code className="size-4" />
                  Tecnologias de Ponta
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Tecnologias <span className="text-primary">Avançadas</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Utilizamos as mais modernas tecnologias do mercado para desenvolver soluções 
                que impulsionam o crescimento do seu negócio.
              </p>
              
              {/* Estatísticas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                  { number: "15+", label: "Tecnologias Dominadas" },
                  { number: "100+", label: "Projetos Entregues" },
                  { number: "24/7", label: "Suporte Técnico" },
                  { number: "99%", label: "Uptime" }
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

        {/* Tecnologias Grid */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Nossas Tecnologias
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Domínio completo das principais tecnologias do mercado para entregar 
                soluções robustas e escaláveis.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tecnologias.map((tecnologia, i) => (
                <Card key={i} className="h-full group hover:shadow-xl transition-all duration-300 border-border/40 bg-background hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {tecnologia.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {tecnologia.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {tecnologia.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary mb-3">
                        Principais Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tecnologia.benefits.map((benefit, j) => (
                          <span
                            key={j}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                  <Code className="size-4" />
                  Solução Personalizada
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Precisa de uma <span className="text-primary">Tecnologia Específica?</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                Nossa equipe está sempre atualizada com as últimas tecnologias. 
                Entre em contato e descubra como podemos ajudar seu projeto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90">
                  Falar com Especialista
                  <ArrowLeft className="ml-2 size-4 rotate-180" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Solicitar Orçamento
                </Button>
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