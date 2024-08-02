
export const fetchYogaPoses = async (level) => {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_YOGA_API_URL}?level=${level}`, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_REACT_APP_YOGA_API_KEY
    }
  });
  const data = await response.json();
  return data.poses || [];
};

export const fetchExercises = async () => {
  const response = await fetch(import.meta.env.VITE_REACT_APP_EXERCISES_API_URL);
  return await response.json();
};