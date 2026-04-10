import styles from './ExperimentCard.module.css';

const ExperimentCard = ({ id, name, status, onDelete, onStatusChange }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'План': return styles.plan;
      case 'В процессе': return styles.inProgress;
      case 'Завершён': return styles.completed;
      default: return '';
    }
  };

  return (
    <div className={`${styles.card} ${getStatusClass()}`}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.statusRow}>
        <label>Статус: </label>
        <select value={status} onChange={(e) => onStatusChange(id, e.target.value)} className={styles.select}>
          <option value="План">План</option>
          <option value="В процессе">В процессе</option>
          <option value="Завершён">Завершён</option>
        </select>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default ExperimentCard;