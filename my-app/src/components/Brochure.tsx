import React from 'react';
import Image from 'next/image';
import logoNayo from '@/assets/brand/logoSinFondo.png';

export default function Brochure() {
  return (
    <section id="brochure" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo y título */}
        <div className="mb-8">
          <div className="inline-block mb-6">
            <Image
              src={logoNayo}
              alt="Nayo Studio"
              width={180}
              height={48}
              className="h-auto w-auto drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Contenido del brochure */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-black mb-3">Fotografía Profesional</h3>
            <ul className="text-black/70 space-y-2 text-sm">
              <li>• Fotografía de producto</li>
              <li>• Fotografía gastronómica</li>
              <li>• Fotografía corporativa</li>
              <li>• Edición y retoque</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold text-black mb-3">Video Content</h3>
            <ul className="text-black/70 space-y-2 text-sm">
              <li>• Videos promocionales</li>
              <li>• Contenido para redes</li>
              <li>• Videos de producto</li>
              <li>• Edición profesional</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-black mb-3">Social Media</h3>
            <ul className="text-black/70 space-y-2 text-sm">
              <li>• Gestión de redes</li>
              <li>• Campañas publicitarias</li>
              <li>• Contenido estratégico</li>
              <li>• Análisis de resultados</li>
            </ul>
          </div>
        </div>

        {/* Estadísticas destacadas */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-black mb-6">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-black mb-2">100%</div>
              <p className="text-black/80 text-sm">Satisfacción del cliente</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">24h</div>
              <p className="text-black/80 text-sm">Respuesta garantizada</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">∞</div>
              <p className="text-black/80 text-sm">Revisiones incluidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-black mb-2">🚀</div>
              <p className="text-black/80 text-sm">Resultados rápidos</p>
            </div>
          </div>
        </div>

        {/* CTA principal */}
        <div className="bg-white text-black rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            ¡Descarga Nuestro Brochure!
          </h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Obtén acceso completo a nuestro trabajo, precios y casos de éxito. 
            No spam, solo contenido valioso para tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/assets/Brochure_Nayo_2025.pdf" 
              download
              className="inline-flex items-center px-8 py-4 bg-white text-gray-500 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl"
            >
              📥 Brochure
            </a>
            
            <a 
              href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              💬 Consultar por WhatsApp
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            📧 También puedes escribirnos a: hola.nayostudio@gmail.com
          </p>
        </div>

        {/* Información adicional */}
        <div className="mt-12 text-black/70">
          <p className="text-sm">
            El portafolio incluye: Casos de éxito, servicios detallados, precios, 
            testimonios de clientes y ejemplos de nuestro trabajo más reciente.
          </p>
        </div>
      </div>
    </section>
  );
}
