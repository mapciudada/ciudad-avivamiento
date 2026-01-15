import { Play, Instagram, ExternalLink, Youtube, Link as LinkIcon } from "lucide-react";

export default function MultimediaSection() {
  
  // --- ENLACES REALES ---
  const urls = {
    ytChannel: "https://www.youtube.com/@PastorJecxonPerezOficial-1",
    igMinistry: "https://www.instagram.com/ciudadavivamiento/",
    igPastor: "https://www.instagram.com/profetajecxon/",
    tiktok: "https://www.tiktok.com/@profetajecxonperez"
  };

  // DATOS SIMULADOS (Enlazando a tus canales reales)
  const youtubeVideos = [
    {
      id: 1,
      title: "Mensaje Profético Reciente",
      date: "Estreno Semanal",
      thumbnail: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1000&auto=format&fit=crop", 
      url: urls.ytChannel // Lleva al canal para ver lo último
    },
    {
      id: 2,
      title: "Noche de Milagros y Sanidad",
      date: "Servicio en Vivo",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      url: urls.ytChannel
    },
    {
      id: 3,
      title: "Palabra de Dios para tu Vida",
      date: "Pastor Jecxon Perez",
      thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop",
      url: urls.ytChannel
    }
  ];

  const instagramPosts = [
    { 
      id: 1, 
      account: "Ministerio",
      caption: "¡Bienvenidos a Casa! #CiudadAvivamiento", 
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop",
      link: urls.igMinistry
    },
    { 
      id: 2, 
      account: "Profeta Jecxon",
      caption: "Dios tiene una palabra para ti hoy.", 
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop",
      link: urls.igPastor
    },
    { 
      id: 3, 
      account: "Ministerio",
      caption: "Un tiempo sobrenatural de adoración.", 
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop",
      link: urls.igMinistry
    },
    { 
      id: 4, 
      account: "Profeta Jecxon",
      caption: "Sígueme para más contenido profético.", 
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop",
      link: urls.igPastor
    },
  ];

  return (
    <section id="medios" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Luz Ambiental de Fondo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header de Sección */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
            Galería Multimedia
          </h2>
          <div className="mt-3 flex justify-center">
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold text-primary tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
                Pastor y Profeta Jecxon Perez
             </span>
          </div>
        </div>

        {/* --- YOUTUBE SECTION --- */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-500">
                <Youtube size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Canal Oficial</h3>
            </div>
            <a 
              href={urls.ytChannel} 
              target="_blank" 
              className="text-sm font-bold text-white/50 hover:text-red-500 transition-colors flex items-center gap-2"
            >
              Ver todos los videos <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {youtubeVideos.map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0f121a] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
              >
                {/* Thumbnail con efecto */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={v.thumbnail} 
                    alt={v.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Botón Play Flotante */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 text-white group-hover:bg-red-600 group-hover:border-red-600 transition-colors shadow-xl">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>

                {/* Contenido Texto */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {v.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-white/40 text-sm">
                    <span>{v.date}</span>
                    <span className="flex items-center gap-1 group-hover:text-white transition-colors text-xs uppercase font-bold tracking-wider">
                      Ir al canal <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- INSTAGRAM & TIKTOK SECTION --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-pink-600/10 text-pink-500">
              <Instagram size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Redes Sociales</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {instagramPosts.map((m) => (
              <a
                key={m.id}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#0f121a] border border-white/5 hover:border-white/20 transition-all"
              >
                <img 
                  src={m.img} 
                  alt="IG Post" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-primary text-[10px] uppercase font-bold tracking-wider mb-1">
                    {m.account}
                  </span>
                  <p className="text-white text-xs line-clamp-2 mb-2 font-medium">
                    {m.caption}
                  </p>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-bold">
                    <Instagram size={14} /> Ver perfil
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Botones de Redes Adicionales */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={urls.tiktok} 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f121a] border border-white/10 hover:border-[#FE2C55] hover:text-[#FE2C55] transition-all text-white font-semibold group"
            >
               {/* Icono TikTok Simple */}
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
               </svg>
               Síguenos en TikTok
            </a>
            
            <a 
              href={urls.igMinistry}
              target="_blank" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f121a] border border-white/10 hover:border-pink-500 hover:text-pink-500 transition-all text-white font-semibold"
            >
              <Instagram size={20} /> Instagram Ministerio
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}