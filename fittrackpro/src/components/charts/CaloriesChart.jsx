import React from 'react';
import styles from '../../features/dashboard/DashboardPage.module.css';

const CaloriesChart = ({ data }) => {
  // Assuming data contains sub and color based on statWidgets structure
  // The gauge value is not directly in statWidgets, so we'll create a visual representation.
  // Let's represent 'Today Under' with a simple arc.
  
  const radius = 40; // Radius of the gauge arc
  const circumference = 2 * Math.PI * radius;
  // We need a value to determine the arc length. Since statWidgets only has 'Today Under',
  // I will create a fixed arc for now that visually resembles the example.
  // A value around 70% of a semi-circle might work visually.
  const gaugeValue = 0.7; // Represents 70% completion for visual
  const arcLength = circumference * gaugeValue / 2; // Half circle, 70% filled

  return (
    <div className={styles.chartCard} style={{ background: data.color, position: 'relative', overflow: 'hidden' , display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent:'flex-end' }}>
      <div className={styles.chartHeader} style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1 }}>
        <div className={styles.chartIcon}>{data.icon}</div>
        <div className={styles.chartLabel}>{data.label}</div>
      </div>

      <div className={styles.caloriesGaugeContainer}>
        <svg className={styles.caloriesGaugeSvg} width="100" height="100" viewBox="0 0 100 100">
           {/* Background arc */}
          <circle
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            strokeDasharray={circumference / 2}
            strokeDashoffset={0}
            strokeLinecap="round"
            transform="rotate(180 50 50)" // Rotate to make it a bottom semi-circle
          />
          {/* Value arc */}
          <circle
            stroke="white"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            strokeDasharray={circumference / 2}
            strokeDashoffset={circumference / 2 - arcLength}
            strokeLinecap="round"
            transform="rotate(180 50 50)" // Rotate to make it a bottom semi-circle
          />
        </svg>
        <div className={styles.caloriesGaugeText}>
          <div className={styles.caloriesLabel}>Today</div> {/* This hardcoded "Today" */}
          <div className={styles.caloriesSub}>{data.sub.split('\n')[1]}</div> {/* This gets "Under" from "Today\nUnder" */}
        </div>
      </div>
    </div>
  );
};


export default CaloriesChart; 