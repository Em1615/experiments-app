import { STATUS_LIST } from '../../constants/statuses';
import styles from './Filter.module.css';

const Filter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <label>Фильтр по статусу: </label>
      <select value={currentFilter} onChange={(e) => onFilterChange(e.target.value)} className={styles.select}>
        <option value="">Все</option>
        {STATUS_LIST.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;