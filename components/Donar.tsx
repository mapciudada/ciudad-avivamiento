import { Heart, CreditCard, Landmark, QrCode } from "lucide-react";
import Reveal from "./Reveal";

export default function Donar() {
  const metodos = [
    {
      titulo: "Pago Móvil",
      icon: <QrCode size={24} />,
      detalles: "Banco: Banesco (0134) \n CI: 12.345.678 \n Telf: 0412-1234567"
    },
    {
      titulo: "Transferencia Zelle",
      icon: <Landmark size={24} />,
      detalles: "Correo: donaciones@ciudadavivamiento.com \n A nombre de: Iglesia Ciudad Avivamiento"
    },
    {
      titulo: "PayPal / Tarjeta",
      icon: <CreditCard size={24} />,
      detalles: "Enlace directo: paypal.me/ciudadavivamiento"
    }
  ];

  return (
    <section id="donar" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Luz de fondo AMARILLA */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFE800]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <div className="mb-16">
            {/* Icono de Corazón con GLOW AMARILLO */}
            <div className="inline-flex p-3 rounded-2xl bg-[#FFE800]/10 text-[#FFE800] mb-6 shadow-[0_0_20px_rgba(255,232,0,0.2)]">
              <Heart size={32} fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Generosidad</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Tu ofrenda nos ayuda a seguir extendiendo el reino de Dios y transformando vidas en nuestra ciudad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {metodos.map((metodo, index) => (
              <div 
                key={index} 
                // Hover del borde en AMARILLO
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FFE800]/50 transition-all duration-500 group"
              >
                {/* Icono de método en AMARILLO */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#FFE800] mb-6 group-hover:scale-110 transition-transform">
                  {metodo.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-left">{metodo.titulo}</h3>
                <p className="text-white/50 text-sm text-left whitespace-pre-line leading-relaxed">
                  {metodo.detalles}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-white/30 text-sm italic">
              "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." <br /> 
              <span className="font-bold">2 Corintios 9:7</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}