const STORAGE_KEY = 'experiments';

export const loadExperiments = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
};

export const saveExperiments = (experiments) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(experiments));
};