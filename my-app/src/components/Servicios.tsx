import React from 'react';

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Soluciones integrales para hacer crecer tu marca en el mundo digital
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Servicio 1 - Social Ads */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl mb-6 text-center">📱</div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Social Ads</h3>
              <p className="text-black/70 mb-6 text-center">
                Publicidad estratégica en redes sociales para maximizar tu ROI
              </p>
              <ul className="text-black/70 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Segmentación avanzada de audiencia
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Campañas personalizadas por plataforma
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Análisis de resultados en tiempo real
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Optimización continua de campañas
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio 2 - Video Content */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl mb-6 text-center">🎥</div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Video Content</h3>
              <p className="text-black/70 mb-6 text-center">
                Videos promocionales y de tendencia para generar impacto
              </p>
              <ul className="text-black/70 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Videos promocionales profesionales
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Contenido optimizado para redes
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Edición y post-producción
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Estrategias de distribución
                </li>
              </ul>
            </div>
          </div>

          {/* Servicio 3 - Fotografía */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="text-4xl mb-6 text-center">📸</div>
              <h3 className="text-2xl font-bold text-black mb-4 text-center">Fotografía</h3>
              <p className="text-black/70 mb-6 text-center">
                Fotografía profesional para reforzar tu identidad de marca
              </p>
              <ul className="text-black/70 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fotografía de producto premium
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fotografía gastronómica
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fotografía corporativa
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Edición y retoque profesional
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA para servicios */}
        <div className="text-center">
          <div className="bg-white text-black rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-gray-500 mb-6">
              Cada marca es única. Contáctanos para crear una estrategia a medida para tu negocio.
            </p>
            <a 
              href="https://wa.me/51929520692?text=¡Hola! Quiero consultar sobre los servicios de Nayo Studio."
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl"
            >
              💬 Consultar Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}