// tailwind.config.ts
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
        // Reemplazamos el celeste/azul por el AMARILLO CONEXIÓN
        primary: "#FFE800", 
        secondary: "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;


