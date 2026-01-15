"use client";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonios } from "../data/testimonios";

export default function TestimonialsSection() {
  return (
    // 👇 AQUÍ AGREGUÉ EL ID
    <section id="testimonios" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Brillo de fondo */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFE800]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Vidas <span className="text-[#FFE800]">Transformadas</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No somos una iglesia perfecta, pero servimos a un Dios que hace cosas extraordinarias en personas comunes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t) => (
            <Reveal key={t.id}>
              <div className="group h-full p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#FFE800]/30 transition-all duration-500 relative">
                <Quote className="text-[#FFE800] opacity-20 mb-6 group-hover:opacity-100 transition-opacity" size={40} />
                
                <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                  "{t.frase}"
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-white group-hover:text-[#FFE800] transition-colors">
                    {t.nombre}
                  </h4>
                  <p className="text-[#FFE800] text-xs font-bold uppercase tracking-widest mt-1">
                    {t.rol}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}