"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Search } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar la apariencia (Efecto Glass)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links de navegación (Ajustados a tus secciones)
  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#about" },
    { name: "Eventos", href: "#eventos" },
    { name: "Mensajes", href: "#medios" }, // Apunta a la nueva sección multimedia
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          
          {/* --- LOGO PREMIUM (CSS Puro - Carga instantánea) --- */}
          <a href="#" className="relative z-50 flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <span className="text-xl font-bold text-white group-hover:text-primary transition-colors">C</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-white tracking-wide group-hover:text-primary transition-colors">CIUDAD</span>
              <span className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase group-hover:text-white transition-colors">Avivamiento</span>
            </div>
          </a>

          {/* --- MENÚ DESKTOP (Cápsula Flotante) --- */}
          <nav 
            className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              isScrolled 
                ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl translate-y-0" 
                : "bg-white/5 backdrop-blur-sm border-white/5 translate-y-2"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Link Especial LIVE con Latido */}
            <a 
              href="#live" 
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all group ml-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              En Vivo
            </a>
          </nav>

          {/* --- ACCIONES DERECHA --- */}
          <div className="flex items-center gap-3 relative z-50">
            {/* Botón Buscar */}
            <button className="p-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <Search size={20} />
            </button>

            {/* Botón Dar (Resaltado) */}
            <a 
              href="#donar" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(19,194,194,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Heart size={16} className="fill-black/20" />
              <span>Dar</span>
            </a>

            {/* Botón Menú Móvil (Hamburguesa) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors lg:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MENÚ MÓVIL (Full Screen Overlay con Animación) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505] pt-32 pb-10 px-6 flex flex-col items-center justify-between lg:hidden"
          >
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Links Móviles */}
            <nav className="flex flex-col items-center gap-6 w-full relative z-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="text-4xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Botón Live Móvil */}
              <motion.a
                href="#live"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 text-2xl font-bold text-red-500 mt-6"
              >
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_red] animate-pulse" />
                En Vivo Ahora
              </motion.a>
            </nav>

            {/* Footer del Menú Móvil */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="w-full space-y-6 relative z-10"
            >
              <a 
                href="#donar" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-black font-bold text-lg shadow-[0_0_30px_rgba(19,194,194,0.3)]"
              >
                <Heart size={20} fill="currentColor" /> Ofrendar
              </a>
              <p className="text-center text-white/30 text-xs uppercase tracking-widest">
                Ciudad Avivamiento © {new Date().getFullYear()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


