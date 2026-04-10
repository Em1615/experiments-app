import styles from './Stats.module.css';

const Stats = ({ experiments }) => {
  const completedCount = experiments.filter(exp => exp.status === 'Завершён').length;
  return (
    <div className={styles.stats}>
      <span>✅ Завершённых экспериментов: <strong>{completedCount}</strong></span>
    </div>
  );
};

export default Stats;