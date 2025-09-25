"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Phone,
  Mail,
  MapPin,
  Globe,
  Code,
  Rocket,
  Target,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Componente de texto digitando
function TypewriterText({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/95 shadow-sm border-b" : "bg-background/80"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/onsmarttech.png"
              alt="OnSmart Tech Logo"
              width={120}
              height={120}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => {
                const element = document.getElementById('solucoes');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              SOLUÇÕES
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('servicos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('software');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              SOFTWARE
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              CONTATO
            </button>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90"
              onClick={() => {
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Começar Agora
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <button 
                className="py-2 text-sm font-medium text-left" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('solucoes');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SOLUÇÕES
              </button>
              <button 
                className="py-2 text-sm font-medium text-left" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('servicos');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SERVIÇOS
              </button>
              <button 
                className="py-2 text-sm font-medium text-left" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('software');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SOFTWARE
              </button>
              <button 
                className="py-2 text-sm font-medium text-left" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  const element = document.getElementById('contato');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                CONTATO
              </button>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button 
                  className="rounded-full bg-primary hover:bg-primary/90"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.getElementById('contato');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Começar Agora
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* ATENÇÃO - Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-background"></div>
          <div className="absolute inset-0 bg-[url('/modern-city-skyline-silhouette.jpg')] bg-cover bg-center opacity-10"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  className="mb-6 rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
                  variant="outline"
                >
                  Transformação Digital em 2025
                </Badge>
              </motion.div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
                <TypewriterText 
                  texts={[
                    "Acelere Seu Negócio com",
                    "Transforme Sua Empresa com", 
                    "Revolucione Seus Resultados com",
                    "Impulsione Seu Crescimento com"
                  ]}
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
                <span className="text-primary block">
                  <TypewriterText 
                    texts={[
                      "Tecnologia Inteligente",
                      "Soluções Digitais",
                      "Inovação Tecnológica",
                      "Estratégias Digitais"
                    ]}
                    speed={100}
                    deleteSpeed={50}
                    pauseTime={3000}
                  />
                </span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                <strong>+500 empresas</strong> já transformaram seus resultados com nossas soluções digitais. 
                Aumente sua produtividade em <strong>40%</strong> e reduza custos em <strong>30%</strong> em apenas 90 dias.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="rounded-full h-14 px-8 text-base bg-primary hover:bg-primary/90">
                    Quero Aumentar Meus Resultados
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 size-4" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-14 px-8 text-base border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Ver Demonstração Gratuita
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Avaliação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>+500 Clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4" />
                  <span>+40% Produtividade</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Desenvolvimento Web",
                  description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
                  icon: <Globe className="size-6" />,
                  benefit: "Aumente conversões em 60%",
                },
                {
                  title: "Aplicativos Mobile",
                  description: "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
                  icon: <Zap className="size-6" />,
                  benefit: "Engajamento 3x maior",
                },
                {
                  title: "Consultoria Digital",
                  description: "Estratégias personalizadas para acelerar sua transformação digital.",
                  icon: <Users className="size-6" />,
                  benefit: "ROI em 6 meses",
                },
                {
                  title: "Cloud Computing",
                  description: "Migração e otimização de infraestrutura em nuvem para máxima eficiência.",
                  icon: <Layers className="size-6" />,
                  benefit: "Reduza custos em 50%",
                },
                {
                  title: "Analytics & BI",
                  description: "Inteligência de negócios e análise de dados para decisões estratégicas.",
                  icon: <BarChart className="size-6" />,
                  benefit: "Decisões 5x mais precisas",
                },
                {
                  title: "Segurança Digital",
                  description: "Proteção completa de dados e sistemas com as melhores práticas de segurança.",
                  icon: <Shield className="size-6" />,
                  benefit: "100% de proteção",
                },
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={item}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/40 bg-background hover:border-primary/20">
                    <CardContent className="p-8">
                      <motion.div 
                        className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <motion.div 
                        className="flex items-center gap-2 text-sm font-medium text-primary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <CheckCircle className="size-4" />
                        </motion.div>
                        <span>{service.benefit}</span>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INTERESSE - Quem Somos com Benefícios */}
        <section id="servicos" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Por Que Escolher a OnSmart Tech?
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Desde 2014, somos especialistas em transformação digital. Nossa missão é acelerar o crescimento 
                do seu negócio através de soluções tecnológicas que geram resultados reais e mensuráveis.
              </p>
              
              {/* Estatísticas de Impacto */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {[
                  { number: "500+", label: "Empresas Atendidas" },
                  { number: "10+", label: "Anos de Experiência" },
                  { number: "98%", label: "Satisfação dos Clientes" },
                  { number: "24h", label: "Suporte Técnico" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        color: ["#3b82f6", "#8b5cf6", "#3b82f6"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5 
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="size-8 text-primary" />,
                  title: "Nossa Missão",
                  description:
                    "Ser um agente transformador através de soluções digitais inovadoras que superam expectativas.",
                },
                {
                  icon: <Rocket className="size-8 text-primary" />,
                  title: "Nossa Visão",
                  description:
                    "Liderar a transformação digital no Brasil, criando impacto positivo na sociedade e nos negócios.",
                },
                {
                  icon: <Shield className="size-8 text-primary" />,
                  title: "Nossos Valores",
                  description:
                    "Inovação, qualidade, transparência e compromisso com resultados excepcionais para nossos clientes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full text-center p-8 border-border/40 bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <motion.div 
                        className="mb-6"
                        whileHover={{ 
                          rotate: [0, -15, 15, 0],
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DESEJO - Soluções com Foco em Benefícios */}
        <section id="solucoes" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Soluções que Transformam Seu Negócio
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Descubra como nossas soluções podem revolucionar sua empresa e gerar resultados extraordinários
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Desenvolvimento Web",
                  description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
                  icon: <Globe className="size-6" />,
                },
                {
                  title: "Aplicativos Mobile",
                  description: "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
                  icon: <Zap className="size-6" />,
                },
                {
                  title: "Consultoria Digital",
                  description: "Estratégias personalizadas para acelerar sua transformação digital.",
                  icon: <Users className="size-6" />,
                },
                {
                  title: "Cloud Computing",
                  description: "Migração e otimização de infraestrutura em nuvem para máxima eficiência.",
                  icon: <Layers className="size-6" />,
                },
                {
                  title: "Analytics & BI",
                  description: "Inteligência de negócios e análise de dados para decisões estratégicas.",
                  icon: <BarChart className="size-6" />,
                },
                {
                  title: "Segurança Digital",
                  description: "Proteção completa de dados e sistemas com as melhores práticas de segurança.",
                  icon: <Shield className="size-6" />,
                },
              ].map((service, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/40 bg-background">
                    <CardContent className="p-8">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SOFTWARE - Seção de Software */}
        <section id="software" className="w-full py-20 md:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Software Personalizado
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Desenvolvemos software sob medida para atender às necessidades específicas do seu negócio, 
                garantindo máxima eficiência e resultados excepcionais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AÇÃO - CTA Final */}
        <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Pronto para Revolucionar Seu Negócio?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                <strong>Últimas vagas disponíveis para 2025!</strong> Entre em contato agora e garante sua 
                consultoria gratuita de 30 minutos. Transforme sua empresa em apenas 90 dias.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-8 mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="size-5" />
                    <span>Consultoria Gratuita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-5" />
                    <span>Sem Compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-5" />
                    <span>Especialista Dedicado</span>
                  </div>
                </div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base">
                      Quero Minha Consultoria Gratuita
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 size-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-14 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                    >
                      Falar no WhatsApp
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
              <p className="text-sm text-primary-foreground/70">
                Oferta válida apenas para os próximos 30 dias. Vagas limitadas!
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contato" className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-16 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Image
                  src="/onsmarttech.png"
                  alt="OnSmart Tech Logo"
                  width={120}
                  height={120}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transformando negócios através da tecnologia. Soluções digitais inovadoras para acelerar seu
                crescimento.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-4" />
                  <span>(11) 5093-1836</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-4" />
                  <span>contato@onsmart.com.br</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Soluções</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Apps Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Consultoria Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cloud Computing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} OnSmart Tech Solutions. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
