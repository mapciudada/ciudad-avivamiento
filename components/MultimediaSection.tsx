"use client";
import { Youtube } from "lucide-react";
import Reveal from "./Reveal";

export default function MultimediaSection() {
  const channelUrl = "https://www.youtube.com/@PastorJecxonPerezOficial-1";
  
  // ✅ ID AUTOMÁTICO CONFIGURADO (No tocar)
  // Este código conecta directamente con la lista de "Subidas Recientes" del canal
  const uploadPlaylistId = "UULapQiaqismpfciBE4AQ6OA"; 

  return (
    <section className="container mx-auto px-4 mb-20">
      
      {/* PANTALLA DE ÚLTIMOS VIDEOS (AUTOMÁTICA) */}
      <Reveal>
        <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 bg-[#0a0a0a]">
          <iframe 
            // Esta URL carga la lista dinámica de videos recientes
            src={`https://www.youtube.com/embed?listType=playlist&list=${uploadPlaylistId}&autoplay=0&controls=1&showinfo=0&rel=0`}
            title="Últimos Videos Ciudad Avivamiento"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>

      {/* Banner de Suscripción */}
      <Reveal delay={0.2}>
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