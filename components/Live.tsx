import { Play, Instagram, ExternalLink, Youtube } from "lucide-react";

export default function Live() {
  // DATOS ESTÁTICOS "PREMIUM" (Para que se vea lleno y profesional sin APIs)
  const youtubeVideos = [
    {
      id: 1,
      title: "El Poder de la Resurrección",
      date: "12 Nov 2025",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop", 
      url: "https://youtube.com"
    },
    {
      id: 2,
      title: "Serie Identidad: Hijos vs Esclavos",
      date: "05 Nov 2025",
      thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop",
      url: "https://youtube.com"
    },
    {
      id: 3,
      title: "Adoración Sobrenatural en Vivo",
      date: "29 Oct 2025",
      thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop",
      url: "https://youtube.com"
    }
  ];

  const instagramPosts = [
    { id: 1, caption: "Gran tiempo ayer en casa", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop" },
    { id: 2, caption: "No te pierdas lo que viene", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop" },
    { id: 3, caption: "Dios es fiel", img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop" },
    { id: 4, caption: "Familia Avivamiento", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop" },
  ];

  return (
    <section id="medios" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Luz Ambiental de Fondo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header de Sección */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
            Nuestra Galería
          </h2>
          <div className="mt-3 flex justify-center">
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold text-primary tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
                Últimas Actualizaciones
             </span>
          </div>
        </div>

        {/* --- YOUTUBE SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-red-600/10 text-red-500">
              <Youtube size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Mensajes Recientes</h3>
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
                      Ver video <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- INSTAGRAM SECTION --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-pink-600/10 text-pink-500">
              <Instagram size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">En Instagram</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((m) => (
              <a
                key={m.id}
                href="https://instagram.com"
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
                  <p className="text-white text-xs line-clamp-2 mb-2 font-medium">
                    {m.caption}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold">
                    <Instagram size={14} /> Ver post
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}