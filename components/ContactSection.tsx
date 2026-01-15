"use client";
import { MapPin, Mail } from "lucide-react"; 
import Reveal from "./Reveal";

export default function ContactSection() {
  // ✅ Enlace corregido para la Carrera 27 entre 34 y 35
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Carrera+27+entre+Calles+34+y+35+Barquisimeto";

  return (
    <section id="visitanos" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Fondo con brillo AMARILLO sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE800]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl">
            
            {/* Columna Izquierda: Formulario */}
            <div className="space-y-8 relative z-10">
              <h2 className="text-4xl font-bold text-white">Te esperamos</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input 
                    placeholder="Nombre" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FFE800] transition-colors placeholder:text-white/30" 
                  />
                  <input 
                    placeholder="Correo" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FFE800] transition-colors placeholder:text-white/30" 
                  />
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Petición de oración o mensaje..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none resize-none focus:border-[#FFE800] transition-colors placeholder:text-white/30" 
                />
                <button className="px-8 py-3 bg-[#FFE800] text-black font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,232,0,0.4)] hover:scale-105 transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Columna Derecha: Información */}
            <div className="space-y-8 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-center">
              
              {/* UBICACIÓN CLICKEABLE CORRECTA */}
              <a 
                href={mapLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-5 text-white group cursor-pointer hover:bg-white/5 p-4 -m-4 rounded-2xl transition-all duration-300"
                title="Abrir en Google Maps"
              >
                <div className="p-3 rounded-xl bg-[#FFE800]/10 border border-[#FFE800]/20 group-hover:bg-[#FFE800] group-hover:text-black transition-colors duration-300">
                  <MapPin size={24} className="text-[#FFE800] group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 group-hover:text-[#FFE800] transition-colors">Ubicación</h4>
                  <p className="text-white/60 leading-relaxed group-hover:text-white transition-colors">
                    Carrera 27, entre Calles 34 y 35<br/>Barquisimeto, Venezuela
                  </p>
                  <span className="text-xs text-[#FFE800] font-bold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    Clic para ver en mapa →
                  </span>
                </div>
              </a>

              {/* CORREO */}
              <div className="flex items-start gap-5 text-white group p-4 -m-4">
                <div className="p-3 rounded-xl bg-[#FFE800]/10 border border-[#FFE800]/20 group-hover:bg-[#FFE800]/20 transition-colors">
                  <Mail size={24} className="text-[#FFE800]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Escríbenos</h4>
                  <p className="text-white/60">info@ciudadavivamiento.com</p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}