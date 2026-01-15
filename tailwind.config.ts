import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Este es el color Cyan característico (#13C2C2)
        primary: "#13C2C2", 
        
        // Colores de fondo oscuros
        bg: "#050505",
        card: "#0f121a",
      },
      fontFamily: {
        // Asegura que las fuentes se carguen bien
        sans: ['var(--font-poppins)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;


