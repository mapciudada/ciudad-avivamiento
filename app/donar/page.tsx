import Nav from "../../components/Nav";
import Donar from "../../components/Donar"; // Reutilizamos tu componente de ofrendas
import SocialBar from "../../components/SocialBar";

export default function DonarPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        {/* Encabezado Espiritual */}
        <div className="container mx-auto px-4 mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            {/* COLOR ACTUALIZADO: Amarillo */}
            Generosidad y <span className="text-[#FFE800]">Bendición</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto italic">
            "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." 
            <span className="block mt-2 font-bold text-white/70">— 2 Corintios 9:7</span>
          </p>
        </div>

        {/* Componente de Donaciones */}
        <div className="relative z-10">
          <Donar />
        </div>

        <SocialBar />
      </main>

      {/* Footer con créditos */}
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
              // COLOR ACTUALIZADO: Hover amarillo y subrayado amarillo
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