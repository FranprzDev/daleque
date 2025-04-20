
import { motion } from "framer-motion";
import React from "react";

const podioItems = [
  {
    letter: "P",
    color: "from-[#9b87f5] to-[#7E69AB]",
    title: "Prioridad",
    desc: "Identificamos lo más importante para impulsar la transformación digital de cada cliente. Priorizamos soluciones que brinden valor real y rápido impacto."
  }, 
  {
    letter: "O",
    color: "from-[#33C3F0] to-[#6E59A5]",
    title: "Objetivo",
    desc: "Nuestro podio es la excelencia: lograr que las organizaciones crezcan, transformándose digitalmente y cumpliendo de forma sencilla todas las normativas."
  }, 
  {
    letter: "D",
    color: "from-[#D6BCFA] to-[#8E9196]",
    title: "Dificultades",
    desc: "Sabemos que el camino tiene retos: tecnología compleja, regulaciones cambiantes, integración de equipos. Transformamos obstáculos en oportunidades, acompañando todo el proceso."
  }, 
  {
    letter: "I",
    color: "from-[#7c93d6] to-[#9b87f5]",
    title: "Ideas",
    desc: "Constantemente generamos y escuchamos ideas: innovación colaborativa, soluciones creativas y participación de todo el equipo para romper barreras tecnológicas."
  }, 
  {
    letter: "O",
    color: "from-[#1A1F2C] to-[#33C3F0]",
    title: "Organización",
    desc: "Implementamos una organización ágil y adaptable. Definimos roles claros y fomentamos la colaboración, asegurando que cada integrante aporte al éxito colectivo."
  }
];

const orbitVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.5,
    y: 120 * Math.sin(i * 1.25),
    x: 120 * Math.cos(i * 1.25)
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
      damping: 12
    }
  })
};

const PodioSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-space-dark/90">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black text-space-light mb-20 tracking-wider"
        >
          PODIO Orbital
        </motion.h2>
        
        <div className="relative flex justify-center">
          {/* Central orbit circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-space-nebula-blue/20 to-space-nebula-purple/20 backdrop-blur-sm 
                     flex items-center justify-center z-10 border border-space-light/10"
          >
            <span className="text-space-light text-lg md:text-xl font-bold">PODIO</span>
          </motion.div>
          
          {/* Orbiting elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            {podioItems.map((item, i) => (
              <motion.div
                key={item.letter}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={orbitVariants}
                className={`absolute w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${item.color} 
                          shadow-lg flex flex-col items-center justify-center
                          cursor-pointer transition-transform hover:scale-110`}
                style={{
                  transform: `rotate(${i * (360 / podioItems.length)}deg) translateX(180px) rotate(-${i * (360 / podioItems.length)}deg)`
                }}
              >
                <span className="text-white text-3xl font-bold mb-1">{item.letter}</span>
                <span className="text-white text-xs font-medium">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Descriptions */}
        <div className="mt-32 max-w-3xl mx-auto space-y-8">
          {podioItems.map((item, i) => (
            <motion.div
              key={`desc-${item.letter}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex gap-4 items-start ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xl font-bold">{item.letter}</span>
              </div>
              <div>
                <h3 className="text-space-light text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodioSection;
