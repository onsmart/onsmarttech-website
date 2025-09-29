"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  isScrolled?: boolean
}

export default function Header({ isScrolled = false }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "shadow-sm border-b" : ""}`}
      style={{ backgroundColor: 'hsl(var(--header-bg))' }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="OnSmart Tech Logo"
              width={120}
              height={40}
              className="object-contain hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: '120px', height: 'auto' }}
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {/* QUEM SOMOS */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('quem-somos')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-sm font-bold text-white transition-colors hover:text-primary flex items-center gap-1">
              QUEM SOMOS
              <ChevronDown className="size-3" />
            </button>
            {activeDropdown === 'quem-somos' && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px]">
                <Link href="/certificacoes" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Certificações
                </Link>
                <Link href="/clientes" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Clientes
                </Link>
                <Link href="/parceiros" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Parceiros
                </Link>
              </div>
            )}
          </div>

          {/* SOLUÇÕES */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('solucoes')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-sm font-bold text-white transition-colors hover:text-primary flex items-center gap-1">
              SOLUÇÕES
              <ChevronDown className="size-3" />
            </button>
            {activeDropdown === 'solucoes' && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px]">
                <Link href="/segmentos" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Segmentos
                </Link>
                <Link href="/tecnologias" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Tecnologias
                </Link>
                <Link href="/desenvolvimento-web" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Desenvolvimento Web
                </Link>
                <Link href="/apps-mobile" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Apps Mobile
                </Link>
              </div>
            )}
          </div>

          {/* SERVIÇOS */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('servicos')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-sm font-bold text-white transition-colors hover:text-primary flex items-center gap-1">
              SERVIÇOS
              <ChevronDown className="size-3" />
            </button>
            {activeDropdown === 'servicos' && (
              <div className="absolute top-full left-0 mt-1 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg py-2 min-w-[200px]">
                <Link href="/consultoria" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Consultoria Digital
                </Link>
                <Link href="/suporte" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Suporte Técnico
                </Link>
                <Link href="/manutencao" className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors">
                  Manutenção
                </Link>
              </div>
            )}
          </div>

          {/* SOFTWARE */}
          <button
            onClick={() => {
              const element = document.getElementById('software');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-bold text-white transition-colors hover:text-primary"
          >
            SOFTWARE
          </button>

          {/* FINANCIAMENTO */}
          <button className="text-sm font-bold text-white transition-colors hover:text-primary">
            FINANCIAMENTO
          </button>

          {/* LOCAÇÃO */}
          <Link href="/locacao" className="text-sm font-bold text-white transition-colors hover:text-primary">
            LOCAÇÃO
          </Link>

          {/* CONTATO */}
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-bold text-white transition-colors hover:text-primary"
          >
            CONTATO
          </button>
        </nav>

        <Button
          className="rounded-full bg-primary hover:bg-primary/90 hidden md:flex"
          onClick={() => {
            const element = document.getElementById('contato');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Começar Agora
          <ChevronRight className="ml-1 size-4" />
        </Button>
        
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20" style={{ backgroundColor: 'hsl(var(--header-bg))' }}>
          <div className="container py-4 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-white mb-2">QUEM SOMOS</div>
              <Link href="/certificacoes" className="block text-sm text-white/80 hover:text-primary transition-colors ml-4" onClick={() => setMobileMenuOpen(false)}>
                Certificações
              </Link>
              <Link href="/clientes" className="block text-sm text-white/80 hover:text-primary transition-colors ml-4" onClick={() => setMobileMenuOpen(false)}>
                Clientes
              </Link>
              <Link href="/parceiros" className="block text-sm text-white/80 hover:text-primary transition-colors ml-4" onClick={() => setMobileMenuOpen(false)}>
                Parceiros
              </Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-bold text-white mb-2">SOLUÇÕES</div>
              <Link href="/segmentos" className="block text-sm text-white/80 hover:text-primary transition-colors ml-4" onClick={() => setMobileMenuOpen(false)}>
                Segmentos
              </Link>
              <Link href="/tecnologias" className="block text-sm text-white/80 hover:text-primary transition-colors ml-4" onClick={() => setMobileMenuOpen(false)}>
                Tecnologias
              </Link>
            </div>
            
            <button 
              className="block w-full text-left text-sm font-bold text-white transition-colors hover:text-primary" 
              onClick={() => {
                setMobileMenuOpen(false);
                const element = document.getElementById('servicos');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SERVIÇOS
            </button>
            
            <button 
              className="block w-full text-left text-sm font-bold text-white transition-colors hover:text-primary" 
              onClick={() => {
                setMobileMenuOpen(false);
                const element = document.getElementById('software');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SOFTWARE
            </button>
            
            <button className="block w-full text-left text-sm font-bold text-white transition-colors hover:text-primary">
              FINANCIAMENTO
            </button>
            
            <Link href="/locacao" className="block w-full text-left text-sm font-bold text-white transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              LOCAÇÃO
            </Link>
            
            <button 
              className="block w-full text-left text-sm font-bold text-white transition-colors hover:text-primary" 
              onClick={() => {
                setMobileMenuOpen(false);
                const element = document.getElementById('contato');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              CONTATO
            </button>
            
            <Button
              className="w-full bg-primary hover:bg-primary/90 mt-4"
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
      )}
    </header>
  )
}
