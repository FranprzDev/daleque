
import { motion } from "framer-motion";

const podioItems = [
  {
    letter: "P",
    color: "from-[#9b87f5] to-[#7E69AB]",
    title: "Prioridad",
    desc: "Identificamos lo más importante para impulsar la transformación digital de cada cliente. Priorizamos soluciones que brinden valor real y rápido impacto.",
  },
  {
    letter: "O",
    color: "from-[#33C3F0] to-[#6E59A5]",
    title: "Objetivo",
    desc: "Nuestro podio es la excelencia: lograr que las organizaciones crezcan, transformándose digitalmente y cumpliendo de forma sencilla todas las normativas.",
  },
  {
    letter: "D",
    color: "from-[#D6BCFA] to-[#8E9196]",
    title: "Dificultades",
    desc: "Sabemos que el camino tiene retos: tecnología compleja, regulaciones cambiantes, integración de equipos. Transformamos obstáculos en oportunidades, acompañando todo el proceso.",
  },
  {
    letter: "I",
    color: "from-[#7c93d6] to-[#9b87f5]",
    title: "Ideas",
    desc: "Constantemente generamos y escuchamos ideas: innovación colaborativa, soluciones creativas y participación de todo el equipo para romper barreras tecnológicas.",
  },
  {
    letter: "O",
    color: "from-[#1A1F2C] to-[#33C3F0]",
    title: "Organización",
    desc: "Implementamos una organización ágil y adaptable. Definimos roles claros y fomentamos la colaboración, asegurando que cada integrante aporte al éxito colectivo.",
  },
];

const orbitVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.5,
    y: 120 * Math.sin(i * 1.25),
    x: 120 * Math.cos(i * 1.25),
  }),
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.4 + i * 0.14,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
};

const PodioSection = () => {
  return (
    <section
      id="podio"
      className="relative py-32 sm:py-36 min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#221F26]/80 to-space-dark/90"
    >
      {/* Título PODIO vertical y orbitando */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center mb-12">
        {podioItems.map((item, i) => (
          <motion.div
            key={item.letter + i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={orbitVariants}
            className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center shadow-lg ring-2 ring-white/10`}
            style={{
              minWidth: "6rem",
              minHeight: "6rem",
            }}
          >
            <span className="text-4xl sm:text-6xl font-black text-white drop-shadow-xl select-none tracking-widest">
              {item.letter}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Descripciones por letra */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-14 max-w-6xl w-full px-4">
        {podioItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.12, duration: 0.7, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center p-4 sm:p-5 bg-white/5 rounded-xl glass-morphism min-h-[180px]"
          >
            <span className="text-lg sm:text-xl font-extrabold mb-2 text-gradient-primary">{item.title}</span>
            <p className="text-sm sm:text-base text-space-light/90 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PodioSection;

