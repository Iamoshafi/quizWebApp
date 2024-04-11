import React from 'react'
import './Categories.css'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/axios";
    navigate(path)
  }

  return (
    <div className="catBody">
      <div className="centre">
        <h2>Select a category:</h2>
        <hr />
        <div className="buttonCont">
          <button onClick={routeChange}>🏆Sports</button>
          <button>📚General Knowledge</button>
          <button>🎬Entertainment</button>
          <button>💒Geography</button>
          <button>👨‍🎓Politics</button>
        </div>
      </div>
    </div>
  );
}

export default Categories
