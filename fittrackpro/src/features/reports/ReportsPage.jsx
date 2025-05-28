import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ReportsPage = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalCalories: 0,
    averageHeartRate: 0,
    totalDistance: 0,
  });

  // Sample data - In a real app, this would come from your backend
  const workoutData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Workout Duration (minutes)',
        data: [45, 60, 30, 75, 45, 90, 60],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const caloriesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [320, 450, 280, 520, 380, 650, 420],
        backgroundColor: '#f97316',
      },
    ],
  };

  const activityDistribution = {
    labels: ['Running', 'Cycling', 'Swimming', 'Yoga', 'Weight Training'],
    datasets: [
      {
        data: [30, 25, 15, 20, 10],
        backgroundColor: [
          '#3b82f6',
          '#f97316',
          '#10b981',
          '#6366f1',
          '#8b5cf6',
        ],
      },
    ],
  };

  useEffect(() => {
    // Calculate stats from the data
    setStats({
      totalWorkouts: workoutData.datasets[0].data.reduce((a, b) => a + b, 0),
      totalCalories: caloriesData.datasets[0].data.reduce((a, b) => a + b, 0),
      averageHeartRate: 142,
      totalDistance: 28.5,
    });
  }, []);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Fitness Reports</h2>
        <div className="btn-group">
          <button
            className={`btn ${timeRange === 'week' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button
            className={`btn ${timeRange === 'month' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button
            className={`btn ${timeRange === 'year' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Total Workouts</h6>
              <h3 className="card-title mb-0">{stats.totalWorkouts} min</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Calories Burned</h6>
              <h3 className="card-title mb-0">{stats.totalCalories} kcal</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Avg. Heart Rate</h6>
              <h3 className="card-title mb-0">{stats.averageHeartRate} bpm</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Total Distance</h6>
              <h3 className="card-title mb-0">{stats.totalDistance} km</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Workout Duration</h5>
              <Line data={workoutData} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Activity Distribution</h5>
              <Doughnut data={activityDistribution} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }} />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Calories Burned</h5>
              <Bar data={caloriesData} options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReportsPage; 