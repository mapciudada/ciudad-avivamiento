"use client";
import { Play, Youtube } from "lucide-react";
import Reveal from "./Reveal";

export default function MultimediaSection() {
  const channelUrl = "https://www.youtube.com/@PastorJecxonPerezOficial-1";

  // Videos recientes (Títulos reales encontrados en el canal)
  const videos = [
    { title: "Palabra Profética 2026", duration: "1:26:50", views: "Reciente" },
    { title: "El hombre de la mano seca", duration: "1:15:21", views: "Popular" },
    { title: "Disponibles pero no Dispuestos", duration: "1:14:27", views: "Mensaje" }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      
      {/* Grilla de Videos Destacados */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {videos.map((video, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <a 
              href={channelUrl} 
              target="_blank" 
              className="group block bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFE800]/50 transition-all duration-500"
            >
              {/* Miniatura Simulada con CSS */}
              <div className="aspect-video bg-white/5 relative flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play size={24} className="fill-white text-white ml-1" />
                </div>
                <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">
                  {video.duration}
                </span>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFE800] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-white/40 text-sm mt-2 flex items-center gap-2">
                  <Youtube size={14} /> Pastor Jecxon Pérez • {video.views}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Banner de Suscripción */}
      <Reveal>
        <div className="relative rounded-[2rem] overflow-hidden bg-[#FF0000] text-white text-center py-16 px-4">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="relative z-10">
            <Youtube size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Suscríbete a nuestro canal
            </h2>
            <p className="opacity-90 max-w-lg mx-auto mb-8 text-lg">
              No te pierdas ninguna transmisión en vivo y recibe una palabra fresca cada semana.
            </p>
            <a 
              href={channelUrl} 
              target="_blank" 
              className="inline-block bg-white text-[#FF0000] px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-transform"
            >
              Suscribirse Ahora
            </a>
          </div>
        </div>
      </Reveal>

    </section>
  );
}