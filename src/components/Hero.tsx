import React from 'react';
import Image from 'next/image';
import logoPrincipal from '@/assets/brand/logoPrincipal.png';

export default function Hero() {
  return (
    <section id="hero" className="relative py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Logo */}

        {/* Título principal */}


        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Una agencia digital que combina lo <span className="text-yellow-400 font-semibold">emocional</span> y lo <span className="text-orange-400 font-semibold">estratégico</span> para que tu marca no pase desapercibida.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
            target="_blank"
            className="group inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            🚀 Iniciar Proyecto
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          
          <a 
            href="#servicios"
            className="group inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            📋 Ver Servicios
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">↓</span>
          </a>
        </div>

        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-gray-400 text-sm">Satisfacción</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24h</div>
            <p className="text-gray-400 text-sm">Respuesta</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
            <p className="text-gray-400 text-sm">Revisiones</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">🚀</div>
            <p className="text-gray-400 text-sm">Resultados</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}