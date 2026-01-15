import Nav from "../../components/Nav";
import SocialBar from "../../components/SocialBar";
import { Instagram, Mail } from "lucide-react";

export default function LiderazgoPage() {
  const lideres = [
    {
      nombre: "Pastor Jecxon Pérez",
      cargo: "Pastor Principal",
      bio: "Llamado a levantar una generación con un ADN diferente, apasionado por la enseñanza bíblica y la transformación de la ciudad.",
      imagen: "/pastor.jpg", // Asegúrate de que la foto esté en public/pastor.jpg
      ig: "https://www.instagram.com/profetajecxonperez"
    },
    {
      nombre: "Pastora [Nombre]", // Aquí puedes poner el nombre de su esposa
      cargo: "Pastora Principal",
      bio: "Dedicada a fortalecer el corazón de las familias y guiar a la congregación hacia una adoración genuina y profunda.",
      imagen: "/pastora.jpg", // Asegúrate de que la foto esté en public/pastora.jpg
      ig: "https://www.instagram.com/ciudadavivamiento"
    }
  ];

  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Nuestros <span className="text-[#FFE800]">Pastores</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg italic">
              "Y os daré pastores según mi corazón, que os apacienten con ciencia y con inteligencia." 
              <span className="block mt-2 font-bold text-white/30 text-sm">— Jeremías 3:15</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {lideres.map((lider, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 mb-8 bg-white/5 shadow-2xl transition-all duration-500 group-hover:border-[#FFE800]/30">
                   <img 
                    src={lider.imagen} 
                    alt={lider.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="space-y-4 px-2 text-center md:text-left">
                  <span className="text-[#FFE800] font-bold uppercase tracking-[0.3em] text-[10px] bg-[#FFE800]/10 px-3 py-1 rounded-full">
                    {lider.cargo}
                  </span>
                  <h3 className="text-4xl font-bold text-white tracking-tight italic">{lider.nombre}</h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {lider.bio}
                  </p>
                  
                  <div className="flex justify-center md:justify-start gap-3 pt-4">
                    <a href={lider.ig} target="_blank" className="p-3 rounded-xl bg-white/5 text-white hover:bg-[#FFE800] hover:text-black transition-all duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="mailto:info@ciudadavivamiento.com" className="p-3 rounded-xl bg-white/5 text-white hover:bg-[#FFE800] hover:text-black transition-all duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <SocialBar />

      <footer className="border-t border-white/10 py-12 bg-black text-center">
        <div className="container mx-auto px-4 space-y-3">
          <p className="text-white text-sm font-bold">Iglesia Ciudad Avivamiento.</p>
          <p className="text-[#FFE800]/40 text-[10px] font-bold tracking-[0.2em] uppercase">
            Siembre realizada con excelencia por Moto Store LLC
          </p>
        </div>
      </footer>
    </>
  );
}