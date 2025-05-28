import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Define localStorage key for settings
const LOCAL_STORAGE_SETTINGS_KEY = 'fittrackpro_settings';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Goals', path: '/goals' },
  { name: 'Reports', path: '/reports' },
  { name: 'Reminders', path: '/reminders' },
  { name: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  // State to hold the current theme
  const [currentTheme, setCurrentTheme] = useState('light');

  // Load theme from localStorage on component mount and when storage changes
  useEffect(() => {
    const loadTheme = () => {
      try {
        const savedSettings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
        if (savedSettings) {
          const settings = JSON.parse(savedSettings);
          setCurrentTheme(settings.theme ?? 'light');
        } else {
          // Default to light if no settings saved
          setCurrentTheme('light');
        }
      } catch (error) {
        console.error('Error loading theme in Sidebar:', error);
        // Fallback to default theme on error
        setCurrentTheme('light');
      }
    };

    loadTheme(); // Load theme initially

    // Optional: Add a listener for storage changes for real-time updates
    // This is a simple approach; a Context API or state management is better for complex apps
    const handleStorageChange = (event) => {
      if (event.key === LOCAL_STORAGE_SETTINGS_KEY) {
        loadTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };

  }, []); // Empty dependency array ensures this runs only once on mount


  return (
    <aside style={{
      width: '100%', // Take full width of its parent (the fixed div in App.jsx)
      // Background color based on theme
      backgroundColor: currentTheme === 'dark' ? '#343a40' : '#fff',
      // Border color based on theme (border is applied in App.jsx parent div)
      // borderRight: '1px solid #e5e7eb', // Removed, parent handles border
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      minHeight: '100vh', // Ensure it stretches vertically
      // Text color based on theme
      color: currentTheme === 'dark' ? '#dee2e6' : '#212529',
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginBottom: '2rem',
        // FitTrackPro text color based on theme
        color: currentTheme === 'dark' ? '#5b84ff' : '#2563eb', // Slightly different blue for dark mode
      }}>
        FitTrackPro
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              // NavLink text color based on theme and active state
              color: isActive
                ? (currentTheme === 'dark' ? '#fff' : '#2563eb') // White or blue when active
                : (currentTheme === 'dark' ? '#b0b4b8' : '#374151'), // Lighter gray or dark gray when inactive
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              // NavLink background based on theme and active state
              background: isActive
                ? (currentTheme === 'dark' ? '#007bff' : '#e0e7ff') // Blue or light blue when active
                : 'transparent', // Transparent when inactive
              transition: 'background 0.2s, color 0.2s', // Add transition for color
            })}
            end={item.path === '/'}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 