
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-space-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-primary via-space-dark to-space-dark opacity-80" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-space-light mb-6">
            DALEQUE SOSVOS
          </h1>
          <p className="text-xl md:text-2xl text-space-light/80 max-w-2xl mx-auto mb-8">
            Impulsando la transformación digital de tu empresa hacia nuevos horizontes
          </p>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-space-accent"
          >
            <Rocket size={64} />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-space-secondary/10">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
