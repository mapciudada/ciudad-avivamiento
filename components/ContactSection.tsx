import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

export default function ContactSection() {
  return (
    <section id="visitanos" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#13C2C2]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl">
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl font-bold text-white">Te esperamos</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input placeholder="Nombre" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#13C2C2]" />
                  <input placeholder="Correo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#13C2C2]" />
                </div>
                <textarea rows={4} placeholder="Petición de oración..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none focus:border-[#13C2C2]" />
                <button className="px-8 py-3 bg-[#13C2C2] text-black font-bold rounded-xl shadow-lg shadow-[#13C2C2]/20 hover:scale-105 transition-transform">
                  Enviar Petición
                </button>
              </form>
            </div>
            <div className="space-y-8 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-center">
              <div className="flex items-start gap-5 text-white">
                <MapPin size={28} className="text-[#13C2C2]" />
                <div><h4 className="font-bold text-xl">Ubicación</h4><p className="text-white/60">Carrera 27, Barquisimeto</p></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}