"use client";
import Link from "next/link"; 
import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* --- FONDO CINEMATOGRÁFICO --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <img
            src="/hero.jpg" 
            alt="Adoración en Ciudad Avivamiento"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="container relative z-10 text-center px-4">
        
        {/* Badge "Bienvenidos" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFE800] animate-pulse shadow-[0_0_10px_#FFE800]"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
            Domingos 9:00 AM
          </span>
        </motion.div>

        {/* Título Principal - TAMAÑO RESTAURADO */}
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
          <span className="text-[#FFE800] relative inline-block">
            Avivamiento
            {/* Subrayado decorativo */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE800] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </motion.h1>

        {/* Subtítulo Script */}
        <motion.div
          initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <p className="script text-4xl md:text-6xl text-white/90 drop-shadow-lg">
            Un ADN diferente. Tu casa, mi casa, nuestra casa
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="/nosotros" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFE800] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(255,232,0,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <MapPin size={20} className="group-hover:animate-bounce" />
            Planifica tu visita
          </Link>

          <Link 
            href="/en-vivo" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm gap-2"
          >
            <Play size={20} className="fill-current" />
            Ver en línea
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowRight size={24} className="rotate-90 animate-bounce" />
      </motion.div>

    </section>
  );
}



