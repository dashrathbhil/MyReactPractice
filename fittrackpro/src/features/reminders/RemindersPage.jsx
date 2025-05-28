import React, { useState, useEffect } from 'react';

function RemindersPage() {
  const [goals, setGoals] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'completed'

  useEffect(() => {
    // Load goals from localStorage
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
    // Refresh goals every minute
    const interval = setInterval(loadGoals, 60000);
    return () => clearInterval(interval);
  }, []);

  // Filter goals based on completion status
  const filteredGoals = goals.filter(goal => {
    if (filter === 'all') return true;
    if (filter === 'pending') return goal.percent < 100;
    if (filter === 'completed') return goal.percent === 100;
    return true;
  });

  // Sort goals by date and priority
  const sortedGoals = [...filteredGoals].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // Sort by date ascending
    if (dateA - dateB !== 0) {
        return dateA - dateB;
    }
    // Then sort by priority (High, Medium, Low)
    const priorityOrder = {'High': 1, 'Medium': 2, 'Low': 3};
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  // Group goals by date
  const groupedGoals = sortedGoals.reduce((groups, goal) => {
    const date = new Date(goal.date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(goal);
    return groups;
  }, {});

  return (
    <div  style={{width: '600px'}}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Reminders</h2>
          <p className="text-muted mb-0">Track your daily goals and progress</p>
        </div>
        <div className="btn-group shadow-sm">
          <button
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-light'}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Goals List */}
      {Object.entries(groupedGoals).map(([date, goals]) => (
        <div key={date} className="mb-4">
          <div className="d-flex align-items-center mb-3">
            <div className="bg-primary rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
            <h5 className="text-muted mb-0">{date}</h5>
          </div>
          <div className="d-flex flex-column gap-3">
            {goals.map(goal => (
              <div key={goal.id} className={`card border-0 shadow-sm hover-shadow transition-all ${goal.percent === 100 ? 'bg-success bg-opacity-10' : ''}`}>
                <div className="card-body p-4">
                  {/* Header */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center flex-grow-1 me-3">
                      <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{
                         width: '48px',
                         height: '48px',
                         backgroundColor: `${goal.color}20`,
                         color: goal.color,
                         flexShrink: 0
                      }}>
                        <span className="fs-4">{goal.icon}</span>
                      </div>
                      <div className="flex-grow-1">
                         <h5 className="card-title mb-1 fw-bold text-truncate">{goal.label}</h5>
                         <span className="badge bg-light text-dark">{goal.category}</span>
                      </div>
                    </div>
                    <div className="text-end d-flex flex-column align-items-end flex-shrink-0">
                      <div className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-2 py-1 mb-1">
                        {goal.reminder}
                      </div>
                       <span className={`badge ${goal.priority === 'High' ? 'bg-danger' : goal.priority === 'Medium' ? 'bg-warning' : 'bg-info'} bg-opacity-10 text-${goal.priority === 'High' ? 'danger' : goal.priority === 'Medium' ? 'warning' : 'info'} rounded-pill px-2 py-1`}>
                          {goal.priority}
                        </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <small className="text-muted">Progress</small>
                      <small className="fw-bold">{goal.percent}%</small>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className={`progress-bar ${goal.percent === 100 ? 'bg-success' : 'bg-primary'}`}
                        role="progressbar"
                        style={{ width: `${goal.percent}%` }}
                        aria-valuenow={goal.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-center flex-fill">
                      <small className="text-muted d-block">Target</small>
                      <span className="fw-bold">{goal.value}</span>
                    </div>
                    <div className="text-center flex-fill">
                      <small className="text-muted d-block">Streak</small>
                      <span className="fw-bold">{goal.streak} days</span>
                    </div>
                    <div className="text-center flex-fill">
                      <small className="text-muted d-block">Status</small>
                      <span className={`fw-bold ${goal.percent === 100 ? 'text-success' : 'text-primary'}`}>
                        {goal.percent === 100 ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                  </div>

                  {/* Notes */}
                  {goal.notes && (
                    <div className="mt-3 pt-3 border-top text-muted">
                      <small className="d-block mb-1">Notes</small>
                      <p className="mb-0 small">{goal.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Empty State */}
      {Object.keys(groupedGoals).length === 0 && (
        <div className="text-center py-5">
          <div className="mb-3">
            <span className="display-4">📝</span>
          </div>
          <h4 className="text-muted mb-2">No reminders found</h4>
          <p className="text-muted mb-0">Add some goals in the Goals page to see them here</p>
        </div>
      )}
    </div>
  );
}

export default RemindersPage;