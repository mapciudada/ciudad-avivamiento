"use client";
import { Youtube, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function MultimediaSection() {
  const channelUrl = "https://www.youtube.com/@PastorJecxonPerezOficial-1";
  
  // ✅ ID CONFIRMADO: UULapQiaqismpfciBE4AQ6OA
  // Usamos 'videoseries' que fuerza la actualización de la lista
  const playlistUrl = "https://www.youtube.com/embed/videoseries?list=UULapQiaqismpfciBE4AQ6OA&autoplay=0&rel=0";

  // Datos reales actualizados manualmente como respaldo visual
  const recentVideos = [
    {
      title: "PALABRA PROFÉTICA 2026 | CONEXIÓN",
      thumbnail: "https://img.youtube.com/vi/nufU2oZwovk/hqdefault.jpg", // Miniatura real
      link: "https://www.youtube.com/watch?v=nufU2oZwovk",
      views: "Nuevo"
    },
    {
      title: "El hombre de la mano seca",
      thumbnail: "https://img.youtube.com/vi/hVSdCXYfC4k/hqdefault.jpg", // Miniatura genérica o anterior
      link: "https://www.youtube.com/watch?v=hVSdCXYfC4k", // Link ejemplo
      views: "Enseñanza"
    },
    {
      title: "Disponibles pero no Dispuestos",
      thumbnail: "https://img.youtube.com/vi/mqw6w6B9B7o/hqdefault.jpg", // Miniatura genérica o anterior
      link: channelUrl,
      views: "Mensaje"
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      
      {/* SECCIÓN AUTOMÁTICA */}
      <Reveal>
        <div className="mb-4 flex items-center gap-2">
           <span className="bg-[#FFE800] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
             Videos Automáticos
           </span>
           <span className="text-white/40 text-xs">Se actualiza solo desde YouTube</span>
        </div>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 bg-[#0a0a0a]">
          <iframe 
            src={playlistUrl}
            title="Últimos Videos Ciudad Avivamiento"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>

      {/* GRILLA DE RESPALDO (VISUAL) */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {recentVideos.map((video, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <a 
              href={video.link} 
              target="_blank" 
              className="group block bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFE800]/50 transition-all duration-500"
            >
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                    <Play size={20} className="fill-white text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFE800] transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-white/40 text-xs mt-2 flex items-center gap-2">
                  <Youtube size={12} /> {video.views}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* BANNER SUSCRIPCIÓN */}
      <Reveal delay={0.2}>
        <div className="relative rounded-[2rem] overflow-hidden bg-[#FF0000] text-white text-center py-16 px-4">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="relative z-10">
            <Youtube size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Suscríbete a nuestro canal
            </h2>
            <a 
              href={channelUrl} 
              target="_blank" 
              className="inline-block bg-white text-[#FF0000] px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-transform mt-6"
            >
              Suscribirse Ahora
            </a>
          </div>
        </div>
      </Reveal>

    </section>
  );
}