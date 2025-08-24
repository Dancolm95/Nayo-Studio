import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import NuestroMetodo from '@/components/NuestroMetodo';
import ContactForm from '@/components/ContactForm';
import React from 'react';
import Portfolio from '@/components/Portfolio';
import Clientes from '@/components/Clientes';
import Brochure from '@/components/Brochure';

export default function HomePage() {
  return (
    <div className="font-poppins text-black">
      <Hero />
      <Servicios />
      <NuestroMetodo />
      <Portfolio />
      <Clientes />
      <Brochure />
    </div>
  );
}
