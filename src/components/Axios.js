import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./axios.css";

const Axios = () => {
  const { state } = useLocation();
  const categoryId = state?.categoryId || 9; // default to General Knowledge

  const [triviaData, setTriviaData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Fetch questions
  async function getTriviaData() {
    const resp = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
    );
    setTriviaData(resp.data.results);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setIsAnswered(false);
  }

  useEffect(() => {
    getTriviaData();
  }, [categoryId]);

  // Shuffle options whenever the question changes
  useEffect(() => {
    if (triviaData.length > 0) {
      const currentQ = triviaData[currentQuestionIndex];
      const allAnswers = [...currentQ.incorrect_answers, currentQ.correct_answer];
      const shuffled = allAnswers.sort(() => Math.random() - 0.5);
      setOptions(shuffled);
    }
  }, [currentQuestionIndex, triviaData]);

  const handleAnswerClick = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);

      // Increase score if correct
      if (answer === triviaData[currentQuestionIndex].correct_answer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (currentQuestionIndex < triviaData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true); // End of quiz
    }
  };

  if (triviaData.length === 0) return <div>Loading...</div>;

  if (quizFinished) {
    return (
      <div className="quiz-finished">
        <h2>Quiz Finished!</h2>
        <p>
          You scored <strong>{score}</strong> out of {triviaData.length}
        </p>
        <button onClick={getTriviaData}>Play Again</button>
      </div>
    );
  }

  const currentQ = triviaData[currentQuestionIndex];

  return (
    <div className="parent-container">
      <div className="left-child">
        <div>
          <h2 className="question-number">
            Question {currentQuestionIndex + 1}/{triviaData.length}
          </h2>
          <h3>Score: {score}</h3>
        </div>
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: currentQ.question }}
        />
      </div>

      <div className="right-child">
        <div className="instruction">Select an option:</div>
        <div className="ans-cont">
          {options.map((answer, idx) => {
            let className = "answer";
            if (isAnswered) {
              if (answer === currentQ.correct_answer) {
                className += " correct";
              } else if (answer === selectedAnswer) {
                className += " wrong";
              }
            }

            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleAnswerClick(answer)}
                disabled={isAnswered}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>

        <div className="next-cont">
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!isAnswered}
          >
            {currentQuestionIndex === triviaData.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Axios;
