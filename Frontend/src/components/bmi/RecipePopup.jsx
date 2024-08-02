import React from "react";
import PropTypes from "prop-types";
import "./RecipePopup.css"; // Assuming you have some CSS for styling

const RecipePopup = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const { title = "No Title", image = "", instructions = "No Instructions", sourceUrl = "" } = recipe;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>{title}</h2>
        {image && <img src={image} alt={title} />}
        <div className="instructions">
          <h3>Instructions:</h3>
          <div dangerouslySetInnerHTML={{ __html: instructions }} />
        </div>
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            View Full Recipe
          </a>
        )}
      </div>
    </div>
  );
};

RecipePopup.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    instructions: PropTypes.string,
    sourceUrl: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default RecipePopup;
