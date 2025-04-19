
import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  inverse?: boolean;
}

const ContentSection = ({ title, content, icon, inverse = false }: ContentSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-20 ${inverse ? 'bg-space-dark text-space-light' : 'bg-space-primary text-space-light'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${inverse ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-1">
            <div className="text-space-accent mb-6">{icon}</div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p className="text-lg leading-relaxed">{content}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-space-accent to-space-secondary opacity-20 blur-xl" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-space-accent to-space-secondary opacity-40 blur-lg" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-space-accent to-space-secondary opacity-60 blur-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentSection;
