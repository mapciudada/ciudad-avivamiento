"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Search } from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Eventos", href: "/eventos" },
    { name: "Oraciones", href: "/oraciones" },
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
          
          {/* LOGO - AHORA CON HOVER AMARILLO */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-[#FFE800]/20 group-hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <span className="text-sm font-black text-white group-hover:text-[#FFE800] transition-colors tracking-tighter">CA</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-white tracking-wide group-hover:text-[#FFE800] transition-colors">CIUDAD</span>
              <span className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase group-hover:text-white transition-colors">Avivamiento</span>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
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
                className="px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.name}
              </Link>
            ))}

            {/* BOTÓN EN VIVO */}
            <Link 
              href="/en-vivo" 
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all group ml-1"
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
            <button className="hidden sm:flex p-2.5 rounded-xl hover:bg-white/10 text-white/70 hover:text-white transition-colors">
              <Search size={20} />
            </button>

            {/* BOTÓN DAR - COLOR AMARILLO */}
            <Link 
              href="/donar" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE800] text-black font-bold text-sm hover:shadow-[0_0_20px_rgba(255,232,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Heart size={16} className="fill-black/20" />
              <span>Dar</span>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors lg:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            className="fixed inset-0 z-40 bg-[#050505] pt-32 pb-10 px-6 flex flex-col items-center justify-between lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 w-full relative z-10">
              {links.map((link, i) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="block text-4xl font-bold text-white hover:text-[#FFE800]"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              
              <Link
                href="/en-vivo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-2xl font-bold text-red-500 mt-6"
              >
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_red] animate-pulse" />
                En Vivo Ahora
              </Link>
            </nav>

            <div className="w-full space-y-6">
              {/* BOTÓN OFRENDAR MÓVIL AMARILLO */}
              <Link href="/donar" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#FFE800] text-black font-bold text-lg shadow-[0_0_20px_rgba(255,232,0,0.2)]">
                <Heart size={20} fill="currentColor" /> Ofrendar
              </Link>
              <p className="text-center text-white/30 text-xs uppercase tracking-widest">
                Ciudad Avivamiento © {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


