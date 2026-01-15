import { Play, Instagram, ExternalLink, Youtube, Facebook, Linkedin, Send, MessageCircle } from "lucide-react";
// Importamos datos reales
import { predicas } from "../data/predicas";

export default function MultimediaSection() {
  
  const urls = {
    ytChannel: "https://www.youtube.com/@PastorJecxonPerezOficial-1",
    igMinistry: "https://www.instagram.com/ciudadavivamiento/",
    tiktok: "https://www.tiktok.com/@profetajecxonperez",
    facebook: "https://www.facebook.com/ciudadavivamiento",
    whatsapp: "https://wa.me/TU_NUMERO",
    x: "https://twitter.com/ciudadavivamiento",
    telegram: "https://t.me/ciudadavivamiento",
    linkedin: "https://linkedin.com/in/ciudadavivamiento"
  };

  return (
    <section id="medios" className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- TÍTULO --- */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
            Galería Multimedia
          </h2>
          <div className="mt-3 flex justify-center">
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold text-[#13C2C2] tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
                Pastor y Profeta Jecxon Perez
             </span>
          </div>
        </div>

        {/* --- VIDEOS (DINÁMICOS) --- */}
        {/* Agregué mb-32 para dar mucho espacio antes de las redes */}
        <div className="mb-32"> 
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Youtube className="text-red-600" size={28} /> Mensajes Recientes
            </h3>
            <a href={urls.ytChannel} target="_blank" className="text-sm font-bold text-white/50 hover:text-[#13C2C2] transition-colors flex items-center gap-2">
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
                className="group relative bg-[#0f121a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#13C2C2]/30 transition-all duration-500 shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img 
                    src={predica.miniatura || `https://img.youtube.com/vi/${predica.youtubeId}/maxresdefault.jpg`} 
                    alt={predica.titulo} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#13C2C2] flex items-center justify-center text-black">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white group-hover:text-[#13C2C2] transition-colors line-clamp-2">
                    {predica.titulo}
                  </h4>
                  <p className="text-white/40 text-sm mt-2">{predica.fecha}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- REDES SOCIALES (MINIMALISTAS AL FONDO) --- */}
        <div className="flex flex-col items-center md:items-end pt-10 border-t border-white/5">
            <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase mb-8">
                SÍGUENOS EN REDES
            </h3>
            
            {/* CAMBIO CLAVE:
               text-white/20 = Gris muy oscuro (casi negro).
               hover:text-[#13C2C2] = Se ilumina Turquesa al pasar el mouse.
            */}
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
                {/* WhatsApp */}
                <a href={urls.whatsapp} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <MessageCircle size={26} strokeWidth={1.5} />
                </a>

                {/* Instagram */}
                <a href={urls.igMinistry} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <Instagram size={26} strokeWidth={1.5} />
                </a>

                {/* TikTok */}
                <a href={urls.tiktok} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>

                {/* Facebook */}
                <a href={urls.facebook} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <Facebook size={26} strokeWidth={1.5} />
                </a>

                {/* X */}
                <a href={urls.x} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>

                {/* Telegram */}
                <a href={urls.telegram} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <Send size={26} strokeWidth={1.5} />
                </a>

                {/* YouTube */}
                <a href={urls.ytChannel} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <Youtube size={28} strokeWidth={1.5} />
                </a>

                {/* LinkedIn */}
                <a href={urls.linkedin} target="_blank" className="text-white/20 hover:text-[#13C2C2] hover:scale-110 transition-all duration-300">
                    <Linkedin size={26} strokeWidth={1.5} />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}