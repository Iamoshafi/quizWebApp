// Categories.js
import React from 'react'
import './Categories.css'
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  let navigate = useNavigate();

  const handleCategorySelect = (categoryId) => {
    navigate("/axios", { state: { categoryId } });
  };

  return (
    <div className="catBody">
      <div className="centre">
        <h2>Select a category:</h2>
        <hr />
        <div className="buttonCont">
          <button onClick={() => handleCategorySelect(21)}>🏆 Sports</button>
          <button onClick={() => handleCategorySelect(9)}>📚 General Knowledge</button>
          <button onClick={() => handleCategorySelect(11)}>🎬 Entertainment</button>
          <button onClick={() => handleCategorySelect(22)}>💒 Geography</button>
          <button onClick={() => handleCategorySelect(24)}>👨‍🎓 Politics</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
