"use client";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // ✅ AGREGADO: Ahora acepta un retraso opcional
}

export default function Reveal({ children, width = "100%", delay = 0 }: RevealProps) {
  return (
    <motion.div
      style={{ width }}
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: delay // ✅ AGREGADO: Aquí aplicamos el retraso
      }} 
    >
      {children}
    </motion.div>
  );
}

