import React, { useState, useEffect, useRef } from 'react';
import './meditationPage.css';

const MeditationPage = () => {
  const [selectedSound, setSelectedSound] = useState('rain');
  const [duration, setDuration] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [volume, setVolume] = useState(50);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState('light');

  const audioRef = useRef(null);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `/sounds/${selectedSound}.mp3`;
      audioRef.current.loop = true;
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [selectedSound, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const resetTimer = () => {
    setIsPlaying(false);
    setTimeLeft(duration * 60);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const progress = 1 - timeLeft / (duration * 60);
  const circumference = 2 * Math.PI * 44;
  const offset = circumference * (1 - progress);

  return (
    <div className={`meditation-container ${theme} ${selectedSound}`}>
      <div className="meditation-card">
        <div className="top-controls">
          <button
            className="icon-button"
            onClick={() => setShowSettings(!showSettings)}
          >
            ⚙️
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {showSettings ? (
          <div className="settings">
            <h2>Settings</h2>
            <div className="setting-group">
              <label>Sound:</label>
              <select
                value={selectedSound}
                onChange={(e) => setSelectedSound(e.target.value)}
              >
                <option value="rain">Rain</option>
                <option value="forest">Forest</option>
                <option value="waves">Waves</option>
                <option value="park">Park</option>
                <option value="stream">Stream</option>
              </select>
            </div>
            <div className="setting-group">
              <label>Duration (Minutes):</label>
              <input
                type="number"
                value={duration}
                min="1"
                onChange={(e) =>
                  setDuration(Math.max(1, Number(e.target.value)))
                }
              />
            </div>
          </div>
        ) : (
          <>
            <div className="timer-container">
              <svg className="timer-svg" viewBox="0 0 100 100">
                <circle className="timer-circle" cx="50" cy="50" r="44" />
                <circle
                  className="timer-progress"
                  cx="50"
                  cy="50"
                  r="44"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="timer-text">{formatTime(timeLeft)}</div>
            </div>

            <div className="controls">
              <button className="control-button" onClick={togglePlay}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="control-button" onClick={resetTimer}>
                🔄
              </button>
            </div>

            <div className="duration-control">
              <button
                className="duration-button"
                onClick={() => setDuration(Math.max(1, duration - 1))}
              >
                -
              </button>
              <span className="duration-display">{duration} Minutes</span>
              <button
                className="duration-button"
                onClick={() => setDuration(duration + 1)}
              >
                +
              </button>
            </div>

            <div className="volume-control">
              <span>🔊</span>
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
              />
            </div>
          </>
        )}
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default MeditationPage;
