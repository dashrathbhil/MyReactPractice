import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserProfilePanel from './components/UserProfilePanel';
import DashboardPage from './features/dashboard/DashboardPage';
import ReportsPage from './features/reports/ReportsPage';
import GoalsPage from './features/goals/GoalsPage';
import RemindersPage from './features/reminders/RemindersPage';
import SettingsPage from './features/settings/SettingsPage';
// import './App.css'; // We will replace App.css with Bootstrap or custom CSS

const LOCAL_STORAGE_SETTINGS_KEY = 'fittrackpro_settings';

function App() {
  const sidebarWidth = '250px';
  const rightPanelWidth = '300px';

  const [currentTheme, setCurrentTheme] = useState('light');

  const loadThemeFromSettings = useCallback(() => {
    try {
      const savedSettings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setCurrentTheme(settings.theme ?? 'light');
      } else {
        setCurrentTheme('light');
      }
    } catch (error) {
      console.error('Error loading theme from local storage:', error);
      setCurrentTheme('light');
    }
  }, []);

  useEffect(() => {
    loadThemeFromSettings();
  }, [loadThemeFromSettings]);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', currentTheme);

    return () => {
      document.body.removeAttribute('data-bs-theme');
    };
  }, [currentTheme]);

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
        zIndex: 1000,
        backgroundColor: currentTheme === 'dark' ? '#343a40' : '#fff',
        borderRight: `1px solid ${currentTheme === 'dark' ? '#454d55' : '#e5e7eb'}`,
        overflowY: 'auto',
        color: currentTheme === 'dark' ? '#dee2e6' : '#212529',
      }}>
        <Sidebar />
      </div>

      {/* Main Content Area - Takes remaining space, is scrollable, and has padding */}
      <main style={{
        flexGrow: 1,
        marginLeft: sidebarWidth,
        marginRight: rightPanelWidth,
        overflowY: 'auto',
        minHeight: '100vh',
        backgroundColor: currentTheme === 'dark' ? '#495057' : '#f8f9fa',
        padding: '1.5rem',
        color: currentTheme === 'dark' ? '#dee2e6' : '#212529',
      }}>
        {/* Content inside main area - No container needed now */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/settings" element={<SettingsPage onSettingsSaved={loadThemeFromSettings} />} />
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
        zIndex: 1000,
        backgroundColor: currentTheme === 'dark' ? '#343a40' : '#fff',
        borderLeft: `1px solid ${currentTheme === 'dark' ? '#454d55' : '#e5e7eb'}`,
        overflowY: 'auto',
        color: currentTheme === 'dark' ? '#dee2e6' : '#212529',
      }}>
        <UserProfilePanel />
      </div>
    </div>
  );
}

export default App;
