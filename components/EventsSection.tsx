import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { eventos } from "../data/eventos";

export default function EventsSection() {
  return (
    <section id="eventos" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
            Próximos Eventos
          </h2>
        </div>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {eventos.map((evento) => (
              <article key={evento.id} className="group relative rounded-2xl overflow-hidden bg-[#0f121a] border border-white/10 hover:border-[#13C2C2]/40 transition-all duration-300">
                <div className="aspect-[4/3] bg-gray-900 relative">
                  {evento.imagen && <Image src={evento.imagen} alt={evento.titulo} fill className="object-cover" />}
                  <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-xs font-bold border border-white/10">{evento.fecha}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#13C2C2]">{evento.titulo}</h3>
                  <p className="text-white/60 text-sm mb-5 line-clamp-2">{evento.descripcion}</p>
                  <button className="text-sm font-bold flex items-center gap-1">Más detalles <ChevronRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}