import React, { useState, useEffect } from 'react'

function GoalsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [goals, setGoals] = useState(() => {
    // Load goals from local storage on initial render
    try {
      const savedGoals = localStorage.getItem('fittrackpro_goals');
      return savedGoals ? JSON.parse(savedGoals) : [
        {
          id: 1,
          icon: '🏃‍♂️',
          label: 'Running',
          value: '70km/80km',
          percent: 79,
          color: '#3b82f6',
          date: '2024-03-15',
          category: 'Fitness',
          priority: 'High',
          reminder: '09:00',
          streak: 5,
          notes: 'Morning run in the park'
        },
        {
          id: 2,
          icon: '😴',
          label: 'Sleeping',
          value: '50hrs/60hrs',
          percent: 60,
          color: '#f97316',
          date: '2024-03-16',
          category: 'Health',
          priority: 'Medium',
          reminder: '22:00',
          streak: 3,
          notes: 'Aim for 8 hours of sleep'
        },
        {
          id: 3,
          icon: '🔥',
          label: 'Weight Loss',
          value: '70kg/100kg',
          percent: 60,
          color: '#6366f1',
          date: '2024-03-17',
          category: 'Fitness',
          priority: 'High',
          reminder: '07:00',
          streak: 7,
          notes: 'Track daily weight'
        },
      ];
    } catch (error) {
      console.error('Error loading goals from local storage:', error);
      return []; // Return empty array if loading fails
    }
  });
  const [editingGoal, setEditingGoal] = useState(null);
  const [newGoals, setNewGoals] = useState({
    Running: { value: '', unit: 'km', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
    Sleeping: { value: '', unit: 'hrs', category: 'Health', priority: 'Medium', reminder: '', notes: '' },
    'Weight Loss': { value: '', unit: 'kg', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
    Custom: { value: '', unit: '', category: 'Other', priority: 'Medium', reminder: '', notes: '' }
  });
  const [errors, setErrors] = useState({});
  const [showReminders, setShowReminders] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Categories and their colors
  const categories = {
    'Fitness': { color: '#3b82f6', icon: '💪' },
    'Health': { color: '#f97316', icon: '❤️' },
    'Work': { color: '#6366f1', icon: '💼' },
    'Learning': { color: '#10b981', icon: '📚' },
    'Other': { color: '#6b7280', icon: '🎯' }
  };

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Save goals to local storage whenever the goals state changes
  useEffect(() => {
    try {
      localStorage.setItem('fittrackpro_goals', JSON.stringify(goals));
    } catch (error) {
      console.error('Error saving goals to local storage:', error);
    }
  }, [goals]);

  // Check for due reminders
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      const dueReminders = goals.filter(goal => 
        goal.reminder === currentTime && 
        goal.date === now.toISOString().split('T')[0]
      );

      if (dueReminders.length > 0) {
        setShowReminders(true);
      }
    };

    const reminderInterval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(reminderInterval);
  }, [goals]);

  // Calculate daily progress
  const calculateDailyProgress = () => {
    const todayGoals = goals.filter(goal => goal.date === new Date().toISOString().split('T')[0]);
    if (todayGoals.length === 0) return 0;
    
    const totalProgress = todayGoals.reduce((sum, goal) => sum + goal.percent, 0);
    return Math.round(totalProgress / todayGoals.length);
  };

  // Calculate weekly progress
  const calculateWeeklyProgress = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    
    const weekGoals = goals.filter(goal => {
      const goalDate = new Date(goal.date);
      return goalDate >= startOfWeek && goalDate <= endOfWeek;
    });

    if (weekGoals.length === 0) return 0;
    
    const totalProgress = weekGoals.reduce((sum, goal) => sum + goal.percent, 0);
    return Math.round(totalProgress / weekGoals.length);
  };

  // Get upcoming goals
  const getUpcomingGoals = () => {
    const today = new Date();
    return goals
      .filter(goal => new Date(goal.date) > today)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
  };

  // Get category statistics
  const getCategoryStats = () => {
    const stats = {};
    Object.keys(categories).forEach(category => {
      const categoryGoals = goals.filter(goal => goal.category === category);
      const completed = categoryGoals.filter(goal => goal.percent === 100).length;
      const total = categoryGoals.length;
      stats[category] = {
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0
      };
    });
    return stats;
  };

  // Get streak statistics
  const getStreakStats = () => {
    const streaks = goals.map(goal => goal.streak);
    return {
      current: Math.max(...streaks, 0),
      average: Math.round(streaks.reduce((a, b) => a + b, 0) / streaks.length) || 0,
      longest: Math.max(...streaks, 0)
    };
  };

  const goalTypes = {
    'Running': {
      icon: '🏃‍♂️',
      color: '#3b82f6',
      validation: (value) => {
        const num = parseFloat(value);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      errorMessage: 'Please enter a valid distance (0-100 km)'
    },
    'Sleeping': {
      icon: '😴',
      color: '#f97316',
      validation: (value) => {
        const num = parseFloat(value);
        return !isNaN(num) && num >= 0 && num <= 24;
      },
      errorMessage: 'Please enter valid hours (0-24)'
    },
    'Weight Loss': {
      icon: '🔥',
      color: '#6366f1',
      validation: (value) => {
        const num = parseFloat(value);
        return !isNaN(num) && num >= 0 && num <= 200;
      },
      errorMessage: 'Please enter a valid weight (0-200 kg)'
    },
    'Custom': {
      icon: '🎯',
      color: '#10b981',
      validation: (value) => value.trim().length > 0,
      errorMessage: 'Please enter a value'
    }
  };

  function ProgressCircle({ percent, color }) {
    return (
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
  }

  function handleSaveGoals() {
    const newErrors = {};
    let hasErrors = false;

    // Validate all goals
    Object.entries(newGoals).forEach(([type, goal]) => {
      if (goal.value.trim()) {
        if (!goalTypes[type].validation(goal.value)) {
          newErrors[type] = goalTypes[type].errorMessage;
          hasErrors = true;
        }
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Create new goals for the selected date
    const dateString = selectedDate.toISOString().split('T')[0];
    const goalsToAdd = Object.entries(newGoals)
      .filter(([_, goal]) => goal.value.trim())
      .map(([type, goal]) => ({
        id: Date.now() + Math.random(),
        icon: goalTypes[type].icon,
        label: type,
        value: `${goal.value}${goal.unit}`,
        percent: 0,
        color: goalTypes[type].color,
        date: dateString,
        category: goal.category,
        priority: goal.priority,
        reminder: goal.reminder,
        streak: 0,
        notes: goal.notes
      }));

    setGoals([...goals, ...goalsToAdd]);
    setNewGoals({
      Running: { value: '', unit: 'km', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
      Sleeping: { value: '', unit: 'hrs', category: 'Health', priority: 'Medium', reminder: '', notes: '' },
      'Weight Loss': { value: '', unit: 'kg', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
      Custom: { value: '', unit: '', category: 'Other', priority: 'Medium', reminder: '', notes: '' }
    });
    setErrors({});
    setShowGoalModal(false);
  }

  function handleEditGoal(goal) {
    setEditingGoal(goal);
    const type = goal.label;
    const value = goal.value.split(goalTypes[type].unit)[0];
    setNewGoals({
      ...newGoals,
      [type]: { 
        value, 
        unit: goalTypes[type].unit,
        category: goal.category,
        priority: goal.priority,
        reminder: goal.reminder,
        notes: goal.notes
      }
    });
    setShowGoalModal(true);
  }

  function handleDeleteGoal(goalId) {
    setGoals(goals.filter(goal => goal.id !== goalId));
  }

  function handleUpdateProgress(goalId, newPercent) {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, percent: newPercent, streak: newPercent === 100 ? goal.streak + 1 : goal.streak }
        : goal
    ));
  }

  function Calendar() {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const hasGoal = goals.some(goal => goal.date === dateString);
      
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${hasGoal ? 'has-goal' : ''} ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
          onClick={() => {
            setSelectedDate(date);
            setShowGoalModal(true);
          }}
        >
          <span className="day-number">{day}</span>
          {hasGoal && <div className="goal-indicator"></div>}
        </div>
      );
    }

    return (
      <div className="calendar-container">
        <div className="calendar-header d-flex justify-content-between align-items-center mb-3">
          <button 
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <h5 className="mb-0">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h5>
          <button 
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          <div className="calendar-days">
            {days}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h6 className="text-muted mb-1">Your Goals</h6>
          <h2 className="fw-bold">Track Your Progress</h2>
        </div>
        <div className="text-end">
          <div className="h5 mb-1">{currentTime.toLocaleTimeString()}</div>
          <div className="text-muted">{currentTime.toLocaleDateString(undefined, { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
      </div>

      {/* Reminder Notification */}
      {showReminders && (
        <div className="alert alert-info alert-dismissible fade show mb-4" role="alert">
          <strong>Reminder!</strong> You have goals due now.
          <button type="button" className="btn-close" onClick={() => setShowReminders(false)}></button>
        </div>
      )}

      <div className="row">
        {/* Calendar Section */}
        <div className="col-12 col-md-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <Calendar />
            </div>
          </div>
        </div>

        {/* Right Panel - Progress and Upcoming Goals */}
        <div className="col-12 col-md-4">
          {/* Today's Progress */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Today's Progress</h5>
              <div className="text-center mb-3">
                <div className="display-4 fw-bold text-primary mb-2">{calculateDailyProgress()}%</div>
                <p className="text-muted mb-0">Daily Goal Completion</p>
              </div>
              <div className="progress mb-3" style={{ height: '8px' }}>
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: `${calculateDailyProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Weekly Progress</h5>
              <div className="text-center mb-3">
                <div className="display-4 fw-bold text-success mb-2">{calculateWeeklyProgress()}%</div>
                <p className="text-muted mb-0">Weekly Goal Completion</p>
              </div>
              <div className="progress mb-3" style={{ height: '8px' }}>
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{ width: `${calculateWeeklyProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Streak Stats */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Goal Streaks</h5>
              <div className="row text-center g-3">
                <div className="col-4">
                  <div className="h4 mb-1">{getStreakStats().current}</div>
                  <small className="text-muted">Current</small>
                </div>
                <div className="col-4">
                  <div className="h4 mb-1">{getStreakStats().average}</div>
                  <small className="text-muted">Average</small>
                </div>
                <div className="col-4">
                  <div className="h4 mb-1">{getStreakStats().longest}</div>
                  <small className="text-muted">Longest</small>
                </div>
              </div>
            </div>
          </div>

          {/* Category Stats */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Category Progress</h5>
              {Object.entries(getCategoryStats()).map(([category, stats]) => (
                <div key={category} className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <span className="me-2">{categories[category].icon}</span>
                      <span>{category}</span>
                    </div>
                    <span className="text-muted">{stats.completed}/{stats.total}</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      style={{ 
                        width: `${stats.percentage}%`,
                        backgroundColor: categories[category].color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Goals */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Upcoming Goals</h5>
              {getUpcomingGoals().map(goal => (
                <div key={goal.id} className="d-flex align-items-center mb-3">
                  <span className="display-6 me-3 flex-shrink-0">{goal.icon}</span>
                  <div className="flex-grow-1 min-width-0">
                    <h6 className="mb-1 text-truncate">{goal.label}</h6>
                    <p className="text-muted small mb-0">
                      {new Date(goal.date).toLocaleDateString(undefined, { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                      {goal.reminder && ` • ${goal.reminder}`}
                    </p>
                  </div>
                  <ProgressCircle percent={goal.percent} color={goal.color} />
                </div>
              ))}
              {getUpcomingGoals().length === 0 && (
                <p className="text-muted text-center">No upcoming goals</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Goals List Section */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="card-title mb-0">
              Goals for {selectedDate.toLocaleDateString()}
            </h5>
            <div className="btn-group flex-wrap">
              <button 
                className={`btn btn-outline-primary ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              {Object.keys(categories).map(category => (
                <button 
                  key={category}
                  className={`btn btn-outline-primary ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  {categories[category].icon} {category}
                </button>
              ))}
            </div>
          </div>
          <div className="row g-4">
            {goals
              .filter(goal => 
                goal.date === selectedDate.toISOString().split('T')[0] &&
                (activeTab === 'all' || goal.category === activeTab)
              )
              .map(goal => (
                <div key={goal.id} className="col-12 col-md-6">
                  <div className="card h-100">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center flex-grow-1 me-3 min-width-0">
                        <span className="display-6 me-3 flex-shrink-0">{goal.icon}</span>
                        <div className="flex-grow-1 min-width-0">
                          <h6 className="mb-1">{goal.label}</h6>
                          <p className="text-muted small mb-0">{goal.value}</p>
                          <div className="d-flex align-items-center mt-1 flex-wrap">
                            <span className={`badge bg-${goal.priority === 'High' ? 'danger' : goal.priority === 'Medium' ? 'warning' : 'info'} me-2 mb-1`}>
                              {goal.priority}
                            </span>
                            <span className="badge bg-secondary mb-1">
                              {categories[goal.category].icon} {goal.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 flex-shrink-0">
                        <ProgressCircle percent={goal.percent} color={goal.color} />
                        <div className="dropdown">
                          <button className="btn btn-link text-muted p-0" type="button" data-bs-toggle="dropdown">
                            <i className="bi bi-three-dots-vertical"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button 
                                className="dropdown-item" 
                                onClick={() => handleUpdateProgress(goal.id, Math.min(goal.percent + 25, 100))}
                              >
                                Update Progress
                              </button>
                            </li>
                            <li><button className="dropdown-item" onClick={() => handleEditGoal(goal)}>Edit</button></li>
                            <li><button className="dropdown-item text-danger" onClick={() => handleDeleteGoal(goal.id)}>Delete</button></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {goal.notes && (
                      <div className="mt-auto pt-3 border-top">
                        <p className="text-muted small mb-0">
                          <i className="bi bi-pencil me-1"></i>
                          {goal.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            {!goals.some(goal => goal.date === selectedDate.toISOString().split('T')[0]) && (
              <div className="col-12">
                <p className="text-muted text-center">No goals set for this date</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Goal Modal */}
      {showGoalModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Set Goals for {selectedDate.toLocaleDateString()}
                </h5>
                <button type="button" className="btn-close" onClick={() => {
                  setShowGoalModal(false);
                  setErrors({});
                  setNewGoals({
                    Running: { value: '', unit: 'km', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
                    Sleeping: { value: '', unit: 'hrs', category: 'Health', priority: 'Medium', reminder: '', notes: '' },
                    'Weight Loss': { value: '', unit: 'kg', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
                    Custom: { value: '', unit: '', category: 'Other', priority: 'Medium', reminder: '', notes: '' }
                  });
                }}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => { e.preventDefault(); handleSaveGoals(); }}>
                  {Object.entries(goalTypes).map(([type, config]) => (
                    <div key={type} className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <span className="display-6 me-2">{config.icon}</span>
                        <h6 className="mb-0">{type}</h6>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="input-group">
                            <input 
                              type="text" 
                              className={`form-control ${errors[type] ? 'is-invalid' : ''}`}
                              placeholder={`Enter ${type.toLowerCase()} target`}
                              value={newGoals[type].value}
                              onChange={(e) => {
                                setNewGoals({
                                  ...newGoals,
                                  [type]: { ...newGoals[type], value: e.target.value }
                                });
                                if (errors[type]) {
                                  setErrors({ ...errors, [type]: null });
                                }
                              }}
                            />
                            <span className="input-group-text">{newGoals[type].unit}</span>
                            {errors[type] && (
                              <div className="invalid-feedback">
                                {errors[type]}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <select 
                            className="form-select"
                            value={newGoals[type].category}
                            onChange={(e) => {
                              setNewGoals({
                                ...newGoals,
                                [type]: { ...newGoals[type], category: e.target.value }
                              });
                            }}
                          >
                            {Object.keys(categories).map(category => (
                              <option key={category} value={category}>
                                {categories[category].icon} {category}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <select 
                            className="form-select"
                            value={newGoals[type].priority}
                            onChange={(e) => {
                              setNewGoals({
                                ...newGoals,
                                [type]: { ...newGoals[type], priority: e.target.value }
                              });
                            }}
                          >
                            <option value="Low">Low Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="High">High Priority</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="time" 
                            className="form-control"
                            value={newGoals[type].reminder}
                            onChange={(e) => {
                              setNewGoals({
                                ...newGoals,
                                [type]: { ...newGoals[type], reminder: e.target.value }
                              });
                            }}
                            placeholder="Set Reminder"
                          />
                        </div>
                        <div className="col-12">
                          <textarea 
                            className="form-control"
                            placeholder="Add notes..."
                            value={newGoals[type].notes}
                            onChange={(e) => {
                              setNewGoals({
                                ...newGoals,
                                [type]: { ...newGoals[type], notes: e.target.value }
                              });
                            }}
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  ))}
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setShowGoalModal(false);
                    setErrors({});
                    setNewGoals({
                      Running: { value: '', unit: 'km', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
                      Sleeping: { value: '', unit: 'hrs', category: 'Health', priority: 'Medium', reminder: '', notes: '' },
                      'Weight Loss': { value: '', unit: 'kg', category: 'Fitness', priority: 'Medium', reminder: '', notes: '' },
                      Custom: { value: '', unit: '', category: 'Other', priority: 'Medium', reminder: '', notes: '' }
                    });
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleSaveGoals}
                >
                  Save Goals
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .calendar-container {
          width: 100%;
        }
        .calendar-grid {
          display: flex;
          flex-direction: column;
        }
        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .calendar-day {
          aspect-ratio: 1;
          padding: 8px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .calendar-day:hover {
          background-color: #f8f9fa;
        }
        .calendar-day.selected {
          background-color: #e9ecef;
          border-color: #0d6efd;
        }
        .calendar-day.has-goal {
          background-color: #e7f5ff;
        }
        .goal-indicator {
          width: 6px;
          height: 6px;
          background-color: #0d6efd;
          border-radius: 50%;
          position: absolute;
          bottom: 4px;
        }
        .day-number {
          font-size: 14px;
        }
        .min-width-0 {
          min-width: 0;
        }
        @media (max-width: 768px) {
          .btn-group {
            margin-top: 1rem;
            width: 100%;
          }
          .btn-group .btn {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </div>
  );
}

export default GoalsPage