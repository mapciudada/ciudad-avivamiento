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
              <article 
                key={evento.id} 
                // Borde HOVER Amarillo
                className="group relative rounded-2xl overflow-hidden bg-[#0f121a] border border-white/10 hover:border-[#FFE800]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                {/* Imagen del evento */}
                <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden">
                  {evento.imagen && (
                    <Image 
                      src={evento.imagen} 
                      alt={evento.titulo} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  )}
                  {/* Etiqueta de fecha */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-white/10 text-white">
                    {evento.fecha}
                  </div>
                </div>

                <div className="p-6">
                  {/* Título HOVER Amarillo */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FFE800] transition-colors">
                    {evento.titulo}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-5 line-clamp-2">
                    {evento.descripcion}
                  </p>
                  
                  {/* Botón dinámico */}
                  <button className="text-sm font-bold flex items-center gap-1 text-white group-hover:text-[#FFE800] transition-colors">
                    Más detalles 
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}