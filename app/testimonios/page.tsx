import Nav from "../../components/Nav";
import TestimonialsSection from "../../components/TestimonialsSection";
import SocialBar from "../../components/SocialBar";

export default function TestimoniosPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        {/* Encabezado de la Página */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Vidas <span className="text-[#FFE800]">Transformadas</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto italic">
            "Y ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos..." 
            <span className="block mt-2 font-bold text-white/70">— Apocalipsis 12:11</span>
          </p>
        </div>

        {/* Reutilizamos la sección que ya tiene el diseño Pro */}
        <TestimonialsSection />

        <SocialBar />
      </main>

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