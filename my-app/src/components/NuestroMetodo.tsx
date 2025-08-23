import React from 'react'

export default function NuestroMetodo() {
  return (
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
  )
}