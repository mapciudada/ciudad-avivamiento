import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import SocialBar from "../components/SocialBar";

export default function Page() {
  return (
    <>
      <Nav />
      {/* Configuración Global: 
          - Fondo negro profundo (#050505) 
          - Selección de texto en Amarillo Conexión (#FFE800)
      */}
      <main className="bg-[#050505] text-white selection:bg-[#FFE800] selection:text-black">
        
        {/* 1. PORTADA (HERO) - Primera impresión impactante */}
        <Hero />

        {/* 2. TESTIMONIOS - Aporta credibilidad y factor humano 
            Usa el diseño premium en Amarillo y Negro.
        */}
        <TestimonialsSection />

        {/* 3. CONTACTO Y UBICACIÓN - Facilita la llegada del visitante */}
        <ContactSection />
        
        {/* 4. SOCIAL BAR - Conexión con redes sociales */}
        <SocialBar />

      </main>

      {/* FOOTER - PIE DE PÁGINA PROFESIONAL CON CRÉDITOS */}
      <footer className="border-t border-white/10 py-12 bg-black text-center">
        <div className="container mx-auto px-4 space-y-3">
          <p className="text-white text-sm font-bold tracking-wide">
            Iglesia Ciudad Avivamiento.
          </p>
          <p className="text-white text-[10px] tracking-[0.2em] uppercase">
            Copyright {new Date().getFullYear()}. All Rights Reserved Dev By{" "}
            <a 
              href="https://www.motostorellc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFE800] transition-all duration-300 font-black underline decoration-[#FFE800] underline-offset-4"
            >
              Moto Store LLC
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}