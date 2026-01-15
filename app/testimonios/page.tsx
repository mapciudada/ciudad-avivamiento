import Nav from "../../components/Nav";
import TestimonialsSection from "../../components/TestimonialsSection";
import SocialBar from "../../components/SocialBar";

export default function TestimoniosPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-20">
        
        {/* Aquí cargamos la sección que ya tiene el título "Vidas Transformadas" */}
        <TestimonialsSection />

        {/* Versículo Bíblico como cierre elegante (al final) */}
        <div className="container mx-auto px-4 pb-24 text-center -mt-10 relative z-10">
          <p className="text-white/40 max-w-2xl mx-auto italic text-lg">
            "Y ellos le han vencido por medio de la sangre del Cordero y de la palabra del testimonio de ellos..." 
            <span className="block mt-3 font-bold text-[#FFE800] text-sm tracking-widest uppercase">— Apocalipsis 12:11</span>
          </p>
        </div>

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