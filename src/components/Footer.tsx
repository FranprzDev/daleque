
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-space-dark/60 backdrop-blur-sm py-1 md:py-2 mt-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 0.5 }}
          className="text-center text-space-light"
        >
          <p className="text-xs md:text-sm font-normal opacity-70 tracking-widest">4P y Asociados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

