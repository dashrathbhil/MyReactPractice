import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Coming soon...
      </motion.p>
    </div>
  );
};

export default Projects; 