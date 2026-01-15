"use client";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "100%" }: RevealProps) {
  return (
    <motion.div
      style={{ width }}
      initial={{ opacity: 0, y: 50 }} // Empieza: Invisible y 50px abajo
      whileInView={{ opacity: 1, y: 0 }} // Termina: Visible y en su sitio
      viewport={{ once: true, margin: "-50px" }} // Se activa una sola vez al hacer scroll
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración suave
    >
      {children}
    </motion.div>
  );
}

