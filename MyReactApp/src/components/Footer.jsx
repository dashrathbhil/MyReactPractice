import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Engineering Co.</h3>
          <p>Providing innovative engineering solutions for a better tomorrow.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <nav className="footer-links">
            <Link to="/services#structural">Structural Engineering</Link>
            <Link to="/services#mechanical">Mechanical Engineering</Link>
            <Link to="/services#electrical">Electrical Engineering</Link>
            <Link to="/services#civil">Civil Engineering</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>
              <FaPhone /> <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>
              <FaEnvelope /> <a href="mailto:info@engineeringco.com">info@engineeringco.com</a>
            </p>
            <p>
              <FaMapMarkerAlt /> 123 Engineering Street, Tech City, TC 12345
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Engineering Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 