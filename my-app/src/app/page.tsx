import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import NuestroMetodo from '@/components/NuestroMetodo';
import ContactForm from '@/components/ContactForm';
import React from 'react';

export default function HomePage() {
  return (
    <div className="font-poppins text-black">
      <Hero />
      <Servicios />
      <NuestroMetodo />
      <ContactForm />
    </div>
  );
}
