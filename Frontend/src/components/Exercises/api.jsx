const YOGA_API_URL = 'https://yoga-api-nzy4.onrender.com/v1/poses';
const YOGA_API_KEY = 'OQq68saq/cshX4PyfaGBmg==LXegiVC5YTHZRhCN';
const EXERCISES_API_URL = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

export const fetchYogaPoses = async (level) => {
  const response = await fetch(`${YOGA_API_URL}?level=${level}`, {
    headers: {
      'X-Api-Key': YOGA_API_KEY
    }
  });
  const data = await response.json();
  return data.poses || [];
};

export const fetchExercises = async () => {
  const response = await fetch(EXERCISES_API_URL);
  return await response.json();
};