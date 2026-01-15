import { Play, ExternalLink, Youtube } from "lucide-react";
import { predicas } from "../data/predicas";

export default function MultimediaSection() {
  const ytChannel = "https://www.youtube.com/@PastorJecxonPerezOficial-1";

  return (
    <section id="medios" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Youtube className="text-red-600" size={28} /> Mensajes Recientes
          </h3>
          <a 
            href={ytChannel} 
            target="_blank" 
            // Hover Amarillo
            className="text-sm font-bold text-white/50 hover:text-[#FFE800] transition-colors flex items-center gap-2"
          >
            Ir al canal <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {predicas.map((predica) => (
            <a
              key={predica.id}
              href={`https://www.youtube.com/watch?v=${predica.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              // Borde hover Amarillo
              className="group relative bg-[#0f121a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FFE800]/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img 
                  src={predica.miniatura || `https://img.youtube.com/vi/${predica.youtubeId}/maxresdefault.jpg`} 
                  alt={predica.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Botón de Play AMARILLO */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#FFE800] flex items-center justify-center text-black shadow-[0_0_20px_#FFE800]">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                {/* Título hover Amarillo */}
                <h4 className="text-lg font-semibold text-white group-hover:text-[#FFE800] transition-colors line-clamp-2">
                  {predica.titulo}
                </h4>
                <p className="text-white/40 text-sm mt-2">{predica.fecha}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}