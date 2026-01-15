"use client";
import { Clock, Calendar, ShieldCheck } from "lucide-react";
import Reveal from "../../components/Reveal"; 

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Tarjeta de Visión */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFE800]/30 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-white/70 leading-relaxed">
                Llevar el mensaje de esperanza a cada corazón, estableciendo una cultura de adoración y servicio que transforme nuestra ciudad.
              </p>
            </div>

            {/* Tarjeta de Horarios - COLOR ACTUALIZADO */}
            <div className="p-8 rounded-3xl bg-[#FFE800]/10 border border-[#FFE800]/20 hover:bg-[#FFE800]/20 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-white mb-4">Horarios</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-2 rounded-lg bg-[#FFE800]/20">
                    <Calendar className="text-[#FFE800]" size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-lg">Servicio Dominical</span>
                    {/* Corregido a 9:00 AM para coincidir con el Hero */}
                    <span className="text-white/60">Todos los Domingos - 9:00 AM</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="p-2 rounded-lg bg-[#FFE800]/20">
                    <ShieldCheck className="text-[#FFE800]" size={24} />
                  </div>
                  <div>
                    <span className="block font-bold text-lg">Escuela de Líderes</span>
                    <span className="text-white/60">Martes - 7:00 PM</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}