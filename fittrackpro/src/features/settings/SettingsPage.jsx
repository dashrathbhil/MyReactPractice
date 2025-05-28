import React, { useState, useEffect } from 'react';

// Define a key for localStorage
const LOCAL_STORAGE_SETTINGS_KEY = 'fittrackpro_settings';

// Accept onSettingsSaved prop
function SettingsPage({ onSettingsSaved }) {
  // State for different settings
  // Initialize with default values
  const [userName, setUserName] = useState('dashrath bhil');
  const [location, setLocation] = useState('Ahmedabad, India');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [defaultGoalCategory, setDefaultGoalCategory] = useState('Fitness');
  const [showCompletedGoals, setShowCompletedGoals] = useState(true);
  const [enableReminders, setEnableReminders] = useState(true);
  const [defaultReminderTime, setDefaultReminderTime] = useState('09:00');
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('#007bff');

  // Load settings from localStorage on component mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        // Update state with loaded settings
        setUserName(settings.userName ?? 'dashrath bhil');
        setLocation(settings.location ?? 'Ahmedabad, India');
        setWeightUnit(settings.weightUnit ?? 'kg');
        setHeightUnit(settings.heightUnit ?? 'cm');
        setDistanceUnit(settings.distanceUnit ?? 'km');
        setDefaultGoalCategory(settings.defaultGoalCategory ?? 'Fitness');
        setShowCompletedGoals(settings.showCompletedGoals ?? true);
        setEnableReminders(settings.enableReminders ?? true);
        setDefaultReminderTime(settings.defaultReminderTime ?? '09:00');
        setTheme(settings.theme ?? 'light');
        setAccentColor(settings.accentColor ?? '#007bff');
      }
    } catch (error) {
      console.error('Error loading settings from local storage:', error);
      // Optionally reset to defaults or show an error message
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save settings to localStorage
  const handleSaveSettings = () => {
    const settingsToSave = {
      userName,
      location,
      weightUnit,
      heightUnit,
      distanceUnit,
      defaultGoalCategory,
      showCompletedGoals,
      enableReminders,
      defaultReminderTime,
      theme,
      accentColor,
    };
    try {
      localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settingsToSave));
      console.log('Settings saved.'); // Use console.log instead of alert
      // Call the callback function to notify App.jsx
      if (onSettingsSaved) {
          onSettingsSaved();
      }
    } catch (error) {
      console.error('Error saving settings to local storage:', error);
      alert('Failed to save settings.'); // Keep alert for save errors
    }
  };

  return (
    <div className="container-fluid py-4" style={{width: '600px'}}>
      <h2>Settings</h2>
      <p className="text-muted">Manage your profile and dashboard preferences.</p>

      {/* User Profile Settings */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">User Profile</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
           {/* Add input for changing avatar here */}
           <div className="mb-3">
               <label htmlFor="avatarUpload" className="form-label">Change Avatar</label>
               <input className="form-control" type="file" id="avatarUpload" />
           </div>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="weightUnit" className="form-label">Weight Unit</label>
              <select
                className="form-select"
                id="weightUnit"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="heightUnit" className="form-label">Height Unit</label>
              <select
                className="form-select"
                id="heightUnit"
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
              >
                <option value="cm">cm</option>
                <option value="inches">inches</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="distanceUnit" className="form-label">Distance Unit</label>
              <select
                className="form-select"
                id="distanceUnit"
                value={distanceUnit}
                onChange={(e) => setDistanceUnit(e.target.value)}
              >
                <option value="km">km</option>
                <option value="miles">miles</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Management Settings */}
       <div className="card mb-4 shadow-sm">
           <div className="card-header">Goal Management</div>
           <div className="card-body">
               <div className="mb-3">
                   <label htmlFor="defaultGoalCategory" className="form-label">Default Category for New Goals</label>
                   <select
                       className="form-select"
                       id="defaultGoalCategory"
                       value={defaultGoalCategory}
                       onChange={(e) => setDefaultGoalCategory(e.target.value)}
                   >
                       <option value="Fitness">Fitness</option>
                       <option value="Health">Health</option>
                       <option value="Work">Work</option>
                       <option value="Learning">Learning</option>
                       <option value="Other">Other</option>
                   </select>
               </div>
               <div className="form-check mb-3">
                   <input
                       className="form-check-input"
                       type="checkbox"
                       id="showCompletedGoals"
                       checked={showCompletedGoals}
                       onChange={(e) => setShowCompletedGoals(e.target.checked)}
                   />
                   <label className="form-check-label" htmlFor="showCompletedGoals">
                       Show Completed Goals in Lists
                   </label>
               </div>
               {/* Add options for managing goal categories, archiving/deleting */}
               <button className="btn btn-outline-secondary me-2">Manage Categories</button>
                <button className="btn btn-outline-secondary">Archive/Delete Goals</button>
           </div>
       </div>


      {/* Reminder and Notification Settings */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">Reminders and Notifications</div>
        <div className="card-body">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="enableReminders"
              checked={enableReminders}
              onChange={(e) => setEnableReminders(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="enableReminders">
              Enable Goal Reminders
            </label>
          </div>
          {enableReminders && (
             <div className="mb-3">
                 <label htmlFor="defaultReminderTime" className="form-label">Default Reminder Time</label>
                 <input
                     type="time"
                     className="form-control"
                     id="defaultReminderTime"
                     value={defaultReminderTime}
                     onChange={(e) => setDefaultReminderTime(e.target.value)}
                 />
             </div>
          )}
          {/* Add options for notification method, sounds */}
           <button className="btn btn-outline-secondary me-2">Notification Preferences</button>
            <button className="btn btn-outline-secondary">Sound Settings</button>
        </div>
      </div>

      {/* Dashboard Display Settings */}
       <div className="card mb-4 shadow-sm">
           <div className="card-header">Dashboard Display</div>
           <div className="card-body">
               <div className="mb-3">
                   <label htmlFor="defaultPageView" className="form-label">Default Page View</label>
                   <select className="form-select" id="defaultPageView">
                       <option>Dashboard</option>
                       <option>Goals</option>
                       <option>Reminders</option>
                       <option>Reports</option>
                   </select>
               </div>
               {/* Add options for customizing dashboard layout */}
                <button className="btn btn-outline-secondary">Customize Dashboard Layout</button>
           </div>
       </div>

      {/* Appearance Settings */}
       <div className="card mb-4 shadow-sm">
           <div className="card-header">Appearance</div>
           <div className="card-body">
               <div className="mb-3">
                   <label htmlFor="themeSelect" className="form-label">Theme</label>
                   <select
                       className="form-select"
                       id="themeSelect"
                       value={theme}
                       onChange={(e) => setTheme(e.target.value)}
                   >
                       <option value="light">Light Mode</option>
                       <option value="dark">Dark Mode</option>
                   </select>
               </div>
                <div className="mb-3">
                    <label htmlFor="accentColorPicker" className="form-label">Accent Color</label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        id="accentColorPicker"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        title="Choose your accent color"
                    />
                </div>
           </div>
       </div>


      {/* Data and Privacy Settings */}
       <div className="card mb-4 shadow-sm">
           <div className="card-header">Data and Privacy</div>
           <div className="card-body">
               {/* Add data export and account deletion options */}
               <button className="btn btn-outline-secondary me-2">Export Data</button>
                <button className="btn btn-danger">Delete Account</button>
           </div>
       </div>

        {/* Save Button */}
        <div className="mt-4">
            <button className="btn btn-primary" onClick={handleSaveSettings}>Save Settings</button>
        </div>
    </div>
  );
}

export default SettingsPage; 