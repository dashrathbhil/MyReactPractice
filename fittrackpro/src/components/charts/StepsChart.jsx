import React from 'react';
import styles from '../../features/dashboard/DashboardPage.module.css';

const StepsChart = ({ data }) => {
  // Assuming data contains value, unit, sub, label and color based on statWidgets structure
  const percent = parseInt(data.sub.replace('% of your goals', '')); // Extract percentage

  return (
    <div className={styles.chartCard} style={{ background: data.color }}>
      <div className={styles.chartHeader}>
        <div className={styles.chartIcon}>{data.icon}</div>
        <div className={styles.chartLabel}>{data.label}</div>
      </div>
      <div className={styles.chartValueContainer}>
        <div className={styles.chartValue}>{data.value}</div>
        <div className={styles.chartUnit}>{data.unit}</div>
      </div>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${percent}%`, background: 'white' }}></div>
      </div>
      <div className={styles.chartSub}>{data.sub}</div>
    </div>
  );
};

export default StepsChart; 