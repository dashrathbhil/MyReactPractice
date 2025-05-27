import React from 'react';
import styles from '../../features/dashboard/DashboardPage.module.css';

const HeartRateChart = ({ data }) => {
  // Assuming data contains value, unit, and color based on statWidgets structure

  // Static path data for a wave-like shape to visually match the example
  const wavePath = "M10 50 C 30 20, 70 80, 90 50"; // This is a simplified cubic bezier curve path

  return (
    <div className={styles.chartCard} style={{ background: data.color, position: 'relative', overflow: 'hidden' }}>
      <div className={styles.chartHeader}>
        <div className={styles.chartIcon}>{data.icon}</div>
        <div className={styles.chartLabel}>{data.label}</div>
      </div>
      {/* We won't display the wave for this layout */}
      {/* We can potentially add value/unit here if needed, but the standard header has icon and label */}
      {/* Adding value and unit for consistency with StepsChart */}
       <div className={styles.chartValueContainer}>
        <div className={styles.chartValue}>{data.value}</div>
        <div className={styles.chartUnit}>{data.unit}</div>
      </div>
       {/* Adding sub text for consistency with StepsChart (Heart Rate doesn't have sub in data, but adding structure) */}
       <div className={styles.chartSub}>{data.sub}</div>
    </div>
  );
};

export default HeartRateChart; 