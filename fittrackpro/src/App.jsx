import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserProfilePanel from './components/UserProfilePanel';
import DashboardPage from './features/dashboard/DashboardPage';
import ReportsPage from './features/reports/ReportsPage';
import GoalsPage from './features/goals/GoalsPage';
import RemindersPage from './features/reminders/RemindersPage';
import SettingsPage from './features/settings/SettingsPage';
// import './App.css'; // We will replace App.css with Bootstrap or custom CSS

function App() {
  const sidebarWidth = '250px';
  const rightPanelWidth = '300px';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Sidebar - Fixed to the left */}
      <div style={{
        width: sidebarWidth,
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000, // Ensure sidebar is above content
        backgroundColor: '#fff', // Assuming a white background for sidebar
        borderRight: '1px solid #e5e7eb', // Add a subtle right border
        overflowY: 'auto', // Allow sidebar content to scroll if needed
      }}>
        <Sidebar />
      </div>

      {/* Main Content Area - Takes remaining space, is scrollable, and has padding */}
      <main style={{
        flexGrow: 1,
        marginLeft: sidebarWidth, // Space for fixed sidebar
        marginRight: rightPanelWidth, // Space for fixed right panel
        overflowY: 'auto', // Allow main content to scroll vertically
        minHeight: '100vh', // Ensure it takes at least full viewport height
        backgroundColor: '#f8f9fa', // Use a light background for main content area
        padding: '1.5rem', // Added padding here (corresponds to Bootstrap py-3 and px-3)
      }}>
        {/* Content inside main area - No container needed now */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>

      {/* Right Panel - Fixed to the right */}
      <div style={{
        width: rightPanelWidth,
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000, // Ensure panel is above content
        backgroundColor: '#fff', // Assuming a white background
        borderLeft: '1px solid #e5e7eb', // Add a subtle left border
        overflowY: 'auto', // Allow panel content to scroll if needed
      }}>
        <UserProfilePanel />
      </div>
    </div>
  );
}

export default App;
