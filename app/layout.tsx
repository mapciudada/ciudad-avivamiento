import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";
import Preloader from "../components/Preloader"; // 👈 1. IMPORTAMOS EL PRELOADER

// Configuración de fuentes
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

// ✅ Color del tema para móviles
export const viewport: Viewport = {
  themeColor: "#050505", 
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ciudad Avivamiento | Un ADN diferente",
  description: "Una iglesia bíblica, relevante y familiar. Levanta tu fe y transforma tu ciudad.",
  openGraph: {
    title: "Ciudad Avivamiento",
    description: "Una casa para tu fe y tu familia.",
    type: "website",
    url: "https://ciudadavivamiento.com",
    siteName: "Ciudad Avivamiento",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth"> 
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
        {/* 👈 2. AQUÍ COLOCAMOS LA PANTALLA DE CARGA PARA QUE SALGA PRIMERO */}
        <Preloader />

        {children}
      </body>
    </html>
  );
}

