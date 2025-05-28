import React, { useState, useEffect } from 'react';

const user = {
  name: 'dashrath bhil',
  location: 'Ahmedabad, India',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  weight: 50,
  height: 6.5,
  age: 20,
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
         backgroundColor: '#fff',
         flexShrink: 0
       }}>
    <span className="fw-bold">{percent}%</span>
  </div>
);

const UserProfilePanel = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = () => {
      try {
        const savedGoals = localStorage.getItem('fittrackpro_goals');
        if (savedGoals) {
          setGoals(JSON.parse(savedGoals));
        }
      } catch (error) {
        console.error('Error loading goals:', error);
      }
    };

    loadGoals();
    const interval = setInterval(loadGoals, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculateMonthlyProgress = () => {
    if (goals.length === 0) return 0;
    const totalProgress = goals.reduce((sum, goal) => sum + goal.percent, 0);
    return Math.round(totalProgress / goals.length);
  };

  const monthlyProgress = calculateMonthlyProgress();

  return (
    <div className="p-3">
      {/* User Profile */}
      <div className="bg-white rounded-4 p-3 shadow-sm text-center mb-3">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="rounded-circle mb-2" 
          style={{ width: '64px', height: '64px' }} 
        />
        <div className="fw-bold fs-5">{user.name}</div>
        <div className="text-muted small">{user.location}</div>
        <div className="d-flex justify-content-around mt-3">
          <div>
            <div className="fw-bold fs-5">{user.weight}kg</div>
            <div className="text-muted small">Weight</div>
          </div>
          <div>
            <div className="fw-bold fs-5">{user.height}</div>
            <div className="text-muted small">Height</div>
          </div>
          <div>
            <div className="fw-bold fs-5">{user.age}yrs</div>
            <div className="text-muted small">Age</div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="mb-3">
        <div className="fw-bold fs-5 mb-2">Your Goals</div>
        <div className="d-flex flex-column gap-2">
          {goals.map(goal => (
            <div 
              key={goal.id} 
              className="bg-white rounded-3 p-2 d-flex align-items-center justify-content-between shadow-sm"
            >
              <div className="d-flex align-items-center gap-2">
                <span className="fs-4">{goal.icon}</span>
                <div>
                  <div className="fw-bold small">{goal.label}</div>
                  <div className="text-muted small">{goal.value}</div>
                </div>
              </div>
              <ProgressCircle percent={goal.percent} color={goal.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Progress */}
      <div className="bg-white rounded-3 p-3 mb-3 text-center shadow-sm">
        <div className="fw-bold mb-2">Monthly Progress</div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="rounded-circle border-4 d-flex align-items-center justify-content-center"
               style={{
                 width: '70px',
                 height: '70px',
                 borderColor: '#f97316',
                 color: '#f97316',
                 fontSize: '20px',
                 backgroundColor: '#fff'
               }}>
            {monthlyProgress}%
          </div>
        </div>
        <div className="text-muted small mt-2">
          You have achieved <span className="text-warning fw-bold">{monthlyProgress}%</span> of your goal this month
        </div>
      </div>

      {/* Scheduled */}
      <div>
        <div className="fw-bold fs-5 mb-2">Scheduled</div>
        <div className="d-flex flex-column gap-2">
          {goals
            .filter(goal => new Date(goal.date) > new Date())
            .slice(0, 2)
            .map(goal => (
              <div 
                key={goal.id} 
                className="bg-white rounded-3 p-2 d-flex align-items-center justify-content-between shadow-sm"
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4">{goal.icon}</span>
                  <div>
                    <div className="fw-bold small">{goal.label}</div>
                    <div className="text-muted small">{goal.category}</div>
                  </div>
                </div>
                <div className="text-muted small">
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