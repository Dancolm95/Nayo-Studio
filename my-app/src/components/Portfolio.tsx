import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Portafolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a otras marcas a crecer con nuestro contenido visual estratégico
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm">Imagen del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Fotografía</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Social Media</span>
            </div>
          </div>

          {/* Proyecto 2 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🎥</div>
                <p className="text-sm">Video del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Video</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Publicidad</span>
            </div>
          </div>

          {/* Proyecto 3 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🎨</div>
                <p className="text-sm">Diseño del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Diseño</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Branding</span>
            </div>
          </div>

          {/* Proyecto 4 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm">Campaña del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">Social Ads</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">Marketing</span>
            </div>
          </div>

          {/* Proyecto 5 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🍽️</div>
                <p className="text-sm">Fotografía del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Fotografía</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Gastronomía</span>
            </div>
          </div>

          {/* Proyecto 6 - Placeholder */}
          <div className="group cursor-pointer">
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-sm">Estrategia del proyecto</p>
                <p className="text-xs">(Pendiente de Nayo)</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Nombre del Proyecto</h3>
            <p className="text-gray-600 mb-3">Descripción breve del proyecto y resultados obtenidos</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">Estrategia</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">Consultoría</span>
            </div>
          </div>
        </div>

        {/* CTA para ver más proyectos */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Quieres ver más de nuestro trabajo?</p>
          <a 
            href="/assets/Brochure_Nayo_2025.pdf" 
            download
            className="inline-flex items-center px-8 py-4 text-black border-gray-100 border rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:text-white hover:bg-black transition-all duration-300 transform hover:scale-105"
          >
            📥 Descargar Portafolio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
