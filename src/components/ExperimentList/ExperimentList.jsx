import ExperimentCard from '../ExperimentCard/ExperimentCard';
import styles from './ExperimentList.module.css';

const ExperimentList = ({ experiments, onDelete, onStatusChange }) => {
  if (!experiments.length) {
    return <p className={styles.empty}>Нет экспериментов. Добавьте первый!</p>;
  }
  return (
    <div className={styles.list}>
      {experiments.map(exp => (
        <ExperimentCard
          key={exp.id}
          id={exp.id}
          name={exp.name}
          status={exp.status}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default ExperimentList;