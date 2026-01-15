import Nav from "../../components/Nav";
import SocialBar from "../../components/SocialBar";
import { Send } from "lucide-react"; 

export default function OracionesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] min-h-screen pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Encabezado */}
          <div className="text-center mb-12">
             <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Peticiones de <span className="text-[#13C2C2]">Oración</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Estamos interesados en ti y en tus necesidades, y creemos que Dios responderá toda petición que hagamos de común acuerdo. 
              Envía tu petición y junto a un equipo de intercesión estaremos orando por ella.
            </p>
            <div className="h-1 w-20 bg-[#13C2C2] mx-auto mb-6"></div>
            <p className="text-[#13C2C2] font-medium uppercase tracking-widest text-sm">
              Para enviar tu petición debes llenar el siguiente formulario:
            </p>
          </div>

          {/* Formulario Estilizado */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/50 text-sm mb-2 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#13C2C2] outline-none transition-all"
                    placeholder="Escribe tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-sm mb-2 ml-1">Teléfono / WhatsApp</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#13C2C2] outline-none transition-all"
                    placeholder="Tu número de contacto"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-sm mb-2 ml-1">Tu Petición de Oración</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#13C2C2] outline-none transition-all resize-none"
                  placeholder="Cuéntanos por qué debemos orar..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-[#13C2C2] text-black font-extrabold text-lg hover:shadow-[0_0_30px_rgba(19,194,194,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Enviar Petición
              </button>
            </form>
          </div>

        </div>
        <SocialBar />
      </main>

      {/* Footer con créditos de Moto Store LLC */}
      <footer className="border-t border-white/10 py-12 bg-black text-center">
        <p className="text-white text-sm font-bold">Iglesia Ciudad Avivamiento.</p>
        <p className="text-white text-[10px] uppercase mt-2">
          Copyright {new Date().getFullYear()}. All Rights Reserved Dev By{" "}
          <a href="https://www.motostorellc.com/" className="font-black underline decoration-[#13C2C2]">Moto Store LLC</a>
        </p>
      </footer>
    </>
  );
}