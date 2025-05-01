import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBuilding, FaCog, FaUsers, FaChartLine } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            Building Tomorrow's World Today
          </motion.h1>
          <motion.p
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            Leading the way in innovative engineering solutions for a sustainable future
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <motion.h2
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            Why Choose Us
          </motion.h2>
          <div className="features-grid">
            <motion.div
              className="feature-card"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <FaBuilding className="feature-icon" />
              <h3>Expert Engineering</h3>
              <p>Industry-leading expertise in structural, mechanical, and civil engineering</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
              <FaCog className="feature-icon" />
              <h3>Innovative Solutions</h3>
              <p>Cutting-edge technology and innovative approaches to complex challenges</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              <FaUsers className="feature-icon" />
              <h3>Client-Focused</h3>
              <p>Dedicated team committed to exceeding client expectations</p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.8 }}
            >
              <FaChartLine className="feature-icon" />
              <h3>Proven Track Record</h3>
              <p>Successful completion of diverse projects across multiple industries</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 