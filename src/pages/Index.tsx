
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";
import { Target, Compass, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-space-dark">
      <Hero />
      
      <ContentSection
        title="Nuestra Visión"
        content="Ser el líder global en soluciones tecnológicas para la transformación digital empresarial, facilitando la adaptación y el cumplimiento normativo a través de innovación constante y excelencia operativa."
        icon={<Target size={48} />}
      />
      
      <ContentSection
        title="Nuestra Misión"
        content="Simplificar la complejidad de los procesos empresariales mediante soluciones tecnológicas integrales, permitiendo a las organizaciones focalizarse en su crecimiento mientras nosotros nos encargamos de mantenerlas al día con las regulaciones cambiantes."
        icon={<Compass size={48} />}
        inverse={true}
      />
      
      <ContentSection
        title="Nuestros Objetivos"
        content="Desarrollar soluciones innovadoras que simplifiquen la gestión empresarial, garantizar el cumplimiento normativo global, y potenciar la eficiencia operativa de nuestros clientes mediante la automatización inteligente y la transformación digital."
        icon={<Rocket size={48} />}
      />
    </div>
  );
};

export default Index;
