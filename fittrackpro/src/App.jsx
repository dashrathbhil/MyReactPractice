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
  return (
    // Use Bootstrap flex utilities for the main layout
    <div className="d-flex min-vh-100 overflow-hidden">
      {/* Sidebar - keeping width inline for now or managed within Sidebar component */}
      <Sidebar />

      {/* Main Content Area - Use flex-grow-1 to take remaining space */}
      {/* Removed background and padding - these should be on the page content */}
      <main className="flex-grow-1" >
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>

      {/* Right Panel - keeping width, background, and border inline for now */}
      {/* minWidth: 0 is handled by Bootstrap's flex utilities implicitly */}
      <div style={{ width: '300px', background: '#f7fafd', borderLeft: '1px solid #e5e7eb', minHeight: '100vh' }}>
        <UserProfilePanel />
      </div>
    </div>
  );
}

export default App;
