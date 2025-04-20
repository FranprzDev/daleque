import { motion } from "framer-motion";
const podioItems = [{
  letter: "P",
  color: "from-[#9b87f5] to-[#7E69AB]",
  title: "Prioridad",
  desc: "Identificamos lo más importante para impulsar la transformación digital de cada cliente. Priorizamos soluciones que brinden valor real y rápido impacto."
}, {
  letter: "O",
  color: "from-[#33C3F0] to-[#6E59A5]",
  title: "Objetivo",
  desc: "Nuestro podio es la excelencia: lograr que las organizaciones crezcan, transformándose digitalmente y cumpliendo de forma sencilla todas las normativas."
}, {
  letter: "D",
  color: "from-[#D6BCFA] to-[#8E9196]",
  title: "Dificultades",
  desc: "Sabemos que el camino tiene retos: tecnología compleja, regulaciones cambiantes, integración de equipos. Transformamos obstáculos en oportunidades, acompañando todo el proceso."
}, {
  letter: "I",
  color: "from-[#7c93d6] to-[#9b87f5]",
  title: "Ideas",
  desc: "Constantemente generamos y escuchamos ideas: innovación colaborativa, soluciones creativas y participación de todo el equipo para romper barreras tecnológicas."
}, {
  letter: "O",
  color: "from-[#1A1F2C] to-[#33C3F0]",
  title: "Organización",
  desc: "Implementamos una organización ágil y adaptable. Definimos roles claros y fomentamos la colaboración, asegurando que cada integrante aporte al éxito colectivo."
}];
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
  return;
};
export default PodioSection;