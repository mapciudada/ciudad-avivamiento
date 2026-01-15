"use client";
import { Youtube } from "lucide-react";
import Reveal from "./Reveal";
import Script from "next/script"; // ✅ Importante para cargar el script de TikTok

export default function MultimediaSection() {
  const channelUrl = "https://www.youtube.com/@PastorJecxonPerezOficial-1";
  
  // ✅ YOUTUBE AUTOMÁTICO
  const playlistUrl = "https://www.youtube.com/embed/videoseries?list=UULapQiaqismpfciBE4AQ6OA&autoplay=0&rel=0";

  // DATOS VISUALES PARA YOUTUBE (Respaldo)
  const recentVideos = [
    {
      title: "PALABRA PROFÉTICA 2026 | CONEXIÓN",
      thumbnail: "https://img.youtube.com/vi/nufU2oZwovk/hqdefault.jpg", 
      link: "https://www.youtube.com/watch?v=nufU2oZwovk",
      views: "Nuevo"
    },
    {
      title: "El hombre de la mano seca",
      thumbnail: "https://img.youtube.com/vi/hVSdCXYfC4k/hqdefault.jpg", 
      link: "https://www.youtube.com/watch?v=hVSdCXYfC4k", // Link real
      views: "Enseñanza"
    },
    {
      title: "Disponibles pero no Dispuestos",
      thumbnail: "https://img.youtube.com/vi/mqw6w6B9B7o/hqdefault.jpg", 
      link: channelUrl, // Link al canal
      views: "Mensaje"
    }
  ];

  return (
    <section className="container mx-auto px-4 mb-20">
      
      {/* --- SECCIÓN YOUTUBE (Automática) --- */}
      <Reveal>
        <div className="mb-4 flex items-center gap-2">
           <span className="bg-[#FF0000] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
             YouTube
           </span>
           <span className="text-white/40 text-xs">Transmisiones completas</span>
        </div>

        <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12 bg-[#0a0a0a]">
          <iframe 
            src={playlistUrl}
            title="Últimos Videos Ciudad Avivamiento"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>

      {/* --- SECCIÓN TIKTOK (AUTOMÁTICA OFICIAL) --- */}
      <div className="mb-24">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-black text-white">
              TikTok <span className="text-[#FFE800]">Live Feed</span>
            </h2>
            <span className="px-3 py-1 bg-[#25F4EE]/10 text-[#25F4EE] border border-[#25F4EE]/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Actualizado en Tiempo Real
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full flex justify-center bg-[#111] rounded-[2rem] border border-white/10 p-4 md:p-8 overflow-hidden relative">
             {/* Fondo decorativo */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#25F4EE] to-[#FE2C55]" />

             {/* 👇 CÓDIGO OFICIAL DE TIKTOK EMBED 
                 Esto carga el perfil del Pastor y muestra sus últimos videos automáticamente.
             */}
             <blockquote 
                className="tiktok-embed" 
                cite="https://www.tiktok.com/@profetajecxonperez" 
                data-unique-id="profetajecxonperez" 
                data-embed-type="creator" 
                style={{ maxWidth: "780px", minWidth: "288px", width: "100%" }} 
             > 
                <section> 
                   <a target="_blank" href="https://www.tiktok.com/@profetajecxonperez?refer=embed">
                      @profetajecxonperez
                   </a> 
                </section> 
             </blockquote> 
             
             {/* Script que hace la magia de cargar el contenido */}
             <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
          </div>
          
          <p className="text-center text-white/30 text-xs mt-4">
            * Carga directamente desde TikTok. Si no ves los videos, recarga la página.
          </p>
        </Reveal>
      </div>

    </section>
  );
}