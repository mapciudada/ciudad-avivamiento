import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import SocialBar from "../../components/SocialBar";

export default function EnVivoPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        <div className="container mx-auto px-4 mb-10 text-center">
          {/* Badge de "EN VIVO" se mantiene ROJO por estándar visual */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-500 text-sm font-bold uppercase tracking-widest">Transmitiendo Ahora</span>
          </div>
           
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Servicio en <span className="text-[#FFE800]">Directo</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Únete a nuestra comunidad en línea y sé parte de lo que Dios está haciendo hoy.
          </p>
        </div>

        {/* Reproductor de Video Gigante con GLOW AMARILLO */}
        <section className="px-4 mb-20">
          <Reveal>
            <div className="container max-w-5xl mx-auto">
              {/* CAMBIO: Gradiente y Sombra cambiados a AMARILLO */}
              <div className="group relative rounded-2xl p-1 bg-gradient-to-b from-[#FFE800]/30 to-transparent shadow-[0_0_80px_-20px_rgba(255,232,0,0.3)]">
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UC_TU_CANAL_ID" 
                    title="Transmisión en Vivo Ciudad Avivamiento"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <SocialBar />
      </main>

      {/* Footer actualizado */}
      <footer className="border-t border-white/10 py-12 bg-black text-center">
        <div className="container mx-auto px-4 space-y-3">
          <p className="text-white text-sm font-bold">Iglesia Ciudad Avivamiento.</p>
          <p className="text-white text-[10px] uppercase">
            Copyright {new Date().getFullYear()}. All Rights Reserved Dev By{" "}
            <a href="https://www.motostorellc.com/" className="font-black underline decoration-[#FFE800]">Moto Store LLC</a>
          </p>
        </div>
      </footer>
    </>
  );
}