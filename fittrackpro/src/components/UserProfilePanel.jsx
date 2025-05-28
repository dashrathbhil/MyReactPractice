import React, { useState, useEffect } from 'react';

// Define localStorage keys
const LOCAL_STORAGE_GOALS_KEY = 'fittrackpro_goals';
const LOCAL_STORAGE_SETTINGS_KEY = 'fittrackpro_settings';

// Static user details (values remain static, units will be dynamic)
const staticUser = {
  // These values are placeholders; ideally, they would also come from settings/data
  weight: 50,
  height: 165, // Changed height to cm for better example with units
  age: 20,
  // Avatar can also be a setting, but keeping this static for simplicity now
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

const goals = [
  {
    icon: '🏃‍♂️',
    label: 'Running',
    value: '70km/80km',
    percent: 79,
    color: '#3b82f6',
  },
  {
    icon: '😴',
    label: 'Sleeping',
    value: '50hrs/60hrs',
    percent: 60,
    color: '#f97316',
  },
  {
    icon: '🔥',
    label: 'Weight Loss',
    value: '70kg/100kg',
    percent: 60,
    color: '#6366f1',
  },
];

const scheduled = [
  {
    icon: '🧘‍♂️',
    title: 'Training - Yoga Class',
    type: 'Fitness',
    date: '22 Mar',
  },
  {
    icon: '🏊‍♂️',
    title: 'Training - Swimming',
    type: 'Fitness',
    date: '22 Mar',
  },
];

const ProgressCircle = ({ percent, color }) => (
  <div className="d-flex align-items-center justify-content-center rounded-circle border-4"
       style={{
         width: '48px',
         height: '48px',
         borderColor: color,
         color: color,
         backgroundColor: 'var(--bs-body-bg)',
         flexShrink: 0
       }}>
    <span className="fw-bold">{percent}%</span>
  </div>
);

const UserProfilePanel = () => {
  const [goals, setGoals] = useState([]);
  // State to hold user details and settings fetched from localStorage
  const [userProfile, setUserProfile] = useState({
    name: 'dashrath bhil',
    location: 'Ahmedabad, India',
    // Units will be managed separately or derived from settings
  });
  const [userSettings, setUserSettings] = useState({
    weightUnit: 'kg',
    heightUnit: 'cm',
    distanceUnit: 'km',
    // Include other settings if needed for display in the panel
  });

  // Load data from localStorage on component mount and periodically
  useEffect(() => {
    const loadData = () => {
      try {
        // Load Goals
        const savedGoals = localStorage.getItem(LOCAL_STORAGE_GOALS_KEY);
        if (savedGoals) {
          setGoals(JSON.parse(savedGoals));
        }

        // Load Settings
        const savedSettings = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
        if (savedSettings) {
          const settings = JSON.parse(savedSettings);
          // Update user profile display based on settings
          setUserProfile({
            name: settings.userName ?? 'dashrath bhil',
            location: settings.location ?? 'Ahmedabad, India',
            avatar: staticUser.avatar, // Using static avatar for now
            weight: staticUser.weight,
            height: staticUser.height,
            age: staticUser.age,
          });
          // Update units based on settings
          setUserSettings({
            weightUnit: settings.weightUnit ?? 'kg',
            heightUnit: settings.heightUnit ?? 'cm',
            distanceUnit: settings.distanceUnit ?? 'km',
          });
        } else {
             // If no settings saved, use default user profile and units
             setUserProfile({
                name: 'dashrath bhil',
                location: 'Ahmedabad, India',
                avatar: staticUser.avatar,
                weight: staticUser.weight,
                height: staticUser.height,
                age: staticUser.age,
             });
             setUserSettings({
                weightUnit: 'kg',
                heightUnit: 'cm',
                distanceUnit: 'km',
             });
        }

      } catch (error) {
        console.error('Error loading data from local storage:', error);
      }
    };

    loadData(); // Load data initially
    const interval = setInterval(loadData, 5000); // Refresh data periodically
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  const calculateMonthlyProgress = () => {
    if (goals.length === 0) return 0;
    const totalProgress = goals.reduce((sum, goal) => sum + goal.percent, 0);
    return Math.round(totalProgress / goals.length);
  };

  const monthlyProgress = calculateMonthlyProgress();

  // Helper function to format height based on unit
  const formatHeight = (heightCm, unit) => {
      if (unit === 'inches') {
          const totalInches = Math.round(heightCm / 2.54);
          const feet = Math.floor(totalInches / 12);
          const inches = totalInches % 12;
          return `${feet}'${inches}"`;
      }
      // Default to cm if unit is kg or something else unexpected
      // Also handle potential decimal places for cm if needed
      return `${heightCm}${userSettings.heightUnit}`; // Use the selected unit
  };

  // Helper function to format weight based on unit
   const formatWeight = (weightKg, unit) => {
       if (unit === 'lbs') {
           // Convert kg to lbs (1 kg = 2.20462 lbs)
           return `${(weightKg * 2.20462).toFixed(1)}${userSettings.weightUnit}`; // ToFixed for decimal places
       }
        // Default to kg if unit is cm or something else unexpected
       return `${weightKg}${userSettings.weightUnit}`; // Use the selected unit
   };


  return (
    <div className="p-3">
      {/* User Profile */}
      <div className="bg-body rounded-4 p-3 shadow-sm text-center mb-3">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="rounded-circle mb-2"
          style={{ width: '64px', height: '64px' }}
        />
        <div className="fw-bold fs-5 text-body">{userProfile.name}</div>
        <div className="small text-muted">{userProfile.location}</div>
        <div className="d-flex justify-content-around mt-3">
          <div>
            <div className="fw-bold fs-5 text-body">{formatWeight(userProfile.weight, userSettings.weightUnit)}</div>
            <div className="small text-muted">Weight</div>
          </div>
          <div>
            <div className="fw-bold fs-5 text-body">{formatHeight(userProfile.height, userSettings.heightUnit)}</div>
            <div className="small text-muted">Height</div>
          </div>
          <div>
            <div className="fw-bold fs-5 text-body">{userProfile.age}yrs</div>
            <div className="small text-muted">Age</div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="mb-3">
        <div className="fw-bold fs-5 mb-2 text-body">Your Goals</div>
        <div className="d-flex flex-column gap-2">
          {goals.map(goal => (
            <div
              key={goal.id}
              className="bg-body rounded-3 p-2 d-flex align-items-center justify-content-between shadow-sm"
            >
              <div className="d-flex align-items-center gap-2">
                <span className="fs-4" style={{ color: goal.color }}>{goal.icon}</span>
                <div>
                  <div className="fw-bold small text-body">{goal.label}</div>
                  <div className="small text-muted">{goal.value}</div>
                </div>
              </div>
              <ProgressCircle percent={goal.percent} color={goal.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Progress */}
      <div className="bg-body rounded-3 p-3 mb-3 text-center shadow-sm">
        <div className="fw-bold mb-2 text-body">Monthly Progress</div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="rounded-circle border-4 d-flex align-items-center justify-content-center"
               style={{
                 width: '70px',
                 height: '70px',
                 borderColor: '#f97316',
                 color: '#f97316',
                 fontSize: '20px',
                 backgroundColor: 'var(--bs-body-bg)'
               }}>
            {monthlyProgress}%
          </div>
        </div>
        <div className="small text-muted mt-2">
          You have achieved <span className="text-warning fw-bold">{monthlyProgress}%</span> of your goal this month
        </div>
      </div>

      {/* Scheduled (using goals filtered by date) */}
      <div>
        <div className="fw-bold fs-5 mb-2 text-body">Scheduled</div>
        <div className="d-flex flex-column gap-2">
          {goals
            .filter(goal => new Date(goal.date) > new Date())
            .slice(0, 2)
            .map(goal => (
              <div
                key={goal.id}
                className="bg-body rounded-3 p-2 d-flex align-items-center justify-content-between shadow-sm"
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4" style={{ color: goal.icon }}>{goal.icon}</span>
                  <div>
                    <div className="fw-bold small text-body">{goal.label}</div>
                    <div className="small text-muted">{goal.category}</div>
                  </div>
                </div>
                <div className="small text-muted">
                  {new Date(goal.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePanel; 