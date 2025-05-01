import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
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

export default Contact; 