import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import MultimediaSection from "../components/MultimediaSection"; // 👈 Usamos el componente minimalista

import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  MessageCircle
} from "lucide-react";

// Datos dinámicos para los eventos
import { eventos } from "../data/eventos";

// --- COMPONENTES VISUALES ---

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
        {title}
      </h2>
      {subtitle && (
        <div className="mt-3 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold text-[#13C2C2] tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#13C2C2]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white selection:bg-[#13C2C2] selection:text-black">
        
        {/* 1. HERO */}
        <Hero />

        {/* 2. EN VIVO */}
        <section id="live" className="relative -mt-24 z-20 px-4 mb-20">
          <Reveal>
            <div className="container max-w-5xl mx-auto">
              <div className="group relative rounded-2xl p-1 bg-gradient-to-b from-[#13C2C2]/30 to-transparent shadow-[0_0_80px_-20px_rgba(19,194,194,0.3)]">
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl">
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wider text-white">EN VIVO</span>
                  </div>
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UC_TU_CANAL_ID" 
                    title="Transmisión"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 3. NOSOTROS */}
        <Section id="about">
          <SectionHeader title="Nuestra Casa" subtitle="ADN Y CULTURA" />
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-full p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#13C2C2]/50 transition-all duration-500 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-6">Nuestra Visión</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Una iglesia <span className="text-white font-semibold">bíblica, relevante y familiar</span> para transformar ciudades.
                </p>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#13C2C2]"></div> Centralidad de Cristo</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#13C2C2]"></div> Restauración Familiar</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 flex items-center gap-6">
                  <Clock size={28} className="text-[#13C2C2]" />
                  <div><strong className="block text-xl">Miércoles 5:00 PM</strong><span className="text-white/50 text-sm">Escuela de Discipulado</span></div>
                </div>
                <div className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 flex items-center gap-6">
                  <Calendar size={28} className="text-[#13C2C2]" />
                  <div><strong className="block text-xl">Domingos 9:00 AM</strong><span className="text-white/50 text-sm">Gran Celebración</span></div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 4. EVENTOS */}
        <Section id="eventos">
          <SectionHeader title="Próximos Eventos" subtitle="AGENDA" />
          <Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {eventos.map((evento) => (
                <article key={evento.id} className="group relative rounded-2xl overflow-hidden bg-[#0f121a] border border-white/10 hover:border-[#13C2C2]/40 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gray-900 relative">
                    {evento.imagen && <Image src={evento.imagen} alt={evento.titulo} fill className="object-cover" />}
                    <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-lg text-xs font-bold border border-white/10">{evento.fecha}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#13C2C2]">{evento.titulo}</h3>
                    <p className="text-white/60 text-sm mb-5 line-clamp-2">{evento.descripcion}</p>
                    <button className="text-sm font-bold flex items-center gap-1">Más detalles <ChevronRight size={16} /></button>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* 5. MULTIMEDIA (Aquí incluimos las prédicas y el SÍGUENOS EN REDES minimalista) */}
        <Reveal>
          <MultimediaSection />
        </Reveal>

        {/* 6. CONTACTO */}
        <Section id="visitanos">
          <Reveal>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl">
              <div className="space-y-8 relative z-10">
                <h2 className="text-4xl font-bold">Te esperamos</h2>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input placeholder="Nombre" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#13C2C2]" />
                    <input placeholder="Correo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#13C2C2]" />
                  </div>
                  <textarea rows={4} placeholder="Petición de oración..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#13C2C2]" />
                  <button className="px-8 py-3 bg-[#13C2C2] text-black font-bold rounded-xl shadow-lg shadow-[#13C2C2]/20">Enviar Petición</button>
                </form>
              </div>
              <div className="space-y-8 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <MapPin size={28} className="text-[#13C2C2]" />
                  <div><h4 className="font-bold text-xl">Ubicación</h4><p className="text-white/60">Carrera 27, Barquisimeto</p></div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      {/* FOOTER LIMPIO SIN BOTONES FLOTANTES */}
      <footer className="border-t border-white/5 py-12 bg-black text-center">
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} Iglesia Ciudad Avivamiento.</p>
      </footer>
    </>
  );
}