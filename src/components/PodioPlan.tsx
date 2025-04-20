
import { motion } from "framer-motion";
import React from "react";

// Nueva definición PODIO para tu empresa
const podioData = [
  {
    letter: "P",
    title: "Planificar",
    description:
      "Definimos estrategias claras, anticipando necesidades y definiendo metas concretas para que nuestros proyectos tecnológicos generen impacto real. En cada planificación priorizamos los objetivos del cliente y la innovación permanente.",
    gradient: "from-[#9b87f5] to-[#7E69AB]",
    ring: "ring-[#9b87f5]/10"
  },
  {
    letter: "O",
    title: "Organizar",
    description:
      "Estructuramos equipos y recursos de forma eficiente. Ordenamos la información y asignamos roles claros para que cada miembro aporte al avance colectivo, garantizando fluidez y rapidez en cada fase del proyecto.",
    gradient: "from-[#33C3F0] to-[#6E59A5]",
    ring: "ring-[#33C3F0]/10"
  },
  {
    letter: "D",
    title: "Dirigir",
    description:
      "Guiamos al equipo con liderazgo y empatía, inspirando compromiso y responsabilidad. Supervisamos objetivos y motivamos la excelencia en cada entrega, siempre alineados con los valores y la visión de nuestra empresa.",
    gradient: "from-[#D6BCFA] to-[#8E9196]",
    ring: "ring-[#8E9196]/10"
  },
  {
    letter: "I",
    title: "Integrar",
    description:
      "Unimos diferentes áreas, perspectivas y tecnologías para crear soluciones integrales. Fomentamos la colaboración y la escucha activa, asegurando un ambiente de trabajo donde la diversidad suma al éxito final.",
    gradient: "from-[#7c93d6] to-[#9b87f5]",
    ring: "ring-[#7c93d6]/10"
  },
  {
    letter: "O",
    title: "Control",
    description:
      "Monitoreamos avances y resultados en tiempo real, ajustando procesos para maximizar la calidad y la eficiencia. Analizamos riesgos y aplicamos mejoras continuas, garantizando que cada proyecto cumpla los estándares más altos.",
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
          key={item.letter + item.title}
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

