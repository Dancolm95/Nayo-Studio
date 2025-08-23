import React from 'react'

export default function Servicios() {
  return (
    <section className="py-16 px-6 bg-[#faea6f]">
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
  )
}