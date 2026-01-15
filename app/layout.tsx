import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";
import Preloader from "../components/Preloader"; 

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
  title: "Ciudad Avivamiento | Un ADN Diferente",
  description: "Una iglesia bíblica, relevante y familiar. Levanta tu fe y transforma tu ciudad.",
  openGraph: {
    title: "Ciudad Avivamiento",
    description: "Una ADN Diferente",
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
          /* CORREGIDO: Ahora el texto seleccionado es AMARILLO */
          selection:bg-[#FFE800] selection:text-black
          overflow-x-hidden
        `}
      >
        {/* PANTALLA DE CARGA */}
        <Preloader />

        {children}
      </body>
    </html>
  );
}

