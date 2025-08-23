// src/components/layout/Footer.tsx
import Image from 'next/image'
import logoBlackOnYellow from '@/assets/brand/logoSinFondo.png' // tu logo principal

export function Footer() {
  return (
    <footer className="bg-white text-gray-500">
      <div className="max-w-screen-lg mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        {/* Columna 1: Marca */}
        <div className="space-y-4">
          <a href="#hero" className="inline-flex items-center">
            <Image
              src={logoBlackOnYellow}
              alt="Nayo Studio"
              width={140}
              height={40}
              className="h-auto w-auto"
              priority
            />
          </a>
        </div>

        {/* Columna 2: Navegación */}
        <nav className="space-y-3">
          <h3 className="font-heading text-h3 md:text-h3-d">Navegación</h3>
          <ul className="space-y-2">
            <li><a href="#servicios" className="link">Servicios</a></li>
            <li><a href="#nuestro-metodo" className="link">Nuestro método</a></li>
            <li><a href="#portfolio" className="link">Portafolio</a></li>
            <li><a href="#contacto" className="link">Contacto</a></li>
          </ul>
        </nav>

        {/* Columna 3: Contacto / Brochure / RRSS */}
        <div className="space-y-3">
          <h3 className="font-heading text-h3 md:text-h3-d">Contacto</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://wa.me/51929520692?text=¡Hola! Quiero agendar una cita con Nayo Studio."
                target="_blank"
                className="btn btn-primary bg-brand  hover:bg-brand/90"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:hola.nayostudio@gmail.com" className="link">
                hola.nayostudio@gmail.com
              </a>
            </li>
          </ul>

          {/* RRSS (placeholders) */}
          <div className="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Instagram" className="link">Instagram</a>
            <a href="#" aria-label="Facebook" className="link">Facebook</a>
            <a href="#" aria-label="LinkedIn" className="link">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-lg mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-small opacity-80">
            © {new Date().getFullYear()} Nayo Studio. Todos los derechos reservados.
          </p>
          <p className="text-small opacity-80">
            La información proporcionada es confidencial y se usa solo para fines de contacto comercial.
          </p>
        </div>
      </div>
    </footer>
  )
}
