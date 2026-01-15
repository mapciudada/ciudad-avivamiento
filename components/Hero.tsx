"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- FONDO CINEMATOGRÁFICO --- */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo con efecto Parallax suave (scale) */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="relative w-full h-full"
        >
          {/* Reemplaza '/hero.jpg' con tu foto real. 
              Si no tienes una, usa una de Unsplash temporalmente para probar */}
          <img
            src="/hero.jpg" 
            alt="Adoración en Ciudad Avivamiento"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Degradados para legibilidad perfecta */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="container relative z-10 text-center px-4">
        
        {/* Badge "Bienvenidos" Animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#13C2C2]"></span>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
            Domingos 9:00 AM
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white mb-4"
        >
          Bienvenido a <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            Ciudad
          </span>{" "}
          <span className="text-primary relative inline-block">
            Avivamiento
            {/* Subrayado decorativo */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtítulo Script (Manuscrito) */}
        <motion.div
          initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <p className="script text-4xl md:text-6xl text-white/90 drop-shadow-lg">
            Tu casa, nuestra casa
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Botón Primario (Planificar Visita) */}
          <a 
            href="#visitanos" 
            className="w-full sm:w-auto btn-primary group"
          >
            <MapPin size={20} className="mr-2 group-hover:animate-bounce" />
            Planifica tu visita
          </a>

          {/* Botón Secundario (Ver en línea) */}
          <a 
            href="#live" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
          >
            <Play size={20} className="mr-2 fill-current" />
            Ver en línea
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-widest uppercase">Descubre más</span>
        <ArrowRight size={20} className="rotate-90 animate-bounce" />
      </motion.div>

    </section>
  );
}



