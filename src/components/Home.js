import React from 'react'
import { Link } from "react-router-dom"
import image from './images/quiz_img-removebg-preview.png'
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


const Home = () => {
  return (
    <div className="sectionOne">
      <div className="body">
        <div className="intro">
          <h1 className="logo">Quiz App</h1>
          <p className='intro-message'>
            Welcome to the QuizApp. <br /> Here, you can test your knowledge on various
            topics. Goodluck😁
          </p>
          <Link to="/categories" className='link'>
            <p className="start-link">
              Click here to get started
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            </p>
          </Link>
        </div>
        <div className="image-cont">
          <img src={image} alt="img" className="image" />
        </div>
      </div>
    </div>
  );
}
 
export default Home
