import { useState } from 'react';
import { STATUS_LIST } from '../../constants/statuses';
import styles from './ExperimentForm.module.css';

const ExperimentForm = ({ onAddExperiment }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(STATUS_LIST[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Введите название эксперимента');
      return;
    }
    onAddExperiment({ name: name.trim(), status });
    setName('');
    setStatus(STATUS_LIST[0]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Новый эксперимент</h3>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className={styles.select}>
        {STATUS_LIST.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <button type="submit" className={styles.button}>Добавить</button>
    </form>
  );
};

export default ExperimentForm;