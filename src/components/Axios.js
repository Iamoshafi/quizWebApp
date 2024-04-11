import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './axios.css'

const Axios = () => {
    const [triviaQuestion, setTriviaQuestion] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [allPossibleAnswers, setAllPossibleAnswers] = useState([])
    const [questionNumber, setQuestionNumber] = useState(1)

    
    
    async function combineAllAnswers(incorrectAnswers, correctAnswer) {
      // setAllPossibleAnswers(correctAnswer + incorrectAnswers);
    }
    


    async function getTriviaData(){
        const resp = await axios.get(
          "https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple"
        );
        
        console.log(resp.data.results);
        // console.log(resp.data.results[10].incorrect_answers);
        setTriviaQuestion(resp.data.results[0].question);
        setCorrectAnswer(resp.data.results[0].correct_answer);
        setAllPossibleAnswers(resp.data.results[0].incorrect_answers);
       
        console.log(resp.data.results[0].incorrect_answers);
        await combineAllAnswers(
          resp.data.results[0].incorrect_answers,
          resp.data.results[0].correct_answer
        );

    }

    
    for (let i = 0; i <= allPossibleAnswers.length; i++){
        console.log(allPossibleAnswers[i]);
    }
      


async function update() {
  setQuestionNumber(questionNumber + 1);
  getTriviaData();
}

useEffect(() => {
    getTriviaData();
}, []);

  return (
    <div className="parent-container">
      <div className='left-child'>
        <div>
          <h2 className='question-number'>Question {questionNumber}/10</h2>
        </div>
        <div className='question'>{triviaQuestion}</div>
      </div>

      <div className='right-child'>
        <div className='instruction'>
            Select an option:
        </div>
        <div className="ans-cont">
          <button className='answer'>Answer 1</button>
          <button className='answer'>Answer 2</button>
          <button className='answer'>Answer 3</button>
          <button className='answer'>Answer 4</button>
        </div>

        <div className='next-cont'>
            <button className='next-button' onClick={() => update()}>Next</button>
        </div>
      </div>

      {/* <button onClick={() => getTriviaData()}>Click me</button>
      {triviaQuestion}
      <div key={4}>{allPossibleAnswers}</div> */}
    </div>
  );
}
export default Axios
 