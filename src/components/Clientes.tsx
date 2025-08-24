import React from 'react';

export default function Clientes() {
  return (
    <section id="clientes" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas que han confiado en nosotros para hacer crecer su presencia digital
          </p>
        </div>

        {/* Grid de logos de clientes */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {/* Cliente 1 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">🏢</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>

          {/* Cliente 2 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">🍕</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>

          {/* Cliente 3 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">💄</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>

          {/* Cliente 4 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">🏠</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>

          {/* Cliente 5 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">🚗</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>

          {/* Cliente 6 - Placeholder */}
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">💻</div>
              <p className="text-xs">Logo Cliente</p>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Testimonio 1 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-500 text-lg">👤</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Nombre del Cliente</h4>
                <p className="text-sm text-gray-600">Cargo / Empresa</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Testimonio del cliente sobre el trabajo realizado por Nayo Studio. 
              Resultados obtenidos y experiencia de trabajo."
            </p>
          </div>

          {/* Testimonio 2 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-500 text-lg">👤</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Nombre del Cliente</h4>
                <p className="text-sm text-gray-600">Cargo / Empresa</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Testimonio del cliente sobre el trabajo realizado por Nayo Studio. 
              Resultados obtenidos y experiencia de trabajo."
            </p>
          </div>

          {/* Testimonio 3 - Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-500 text-lg">👤</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Nombre del Cliente</h4>
                <p className="text-sm text-gray-600">Cargo / Empresa</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Testimonio del cliente sobre el trabajo realizado por Nayo Studio. 
              Resultados obtenidos y experiencia de trabajo."
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <p className="text-gray-600 text-sm">Proyectos Completados</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">30+</div>
            <p className="text-gray-600 text-sm">Clientes Satisfechos</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">95%</div>
            <p className="text-gray-600 text-sm">Tasa de Retención</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-black mb-2">2+</div>
            <p className="text-gray-600 text-sm">Años de Experiencia</p>
          </div>
        </div>

        {/* CTA para nuevos clientes */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Quieres ser nuestro próximo caso de éxito?</p>
          <a 
            href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
            target="_blank"
            className="inline-flex items-center px-8 py-4 text-black border-gray-100 border rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:text-white hover:bg-black transition-all duration-300 transform hover:scale-105"
          >
            💬 Agenda una Cita
          </a>
        </div>
      </div>
    </section>
  );
}
