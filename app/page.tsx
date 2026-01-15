import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import MultimediaSection from "../components/MultimediaSection"; // 👈 AQUÍ ESTÁ EL CAMBIO (Usamos el estático)
import { Play, Calendar, MapPin, Clock, ArrowRight, Instagram, ChevronRight } from "lucide-react";

// --- COMPONENTES UI INTERNOS ---

// Título con degradado y subtítulo estilo "capsule"
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 inline-block pb-2">
        {title}
      </h2>
      {subtitle && (
        <div className="mt-3 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold text-primary tracking-[0.2em] uppercase shadow-lg backdrop-blur-md">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}

// Contenedor de sección con luces ambientales (Glows)
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      {/* Luz ambiental decorativa de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="container relative z-10">{children}</div>
    </section>
  );
}

// --- PÁGINA PRINCIPAL ---

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white selection:bg-primary selection:text-black">
        
        {/* Hero Section */}
        <Hero />

        {/* --- SECCIÓN LIVE (TEATRO DIGITAL) --- */}
        <section id="live" className="relative -mt-24 z-20 px-4 mb-20">
          <Reveal>
            <div className="container max-w-5xl mx-auto">
              <div className="group relative rounded-2xl p-1 bg-gradient-to-b from-primary/30 to-transparent shadow-[0_0_80px_-20px_rgba(19,194,194,0.3)]">
                {/* Glow interactivo */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl">
                  
                  {/* Etiqueta EN VIVO pulsante */}
                  <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wider text-white">EN VIVO</span>
                  </div>

                  {/* IFRAME YOUTUBE (Reemplaza el src con tu link real) */}
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/VIDEO_ID_AQUI" 
                    title="Transmisión Ciudad Avivamiento"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Panel inferior del video */}
                <div className="bg-[#0f121a] p-5 md:p-6 rounded-b-xl flex flex-wrap gap-4 items-center justify-between border-t border-white/5 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Celebración Dominical</h3>
                    <p className="text-sm text-white/50 flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> 
                      Transmitiendo desde Barquisimeto
                    </p>
                  </div>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95"
                  >
                    <Play size={18} fill="currentColor" /> Ir al canal
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* --- NOSOTROS --- */}
        <Section id="about">
          <SectionHeader title="Nuestra Casa" subtitle="ADN Y CULTURA" />
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Tarjeta Visión */}
              <div className="h-full p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors">Nuestra Visión</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Una iglesia <span className="text-white font-semibold">bíblica, relevante y familiar</span> que levanta discípulos de Jesús para transformar ciudades.
                </p>
                <ul className="space-y-4">
                  {[
                    "Centralidad de Cristo", 
                    "Restauración familiar", 
                    "Servicio a la ciudad"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#13C2C2]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tarjeta Horarios */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 flex items-center gap-6 hover:border-primary/30 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Clock size={28} />
                  </div>
                  <div>
                    <strong className="block text-xl text-white mb-1">Miércoles 5:00 PM</strong>
                    <span className="text-white/50 text-sm uppercase tracking-wide">Escuela de Discipulado</span>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 flex items-center gap-6 hover:border-primary/30 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <strong className="block text-xl text-white mb-1">Domingos 9:00 AM</strong>
                    <span className="text-white/50 text-sm uppercase tracking-wide">Gran Celebración</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* --- EVENTOS --- */}
        <Section id="eventos">
          <SectionHeader title="Próximos Eventos" subtitle="AGENDA" />
          <Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article key={i} className="group relative rounded-2xl overflow-hidden bg-[#0f121a] border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                  <div className="aspect-[4/3] bg-gradient-to-tr from-gray-800 to-gray-900 relative overflow-hidden">
                     {/* Efecto Hover Imagen */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold border border-white/10">
                      NOV 24
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Próximamente
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Conferencia {2025 + i}</h3>
                    <p className="text-white/60 text-sm mb-5 leading-relaxed">Un tiempo sobrenatural diseñado para transformar tu vida y tu familia.</p>
                    <a href="#visitanos" className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors">
                      Más información <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* --- MULTIMEDIA / GALERÍA (ESTÁTICA PREMIUM) --- */}
        <Reveal>
          {/* 👇 AQUÍ ESTÁ LA MAGIA: Usamos el componente que no pide Sanity */}
          <MultimediaSection />
        </Reveal>

        {/* --- CONTACTO / VISITA --- */}
        <Section id="visitanos">
          <Reveal>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 bg-[#0f121a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
              
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />

              <div className="space-y-8 relative z-10">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-3">Estamos esperando por ti</h2>
                  <p className="text-white/60 text-lg">Cualquiera sea tu historia, eres bienvenido aquí. Queremos saber de ti.</p>
                </div>

                <form className="space-y-5" action="/contact" method="post">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input name="nombre" placeholder="Tu nombre" className="premium-input" required />
                    <input name="email" type="email" placeholder="Tu correo electrónico" className="premium-input" required />
                  </div>
                  <textarea name="mensaje" rows={4} placeholder="¿Cómo podemos orar por ti o ayudarte?" className="premium-input resize-none" required />
                  <button type="submit" className="btn btn-primary w-full md:w-auto text-lg shadow-lg shadow-primary/20">
                    Enviar Mensaje <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              </div>

              <div className="space-y-8 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-center relative z-10">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-white/5 text-primary border border-white/5">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">Ubicación</h4>
                    <p className="text-white/60 leading-relaxed">Carrera 27 entre Calle 34 y 35<br/>Barquisimeto, Venezuela</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-white/5 text-primary border border-white/5">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">Síguenos</h4>
                    <a href="https://instagram.com/ciudadavivamiento" className="text-white/60 hover:text-primary transition-colors flex items-center gap-1">
                      @ciudadavivamiento <ArrowRight size={14} className="-rotate-45" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>
        </Section>
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-white/5 py-12 bg-black text-center relative z-10">
        <div className="container">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Ciudad Avivamiento. Hecho con excelencia para Dios.</p>
        </div>
      </footer>
    </>
  );
}