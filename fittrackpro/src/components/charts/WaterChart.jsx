import React from 'react';
import styles from '../../features/dashboard/DashboardPage.module.css';

const WaterChart = ({ data }) => {
  // Assuming data contains value, unit, and color based on statWidgets structure
  // For the circular progress, we'll need a percentage. This data is not in statWidgets.
  // Let's assume a hypothetical progress value for now to match the visual.
  const hypotheticalProgress = 75; // Example value to visually match the image

  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (hypotheticalProgress / 100) * circumference;

  return (
    <div className={styles.chartCard} style={{ background: data.color, position: 'relative', overflow: 'hidden' }}>
      <div className={styles.chartHeader}>
        <div className={styles.chartIcon}>{data.icon}</div>
        <div className={styles.chartLabel}>{data.label}</div>
      </div>
      <div className={styles.waterCircleContainer}>
        <svg className={styles.waterCircleSvg} width="100" height="100" viewBox="0 0 100 100">
          <circle
            stroke="#fff"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            className={styles.waterCircleBg}
          />
           <circle
            stroke="white"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)" // Start the circle from the top
           />
        </svg>
        <div className={styles.waterValueContainer}>
          <div className={styles.waterValue}>{data.value}</div>
          <div className={styles.waterUnit}>{data.unit}</div>
        </div>
      </div>
    </div>
  );
};

export default WaterChart; 