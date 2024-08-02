import React, { useState, useEffect } from 'react';
import { fetchYogaPoses, fetchExercises } from './api';
import './exercises.css';

const HealthPage = () => {
  const [level, setLevel] = useState('');
  const [yogaPoses, setYogaPoses] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('yoga');
  const [selectedItem, setSelectedItem] = useState(null);
  const [exerciseCategory, setExerciseCategory] = useState('');
  const [exerciseCategories, setExerciseCategories] = useState([]);

  useEffect(() => {
    if (level) {
      fetchData();
    }
  }, [level]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [yogaData, exercisesData] = await Promise.all([
        fetchYogaPoses(level),
        fetchExercises()
      ]);
      setYogaPoses(yogaData);
      const filteredExercises = exercisesData.filter(exercise => exercise.level === level);
      setExercises(filteredExercises);
      
      // Extract unique categories
      const categories = [...new Set(filteredExercises.map(ex => ex.category))];
      setExerciseCategories(categories);
      setExerciseCategory(categories[0]); // Set first category as default
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderLevelSelection = () => (
    <div className="level-selection">
      {['beginner', 'intermediate', 'expert'].map((lvl) => (
        <div
          key={lvl}
          className={`level-card ${lvl} ${level === lvl ? 'selected' : ''}`}
          onClick={() => setLevel(lvl)}
        >
          <h2>{lvl.charAt(0).toUpperCase() + lvl.slice(1)}</h2>
        </div>
      ))}
    </div>
  );

  const renderCategorySelection = () => (
    <div className="category-selection">
      <select value={exerciseCategory} onChange={(e) => setExerciseCategory(e.target.value)}>
        {exerciseCategories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );

  const renderGrid = (items, type) => (
    <div className="grid">
      {items.filter(item => type === 'yoga' || item.category === exerciseCategory).map(item => (
        <div key={item.id} className="card" onClick={() => setSelectedItem({ ...item, type })}>
          <img src={type === 'yoga' ? item.url_png : `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${item.images[0]}`} alt={item.name} />
          <h3>{type === 'yoga' ? item.english_name : item.name}</h3>
        </div>
      ))}
    </div>
  );

  const renderDetailView = () => {
    if (!selectedItem) return null;

    return (
      <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
        <div className="detail-view" onClick={e => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedItem(null)}>×</button>
          <h2>{selectedItem.type === 'yoga' ? selectedItem.english_name : selectedItem.name}</h2>
          <img src={selectedItem.type === 'yoga' ? selectedItem.url_png : `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${selectedItem.images[0]}`} alt={selectedItem.name} />
          {selectedItem.type === 'yoga' ? (
            <>
              <p><strong>Sanskrit Name:</strong> {selectedItem.sanskrit_name}</p>
              <p><strong>Translation:</strong> {selectedItem.translation_name}</p>
              <p><strong>Description:</strong> {selectedItem.pose_description}</p>
              <p><strong>Benefits:</strong> {selectedItem.pose_benefits}</p>
            </>
          ) : (
            <>
              <p><strong>Category:</strong> {selectedItem.category}</p>
              <p><strong>Equipment:</strong> {selectedItem.equipment}</p>
              <p><strong>Primary Muscles:</strong> {selectedItem.primaryMuscles.join(', ')}</p>
              <p><strong>Secondary Muscles:</strong> {selectedItem.secondaryMuscles.join(', ')}</p>
              <p><strong>Instructions:</strong></p>
              <ol>
                {selectedItem.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    
    <div className="health-page">
      {/* Conditionally render header based on level and loading state */}
      {!level && !loading && <h1>Choose your physical level:</h1>}
      {level && !loading && <h1>Difficulty Level: {level.charAt(0).toUpperCase() + level.slice(1)}</h1>}
      
      {!level && renderLevelSelection()}
      
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {level && !loading && !error && (
        <>
          <div className="tabs">
            <button
              className={activeTab === 'yoga' ? 'active' : ''}
              onClick={() => setActiveTab('yoga')}
            >
              Yoga Poses
            </button>
            <button
              className={activeTab === 'exercises' ? 'active' : ''}
              onClick={() => setActiveTab('exercises')}
            >
              Exercises
            </button>
          </div>
          {activeTab === 'exercises' && renderCategorySelection()}
          <div className="content">
            {activeTab === 'yoga' ? renderGrid(yogaPoses, 'yoga') : renderGrid(exercises, 'exercise')}
          </div>
        </>
      )}

      {selectedItem && renderDetailView()}
    </div>
  );
};

export default HealthPage;
