import Nav from "../../components/Nav";
import AboutSection from "./AboutSection";
import SocialBar from "../../components/SocialBar";

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        {/* Encabezado de la página */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Sobre <span className="text-[#FFE800]">Nosotros</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Conoce nuestro corazón, nuestra historia y hacia dónde vamos.
          </p>
        </div>

        {/* Sección de contenido (Asegúrate de revisar que AboutSection no tenga colores viejos) */}
        <AboutSection />
        
        <SocialBar />
      </main>

      {/* Footer con créditos de Moto Store LLC */}
      <footer className="border-t border-white/10 py-12 bg-black text-center">
        <p className="text-white text-sm font-bold">Iglesia Ciudad Avivamiento.</p>
        <p className="text-white text-[10px] uppercase mt-2">
          Copyright {new Date().getFullYear()}. All Rights Reserved Dev By{" "}
          <a href="https://www.motostorellc.com/" className="font-black underline decoration-[#FFE800]">Moto Store LLC</a>
        </p>
      </footer>
    </>
  );
}