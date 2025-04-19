
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-space-dark/80 backdrop-blur-sm py-3 mt-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-space-light"
        >
          <p className="text-sm font-semibold">4P y Asociados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
