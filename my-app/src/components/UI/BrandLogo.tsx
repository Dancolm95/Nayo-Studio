import Image from "next/image";
import logoPrincipal from "@/assets/logoPrincipal.png";
import logoFondoAnaranjado from "@/assets/logoFondoAnaranjado.png";
import logoFondoMelon from "@/assets/logoFondoMelon.png";
import logoSinFondo from "@/assets/logoSinFondo.png";
import logoSinFondoAnaranjado from "@/assets/logoSinFondoAnaranjado.png";

type Variant = | 'logo-principal' | 'logo-fondo-anaranjado' | 'logo-fondo-melon' | 'logo-sin-fondo' | 'logo-sin-fondo-anaranjado'

const logos = {
  'logo-principal': logoPrincipal,
  'logo-fondo-anaranjado': logoFondoAnaranjado,
  'logo-fondo-melon': logoFondoMelon,
  'logo-sin-fondo': logoSinFondo,
  'logo-sin-fondo-anaranjado': logoSinFondoAnaranjado,
}

export function BrandLogo ({ variant = 'logo-principal', width = 120 }: { variant?: Variant, width?: number, }) {
  return (
    <Image src={logos[variant]} alt="Nayo Studio" width={width} height={0} style={{ height: 'auto' }} priority/>
  )
}

