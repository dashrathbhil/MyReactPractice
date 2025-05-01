import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Engineering Co.
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="nav-links mobile">
                <Link to="/" className={isActive('/')} onClick={closeMenu}>
                  Home
                </Link>
                <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
                  About
                </Link>
                <Link to="/services" className={isActive('/services')} onClick={closeMenu}>
                  Services
                </Link>
                <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>
                  Projects
                </Link>
                <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="nav-links desktop">
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')}>
            About
          </Link>
          <Link to="/services" className={isActive('/services')}>
            Services
          </Link>
          <Link to="/projects" className={isActive('/projects')}>
            Projects
          </Link>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 