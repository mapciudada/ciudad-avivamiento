import Nav from "../../components/Nav";
import SocialBar from "../../components/SocialBar";
import { Instagram, Mail, Facebook } from "lucide-react"; // ✅ Agregamos Facebook

export default function LiderazgoPage() {
  const lideres = [
    {
      nombre: "Pastor Jecxon Pérez",
      cargo: "Pastor Principal",
      bio: "Llamado a levantar una generación con un ADN diferente, apasionado por la enseñanza bíblica y la transformación de la ciudad.",
      imagen: "/pastor.jpg", // ⚠️ Recuerda guardar la foto en la carpeta public
      ig: "https://www.instagram.com/profetajecxon/",
      fb: "https://www.facebook.com/jeixonjose.perezybarra"
    },
    {
      nombre: "Pastora Andrea Borjas",
      cargo: "Pastora Principal",
      bio: "Dedicada a fortalecer el corazón de las familias y guiar a la congregación hacia una adoración genuina y profunda.",
      imagen: "/pastora.jpg", // ⚠️ Recuerda guardar la foto en la carpeta public
      ig: "https://www.instagram.com/borjasandrea/",
      fb: "https://www.facebook.com/andreaceleste.borjastorrealba.5"
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
                   {/* Imagen con fallback por si no la han subido aún */}
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
                    {/* Botón Facebook */}
                    {lider.fb && (
                      <a href={lider.fb} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-white hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                        <Facebook size={20} />
                      </a>
                    )}
                    
                    {/* Botón Instagram */}
                    {lider.ig && (
                      <a href={lider.ig} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-white hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] transition-all duration-300">
                        <Instagram size={20} />
                      </a>
                    )}

                    {/* Botón Correo */}
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