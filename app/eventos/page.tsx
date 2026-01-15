import Nav from "../../components/Nav";
import EventsSection from "../../components/EventsSection";
import SocialBar from "../../components/SocialBar";

export default function EventosPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            {/* CAMBIO: Color Amarillo Conexión */}
            Nuestra <span className="text-[#FFE800]">Agenda</span>
          </h1>
        </div>
        <EventsSection />
        <SocialBar />
      </main>

      {/* Footer actualizado con el color amarillo */}
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