"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
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
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"

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
      <Header isScrolled={isScrolled} />

      <main className="flex-1">
        {/* ATENÇÃO - Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden relative">
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

          </div>
        </section>

        {/* SOLUÇÕES TECNOLÓGICAS EMPRESARIAIS & SEGMENTOS */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="size-4" />
                  </motion.div>
                  Soluções Especializadas
                </div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Soluções Tecnológicas <span className="text-primary">Empresariais</span>
              </motion.h2>
              
              <motion.div 
                className="w-24 h-1 bg-primary mx-auto mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Soluções tecnológicas de TI / Telecom / Automação que otimizam os negócios, ampliam a vantagem competitiva e propiciam o crescimento empresarial sustentável.
              </motion.p>

              <motion.p 
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Alcance todo o potencial do seu negócio! Tecnologia específica para as necessidades do seu segmento.
              </motion.p>
            </motion.div>

            {/* Cards Grid Sem Espaçamento */}
            <motion.div 
              className="grid md:grid-cols-3"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { 
                  title: "Segmentos", 
                  description: "Soluções tecnológicas por segmento de negócio para otimizar processos e desempenho.",
                  href: "/segmentos",
                  icon: <Target className="size-6" />
                },
                { 
                  title: "Tecnologias", 
                  description: "Tecnologia de ponta que otimiza a produtividade, mobilidade e gestão eficiente para seu negócio.",
                  href: "/tecnologias",
                  icon: <Code className="size-6" />
                },
                { 
                  title: "Locação", 
                  description: "Otimize recursos com a locação de equipamentos tecnológicos para operação da empresa.",
                  href: "/locacao",
                  icon: <Settings className="size-6" />
                },
              ].map((segment, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 20
                    },
                    show: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -4,
                    transition: { 
                      duration: 0.2,
                      ease: "easeOut"
                    }
                  }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-r border-gray-200 bg-gray-50 hover:bg-white hover:border-primary/30 relative overflow-hidden cursor-pointer">
                    <CardContent className="p-10">
                      {/* Icon Container Melhorado */}
                      <div className="size-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md transition-all duration-300">
                        {segment.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                        {segment.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-8 text-base">
                        {segment.description}
                      </p>
                      
                      {/* Button Melhorado */}
                      <Button 
                        asChild
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 rounded-xl h-12 text-base font-medium shadow-sm hover:shadow-md"
                      >
                        <Link href={segment.href} className="flex items-center justify-center gap-2">
                          Saiba Mais
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* PARCEIROS */}
        <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Nossos <span className="text-primary">Parceiros</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Trabalhamos com as melhores marcas de tecnologia para oferecer soluções de qualidade e inovação.
              </p>
            </motion.div>

            {/* Carrossel Horizontal Ampliado */}
            <div className="relative">
              {/* Gradientes laterais para fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div className="overflow-hidden">
                <div className="flex animate-scroll">
                  {/* Primeira linha de logos */}
                  <div className="flex items-center gap-12 flex-shrink-0">
                    {[
                      { name: "Microsoft", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Western Digital", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "VMware", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "HP", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Veritas", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Veeam", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Dell", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Cisco", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "IBM", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Oracle", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Amazon Web Services", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Google Cloud", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Salesforce", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Adobe", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Intel", logo: "/placeholder-logo.svg", size: "h-15" },
                    ].map((partner, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 min-w-[160px] border border-gray-100"
                        whileHover={{ 
                          y: -4,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className={`${partner.size} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Segunda linha de logos (duplicada para continuidade) */}
                  <div className="flex items-center gap-12 flex-shrink-0">
                    {[
                      { name: "Microsoft", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Western Digital", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "VMware", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "HP", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Veritas", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Veeam", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Dell", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Cisco", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "IBM", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Oracle", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Amazon Web Services", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Google Cloud", logo: "/placeholder-logo.svg", size: "h-15" },
                      { name: "Salesforce", logo: "/placeholder-logo.svg", size: "h-14" },
                      { name: "Adobe", logo: "/placeholder-logo.svg", size: "h-16" },
                      { name: "Intel", logo: "/placeholder-logo.svg", size: "h-15" },
                    ].map((partner, i) => (
                      <motion.div
                        key={`duplicate-${i}`}
                        className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 min-w-[160px] border border-gray-100"
                        whileHover={{ 
                          y: -4,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className={`${partner.size} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Texto adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-16"
            >
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Mais de <span className="font-bold text-primary">50 parceiros</span> de tecnologia trabalhando conosco para entregar as melhores soluções do mercado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTERESSE - Quem Somos com Benefícios */}
        <section id="servicos" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Por Que Escolher a <span className="text-primary">OnSmart Tech?</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed mb-16">
                Desde 2014, somos especialistas em transformação digital. Nossa missão é acelerar o crescimento 
                do seu negócio através de soluções tecnológicas que geram resultados reais e mensuráveis.
              </p>
              
              {/* Estatísticas Melhoradas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Empresas Atendidas" },
                  { number: "10+", label: "Anos de Experiência" },
                  { number: "98%", label: "Satisfação dos Clientes" },
                  { number: "24h", label: "Suporte Técnico" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>



        {/* AÇÃO - CTA Final */}
        <section className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Pronto para <span className="text-primary">Revolucionar</span> Seu Negócio?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  <strong>Últimas vagas disponíveis para 2025!</strong> Entre em contato agora e garante sua 
                  consultoria gratuita de 30 minutos. Transforme sua empresa em apenas 90 dias.
                </p>
                
                {/* Botões CTA Melhorados */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Button size="lg" className="rounded-xl h-16 px-10 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                    Quero Minha Consultoria Gratuita
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl h-16 px-10 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-full px-6 py-3 inline-flex">
                  <Clock className="size-4" />
                  <span>Oferta válida apenas para os próximos 30 dias. Vagas limitadas!</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer id="contato" className="w-full border-t backdrop-blur-sm" style={{ backgroundColor: 'hsl(var(--footer-bg))' }}>
        <div className="container flex flex-col gap-8 px-4 py-16 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <img
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
                  <Phone className="size-4" />
                  <span>(11) 5093-1836</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <Mail className="size-4" />
                  <span>contato@onsmart.com.br</span>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <MapPin className="size-4" />
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
