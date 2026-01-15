import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import SocialBar from "../components/SocialBar";

export default function Page() {
  return (
    <>
      <Nav />
      {/* CORREGIDO: selection:bg-[#FFE800] para selección de texto amarilla */}
      <main className="bg-[#050505] text-white selection:bg-[#FFE800] selection:text-black">
        
        {/* 1. PORTADA (HERO) */}
        <Hero />

        {/* SECCIÓN DE VIDEO ELIMINADA 
            Ahora la transmisión vive en su propia página /en-vivo 
        */}

        {/* 2. CONTACTO Y REDES */}
        <ContactSection />
        <SocialBar />

      </main>

      {/* FOOTER - PIE DE PÁGINA */}
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
              // CORREGIDO: Hover amarillo y subrayado amarillo
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