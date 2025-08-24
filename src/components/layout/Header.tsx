'use client'
import Image from 'next/image'
import { useState } from 'react'
import logoPrincipal from '@/assets/brand/logoSinFondo.png'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white text-black shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src={logoPrincipal}
            alt="Nayo Studio"
            width={120}
            height={30}
            className="h-auto w-auto"
            priority
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicios" className="text-gray-500 hover:text-black transition-colors">Servicios</a>
          <a href="#nuestro-metodo" className="text-gray-500 hover:text-black transition-colors">Nuestro método</a>
          <a href="#clientes" className="text-gray-500 hover:text-black transition-colors">Clientes</a>
          <a href="#portfolio" className="text-gray-500 hover:text-black transition-colors">Portafolio</a>
 
          <a
            href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
            target="_blank"
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded"
          >
            Agenda una cita
          </a>
        </nav>

        {/* Hamburguesa (mobile) */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-black transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Panel mobile */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#servicios" onClick={() => setOpen(false)} className="text-black hover:text-gray-700 transition-colors">Servicios</a>
            <a href="#nuestro-metodo" onClick={() => setOpen(false)} className="text-black hover:text-gray-700 transition-colors">Nuestro método</a>
            <a href="#portfolio" onClick={() => setOpen(false)} className="text-black hover:text-gray-700 transition-colors">Portafolio</a>
            <a href="/brochure-nayo-2025.pdf" download onClick={() => setOpen(false)} className="px-4 py-2 text-black hover:bg-black hover:text-white transition-colors rounded">
              Descargar portafolio
            </a>
            <a
              href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
              target="_blank"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded"
            >
              Agenda una cita
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
