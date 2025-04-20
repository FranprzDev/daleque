
import { motion } from "framer-motion";
import React from "react";

// Colores de la paleta espacial actual
const podioData = [
  {
    letter: "P",
    title: "Prioridad",
    description:
      "Detectamos lo fundamental: soluciones tecnológicas que realmente potencian y simplifican la transformación digital de nuestros clientes. Nuestra prioridad es acompañar y generar valor desde el minuto cero.",
    gradient: "from-[#9b87f5] to-[#7E69AB]",
    ring: "ring-[#9b87f5]/10"
  },
  {
    letter: "O",
    title: "Objetivo",
    description:
      "El objetivo es claro: que las organizaciones crezcan y evolucionen de manera segura, cumpliendo fácilmente con las normativas, a través de innovación y excelencia operativa.",
    gradient: "from-[#33C3F0] to-[#6E59A5]",
    ring: "ring-[#33C3F0]/10"
  },
  {
    letter: "D",
    title: "Dificultades",
    description:
      "Aceptamos los desafíos: la tecnología cambia, las regulaciones también. Convertimos esos obstáculos en oportunidades únicas para automatizar, integrar y asegurar el éxito de cada proyecto.",
    gradient: "from-[#D6BCFA] to-[#8E9196]",
    ring: "ring-[#8E9196]/10"
  },
  {
    letter: "I",
    title: "Ideas",
    description:
      "Fomentamos la creatividad: escuchamos ideas de todo el equipo y de nuestros clientes. Innovar juntos nos permite derribar barreras tecnológicas y evolucionar constantemente.",
    gradient: "from-[#7c93d6] to-[#9b87f5]",
    ring: "ring-[#7c93d6]/10"
  },
  {
    letter: "O",
    title: "Organización",
    description:
      "Trabajamos de manera ágil y colaborativa. Asignamos roles claros, promovemos la participación y aseguramos que cada integrante aporte al éxito colectivo y al crecimiento de dalequesosvos.",
    gradient: "from-[#1A1F2C] to-[#33C3F0]",
    ring: "ring-[#1A1F2C]/10"
  },
];

const PodioPlan = () => (
  <section
    id="podio-plan"
    className="relative z-10 w-full flex flex-col items-center py-20 sm:py-28 bg-gradient-to-b from-space-dark/90 to-[#191426]/90"
  >
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true, amount: 0.6 }}
      className="text-5xl md:text-6xl font-black text-space-light tracking-widest mb-12 drop-shadow-2xl select-none"
      style={{
        letterSpacing: '0.34em'
      }}
    >
      PODIO
    </motion.h2>

    <div className="flex flex-col gap-12 w-full max-w-lg mx-auto">
      {podioData.map((item, idx) => (
        <motion.div
          key={item.letter}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1 + idx * 0.13,
            type: "spring"
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex items-center gap-5 w-full"
        >
          <span
            className={`
              flex-shrink-0 flex items-center justify-center
              w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${item.gradient}
              shadow-lg ring-4 ${item.ring} text-white text-4xl sm:text-5xl font-extrabold
              select-none animate-fade-in
            `}
            style={{
              textShadow: "0px 6px 32px rgba(80,60,180,0.33)",
              letterSpacing: '0.18em'
            }}
          >
            {item.letter}
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-space-light mb-1 tracking-wide">
              {item.title}
            </span>
            <p className="text-base sm:text-lg text-white/90 leading-snug max-w-xs">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PodioPlan;
