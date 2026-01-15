import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";

// Configuración de fuentes (Añadí más pesos para tener negritas bonitas)
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins" 
});

const pacifico = Pacifico({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-script",
  display: "swap"
});

// ✅ Color del tema para móviles (Barra de estado)
export const viewport: Viewport = {
  themeColor: "#050505", // Cambiado a negro para que la barra del iPhone se fusione con la web
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ciudad Avivamiento | Tu Casa, Nuestra Casa",
  description: "Una iglesia bíblica, relevante y familiar. Levanta tu fe y transforma tu ciudad.",
  openGraph: {
    title: "Ciudad Avivamiento",
    description: "Una casa para tu fe y tu familia.",
    // images: ["/og_image_1200x630.png"], // Descomenta cuando tengas la imagen
    type: "website",
    url: "https://ciudadavivamiento.com",
    siteName: "Ciudad Avivamiento",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth"> 
      {/* 👆 'scroll-smooth' es vital para la navegación */}
      
      <body 
        className={`
          ${poppins.className} 
          ${pacifico.variable}
          bg-[#050505] text-white 
          antialiased 
          selection:bg-[#13C2C2] selection:text-black
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}

