"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  x: string;
  y: string;
  duration: number;
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Fondo de Partículas */}
          <div className="absolute inset-0 opacity-20">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-[#FFE800] rounded-full"
                initial={{ left: p.x, top: p.y, opacity: 0 }}
                animate={{ y: [0, -30], opacity: [0, 0.8, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          {/* CONTENEDOR LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, y: 20 }} // Entra un poco más grande
            animate={{ opacity: 1, scale: 1, y: 0 }}    // Se asienta con autoridad
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Halo de luz trasero (más sutil ahora para dar paso al drop-shadow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#FFE800]/5 blur-[100px] rounded-full" />

            {/* IMAGEN DEL LOGO MEJORADA */}
            <motion.img
              src="/logo-conexion.jpg" 
              alt="Conexión 2026"
              // 1. AUMENTO DE TAMAÑO (w-80 en móvil, w-[550px] en PC)
              className="w-80 md:w-[550px] h-auto object-contain relative z-20"
              // 2. SOMBRA DORADA DEFINIDA (Hace que el logo "salte" del fondo)
              style={{ filter: "drop-shadow(0 0 15px rgba(255,232,0,0.3))" }}
              // 3. ELIMINADA LA ANIMACIÓN DE "RESPIRACIÓN" PARA MAYOR SOLIDEZ
            />
            
            {/* Brillo Pasajero (sigue ahí para dar toque premium) */}
            <motion.div 
              className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-[#FFE800]/20 to-transparent w-full -skew-x-12"
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: "150%", opacity: 1 }}
              transition={{ 
                delay: 0.8,
                duration: 2.5, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Línea de carga */}
          <div className="mt-16 w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-[#FFE800]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
            />
          </div>
          
          {/* TEXTO FUERTE */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-[#FFE800] font-bold tracking-[0.4em] text-xs uppercase drop-shadow-[0_0_10px_rgba(255,232,0,0.5)]"
          >
            Preparando el Altar
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}