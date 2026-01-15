"use client";
import { Clock, Calendar, ShieldCheck } from "lucide-react";
import Reveal from "../../components/Reveal"; 

export default function AboutSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-white/70">Llevar el mensaje de esperanza a cada corazón.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#13C2C2]/10 border border-[#13C2C2]/20">
              <h3 className="text-3xl font-bold text-white mb-4">Horarios</h3>
              <div className="flex items-center gap-3 text-white">
                <Calendar className="text-[#13C2C2]" />
                <span>Domingos - 10:00 AM</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}