"use client";
import { Youtube, Facebook, Instagram, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Script from "next/script";

export default function MultimediaSection() {
  const ytChannelUrl = "https://www.youtube.com/@PastorJecxonPerezOficial-1";
  const tiktokUrl = "https://www.tiktok.com/@profetajecxonperez";
  const fbUrl = "https://www.facebook.com/profile.php?id=61552362347946";
  const igUrl = "https://www.instagram.com/ciudadavivamiento/";
  
  const playlistUrl = "https://www.youtube.com/embed/videoseries?list=UULapQiaqismpfciBE4AQ6OA&autoplay=0&rel=0";

  return (
    <section className="container mx-auto px-4 mb-20">
      
      {/* ================= 1. YOUTUBE (Transmisiones) ================= */}
      <Reveal>
        <div className="mb-4 flex items-center gap-2">
           <span className="bg-[#FF0000] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
             YouTube
           </span>
           <span className="text-white/40 text-xs">Canal Oficial</span>
        </div>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8 bg-[#0a0a0a]">
          <iframe 
            src={playlistUrl}
            title="Últimos Videos Ciudad Avivamiento"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>
      
      <Reveal delay={0.2}>
        <div className="flex justify-center mb-24">
            <a href={ytChannelUrl} target="_blank" className="group flex items-center gap-3 bg-[#FF0000] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:scale-105 transition-all">
               <Youtube className="fill-white" /> Suscribirse al Canal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
        </div>
      </Reveal>

      {/* ================= 2. TIKTOK (Shorts) ================= */}
      <div className="mb-24">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-black text-white">
              TikTok <span className="text-[#FFE800]">Live</span>
            </h2>
            <span className="px-3 py-1 bg-[#25F4EE]/10 text-[#25F4EE] border border-[#25F4EE]/20 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse">
              Oficial
            </span>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-full flex justify-center bg-[#111] rounded-[2rem] border border-white/10 p-4 min-h-[400px] relative">
             <blockquote 
                className="tiktok-embed" 
                cite={tiktokUrl}
                data-unique-id="profetajecxonperez" 
                data-embed-type="creator" 
                style={{ maxWidth: "780px", minWidth: "288px", width: "100%" }} 
             > 
                <section> <a target="_blank" href={`${tiktokUrl}?refer=embed`}>@profetajecxonperez</a> </section> 
             </blockquote> 
             <Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
          </div>
        </Reveal>
      </div>

      {/* ================= 3. COMUNIDAD (FB & IG) - TARJETAS GEMELAS ================= */}
      <div className="grid lg:grid-cols-2 gap-6 mb-20">
        
        {/* --- TARJETA FACEBOOK PREMIUM --- */}
        <Reveal delay={0.1}>
          <a href={fbUrl} target="_blank" className="block h-[500px] rounded-[2rem] relative overflow-hidden group transition-all shadow-2xl">
            
            {/* Fondo Degradado Azul Facebook */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2] to-[#0b3a7a] opacity-90 transition-opacity" />
            
            {/* Textura sutil */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white z-10">
               
               {/* Logo Gigante y Limpio */}
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Facebook size={64} className="text-[#1877F2] fill-[#1877F2]" />
               </div>

               <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                 Facebook
               </h3>
               
               <p className="text-white/80 text-lg font-medium mb-10 max-w-xs">
                 Noticias, eventos y la comunidad de nuestra iglesia en tiempo real.
               </p>

               {/* Botón de Acción */}
               <div className="bg-white text-[#1877F2] px-8 py-3 rounded-full font-bold text-lg shadow-xl group-hover:bg-black group-hover:text-white transition-colors flex items-center gap-2">
                 Ir a la Página <ArrowRight size={18} />
               </div>

            </div>
          </a>
        </Reveal>

        {/* --- TARJETA INSTAGRAM PREMIUM --- */}
        <Reveal delay={0.2}>
          <a href={igUrl} target="_blank" className="block h-[500px] rounded-[2rem] relative overflow-hidden group transition-all shadow-2xl">
            
            {/* Fondo Degradado Instagram */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#405de6] via-[#fd1d1d] to-[#fcb045] opacity-90 transition-opacity" />
            
            {/* Textura sutil */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white z-10">
               
               {/* Logo Gigante y Limpio */}
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Instagram size={64} className="text-[#fd1d1d]" />
               </div>

               <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                 Instagram
               </h3>
               
               <p className="text-white/90 text-lg font-medium mb-10 max-w-xs">
                 Sigue nuestra galería oficial y conéctate con la visión de la casa.
               </p>

               {/* Botón de Acción */}
               <div className="bg-white text-[#d6249f] px-8 py-3 rounded-full font-bold text-lg shadow-xl group-hover:bg-black group-hover:text-white transition-colors flex items-center gap-2">
                 Ir al Perfil <ArrowRight size={18} />
               </div>

            </div>
          </a>
        </Reveal>

      </div>
    </section>
  );
}