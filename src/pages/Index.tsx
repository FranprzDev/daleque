import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";
import SpaceBackground from "../components/SpaceBackground";
import Footer from "../components/Footer";
import PodioSection from "../components/PodioSection";
import PodioPlan from "../components/PodioPlan";
import { Target, Compass, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-space-dark relative min-h-screen">
      <div className="absolute inset-0 bg-nebula-pattern bg-cover bg-center opacity-20 mix-blend-overlay" />
      <SpaceBackground />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <ContentSection
            title="Nuestra Visión"
            content="Ser el líder global en soluciones tecnológicas para la transformación digital empresarial, facilitando la adaptación y el cumplimiento normativo a través de innovación constante y excelencia operativa."
            icon={<Target size={48} />}
          />
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <ContentSection
            title="Nuestra Misión"
            content="Simplificar la complejidad de los procesos empresariales mediante soluciones tecnológicas integrales, permitiendo a las organizaciones focalizarse en su crecimiento mientras nosotros nos encargamos de mantenerlas al día con las regulaciones cambiantes."
            icon={<Compass size={48} />}
            inverse={true}
          />
        </motion.div>
        
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <ContentSection
            title="Nuestros Objetivos"
            content="Desarrollar soluciones innovadoras que simplifiquen la gestión empresarial, garantizar el cumplimiento normativo global, y potenciar la eficiencia operativa de nuestros clientes mediante la automatización inteligente y la transformación digital."
            icon={<Rocket size={48} />}
          />
        </motion.div>
      </motion.div>
      
      {/* Sección PODIO tipo planificación, vertical, especial */}
      <PodioPlan />

      {/* Sección PODIO visual/orbital actual */}
      <PodioSection />

      <Footer />
    </div>
  );
};

export default Index;
