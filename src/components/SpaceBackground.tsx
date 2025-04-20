
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal Comet */}
      <motion.div
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: "120vw",
          y: "120vh",
          transition: { 
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2
          }
        }}
        className="absolute"
      >
        <div className="relative">
          <Star size={48} className="text-space-accent rotate-45" />
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-space-accent via-space-accent/50 to-transparent blur-xl"
            animate={{
              opacity: [0.8, 0.3, 0.8],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Cohetes animados */}
      <motion.div
        initial={{ x: -100, y: "100vh" }}
        animate={{ 
          x: "120vw",
          y: -100,
          transition: { 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="absolute text-space-secondary/30"
      >
        <Rocket size={48} className="rotate-45" />
      </motion.div>
      
      <motion.div
        initial={{ x: "120vw", y: "70vh" }}
        animate={{ 
          x: -100,
          y: -100,
          transition: { 
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }
        }}
        className="absolute text-space-accent/30"
      >
        <Rocket size={32} className="-rotate-45" />
      </motion.div>

      {/* Exoplanetas */}
      <motion.div 
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-space-primary/30 to-space-secondary/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        style={{
          left: '15%',
          top: '20%'
        }}
      />

      <motion.div 
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-space-accent/20 to-space-dark/20 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: -360,
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }
        }}
        style={{
          right: '20%',
          bottom: '30%'
        }}
      />
    </div>
  );
};

export default SpaceBackground;
