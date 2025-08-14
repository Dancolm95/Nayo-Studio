import React from 'react';

export default function HomePage() {
  return (
    <div className="font-poppins text-black">
      {/* Hero Section */}
      <section className="bg-[#c6532f] text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">CONECTA, IMPACTA Y CRECE</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Una agencia digital que combina lo emocional y lo estratégico para que tu marca no pase desapercibida.
        </p>
      </section>

      {/* Servicios Section */}
      <section className="py-16 px-6 bg-[#f7e6d1]">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Social Ads</h3>
            <p>Publicidad en redes sociales, segmentación y construcción de público objetivo.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Video Content</h3>
            <p>Videos promocionales y de tendencia para generar impacto en tu audiencia.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fotografía</h3>
            <p>Fotografía de producto, gastronómica y de contenido para reforzar tu marca.</p>
          </div>
        </div>
      </section>

      {/* Nuestro Método Section */}
      <section className="py-16 px-6 bg-[#faea6f]">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Método</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Descubrimiento</h3>
            <p>Escuchamos tus ideas, analizamos tu marca y entendemos tus objetivos.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Estrategia</h3>
            <p>Diseñamos un plan de contenido visual y comunicación alineado a tu visión.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Producción</h3>
            <p>Creación de contenido con dirección de arte, fotografía y video.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="mb-6">Escríbenos y hablemos sobre cómo hacer crecer tu marca.</p>
        <button className="bg-[#c6532f] px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#c6532f] transition">
          Contáctanos
        </button>
      </section>
    </div>
  );
}
