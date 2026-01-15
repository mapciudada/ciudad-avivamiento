"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Search, Radio } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 LISTA ACTUALIZADA: Incluye Pastores y la nueva página de Testimonios
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Pastores", href: "/liderazgo" },    // ✅ Nueva página
    { name: "Testimonios", href: "/testimonios" }, // ✅ Actualizado (sin #)
    { name: "Eventos", href: "/eventos" },
    { name: "Multimedia", href: "/multimedia" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* LOGO - ESTILO PREMIUM AMARILLO */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-[#FFE800]/20 group-hover:border-[#FFE800]/50 group-hover:scale-105 transition-all duration-500 shadow-xl">
              <span className="text-base font-black text-white group-hover:text-[#FFE800] transition-colors tracking-tighter">CA</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl text-white tracking-wide group-hover:text-[#FFE800] transition-colors">CIUDAD</span>
              <span className="text-[10px] font-bold text-[#FFE800] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">Avivamiento</span>
            </div>
          </Link>

          {/* MENÚ DESKTOP - CRISTALISMO */}
          <nav 
            className={`hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
              isScrolled 
                ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl" 
                : "bg-white/5 backdrop-blur-sm border-white/5"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-semibold text-white/70 hover:text-[#FFE800] hover:bg-white/5 transition-all"
              >
                {link.name}
              </Link>
            ))}

            {/* SEPARADOR SUTIL */}
            <div className="w-px h-4 bg-white/10 mx-2" />

            {/* BOTÓN EN VIVO - INDICADOR DE PULSO */}
            <Link 
              href="/en-vivo" 
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white hover:text-red-500 transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              En Vivo
            </Link>
          </nav>

          {/* ACCIONES DERECHA */}
          <div className="flex items-center gap-3 relative z-50">
            <button className="hidden sm:flex p-2.5 rounded-xl hover:bg-[#FFE800]/10 text-white/70 hover:text-[#FFE800] transition-all">
              <Search size={20} />
            </button>

            {/* BOTÓN DAR - AMARILLO PRO */}
            <Link 
              href="/donar" 
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FFE800] text-black font-extrabold text-sm hover:shadow-[0_0_25px_rgba(255,232,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Heart size={16} className="fill-black/20" />
              <span>Dar</span>
            </Link>

            {/* BOTÓN MENÚ MÓVIL */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-all lg:hidden ${
                mobileMenuOpen 
                  ? "bg-[#FFE800] border-[#FFE800] text-black" 
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl pt-32 pb-10 px-6 flex flex-col items-center justify-between lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full">
              {links.map((link, i) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="block text-4xl font-black text-white hover:text-[#FFE800] transition-colors"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              
              <Link
                href="/en-vivo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-2xl font-bold text-red-500 mt-4 px-6 py-2 rounded-full border border-red-500/20 bg-red-500/5"
              >
                <Radio size={24} className="animate-pulse" />
                Transmisión en Vivo
              </Link>
            </nav>

            <div className="w-full max-w-sm space-y-6">
              <Link 
                href="/donar" 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#FFE800] text-black font-black text-xl shadow-lg"
              >
                <Heart size={24} fill="currentColor" /> Ofrendar Ahora
              </Link>
              <div className="text-center">
                <p className="text-white/20 text-xs uppercase tracking-[0.3em]">
                  © 2026 Ciudad Avivamiento
                </p>
                <p className="text-[#FFE800]/40 text-[10px] font-bold mt-1">
                  DEV BY MOTO STORE LLC
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


