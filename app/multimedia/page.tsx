import Nav from "../../components/Nav";
import MultimediaSection from "../../components/MultimediaSection";
import SocialBar from "../../components/SocialBar";
import { Youtube } from "lucide-react"; // ✅ Importamos el ícono

export default function MultimediaPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-32 pb-12">
        {/* Encabezado Multimedia */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Nuestros <span className="text-[#FFE800]">Medios</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto mb-8">
            Revive nuestras últimas prédicas, enseñanzas y momentos especiales de nuestra congregación.
          </p>

          {/* ✅ NUEVO: Botón directo al Canal Oficial */}
          <a 
            href="https://www.youtube.com/@PastorJecxonPerezOficial-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 text-white font-bold hover:bg-[#FF0000] hover:text-white hover:scale-105 transition-all duration-300 group"
          >
            <Youtube size={20} className="group-hover:fill-white transition-colors" />
            <span>Ver Canal Oficial</span>
          </a>
        </div>

        {/* Componente Multimedia */}
        <MultimediaSection />

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