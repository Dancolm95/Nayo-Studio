import React from 'react';

export default function NuestroMetodo() {
  return (
    <section id="nuestro-metodo" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Nuestro Método</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales para tu marca
          </p>
        </div>

        {/* Grid del método */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Paso 1 - Descubrimiento */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Descubrimiento</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Escuchamos tus ideas, analizamos tu marca y entendemos tus objetivos
              </p>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🔍</span>
                  Análisis de la competencia
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🎯</span>
                  Definición de objetivos
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">📊</span>
                  Estudio de tu audiencia
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">💡</span>
                  Identificación de oportunidades
                </li>
              </ul>
            </div>
          </div>

          {/* Paso 2 - Estrategia */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-yellow-200">
              <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-400 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Estrategia</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Diseñamos un plan de contenido visual y comunicación alineado a tu visión
              </p>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">📋</span>
                  Plan de contenido personalizado
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">🎨</span>
                  Dirección de arte y estilo
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">📅</span>
                  Cronograma de producción
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-600 mr-2">📈</span>
                  Métricas de éxito
                </li>
              </ul>
            </div>
          </div>

          {/* Paso 3 - Producción */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Producción</h3>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Creación de contenido con dirección de arte, fotografía y video
              </p>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">📸</span>
                  Sesiones fotográficas profesionales
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">🎥</span>
                  Grabación y edición de video
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✏️</span>
                  Diseño gráfico y branding
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✅</span>
                  Control de calidad
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Proceso visual */}
        <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 rounded-2xl p-8 mb-16">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Proceso Continuo de Mejora</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Nuestro método no termina con la entrega. Continuamos optimizando y mejorando 
              para asegurar que tu marca alcance su máximo potencial.
            </p>
          </div>
        </div>

        {/* CTA para el método */}
        <div className="text-center">
          <div className="bg-black text-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres conocer nuestro método en acción?
            </h3>
            <p className="text-gray-300 mb-6">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu marca.
            </p>
            <a 
              href="https://wa.me/51929520692?text=¡Hola! Quiero conocer el método de trabajo de Nayo Studio."
              target="_blank"
              className="inline-flex items-center px-8 py-4 text-white rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl"
            >
              🚀 Iniciar Proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}