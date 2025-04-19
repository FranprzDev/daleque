
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        className="absolute text-space-blue/30"
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
        className="absolute text-space-red/30"
      >
        <Rocket size={32} className="-rotate-45" />
      </motion.div>

      {/* Exoplanetas */}
      <motion.div 
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          left: '15%',
          top: '20%'
        }}
      />

      <motion.div 
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
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
