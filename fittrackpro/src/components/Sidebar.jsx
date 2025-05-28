import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Goals', path: '/goals' },
  { name: 'Reports', path: '/reports' },
  { name: 'Reminders', path: '/reminders' },
  { name: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside style={{
      width: '220px',
      background: '#fff',
      borderRight: '1px solid #e5e7eb',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      minHeight: '100vh',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '2rem', color: '#2563eb' }}>
        FitTrackPro
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              color: isActive ? '#2563eb' : '#374151',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              background: isActive ? '#e0e7ff' : 'transparent',
              transition: 'background 0.2s',
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