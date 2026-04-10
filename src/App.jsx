import { useState, useEffect } from 'react';
import ExperimentList from './components/ExperimentList/ExperimentList';
import Filter from './components/Filter/Filter';
import ExperimentForm from './components/ExperimentForm/ExperimentForm';
import Stats from './components/Stats/Stats';
import { initialExperiments } from './data/initialExperiments';
import { loadExperiments, saveExperiments } from './utils/storage';
import './App.css';

function App() {
  const [experiments, setExperiments] = useState(() => {
    const stored = loadExperiments();
    return stored !== null ? stored : initialExperiments;
  });
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    saveExperiments(experiments);
  }, [experiments]);

  const filteredExperiments = filterStatus
    ? experiments.filter(exp => exp.status === filterStatus)
    : experiments;

  const handleAddExperiment = (newExp) => {
    const newId = Date.now();
    setExperiments(prev => [...prev, { ...newExp, id: newId }]);
  };

  const handleDeleteExperiment = (id) => {
    setExperiments(prev => prev.filter(exp => exp.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setExperiments(prev =>
      prev.map(exp =>
        exp.id === id ? { ...exp, status: newStatus } : exp
      )
    );
  };

  return (
    <div className="app">
      <h1>📋 Учёт экспериментов</h1>
      <div className="controls">
        <Filter currentFilter={filterStatus} onFilterChange={setFilterStatus} />
        <Stats experiments={experiments} />
      </div>
      <ExperimentForm onAddExperiment={handleAddExperiment} />
      <ExperimentList
        experiments={filteredExperiments}
        onDelete={handleDeleteExperiment}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;