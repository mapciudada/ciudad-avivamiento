import Nav from "../../components/Nav";
import MultimediaSection from "../../components/MultimediaSection";
import SocialBar from "../../components/SocialBar";

export default function MultimediaPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        {/* Encabezado Multimedia */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Nuestros <span className="text-[#13C2C2]">Medios</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Revive nuestras últimas prédicas, enseñanzas y momentos especiales de nuestra congregación.
          </p>
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
              className="text-white hover:text-[#13C2C2] transition-all duration-300 font-black underline decoration-white/20 underline-offset-4"
            >
              Moto Store LLC
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}