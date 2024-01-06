import React, { useState } from 'react';
import './QuizGame.css'
import {questions} from '/src/components/QuizGame/questions.js'
import { Question } from './Question';

export function QuizGame() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  const [ gameStarted, setGameStarted ] = useState(false)
  const handleStartButtonClick = () => {
    setGameStarted(true);
  }
  const handleUsersChoice = (selectedOptionIndex) => {
    console.log('click');
    const isCorrect = currentQuestion.options[selectedOptionIndex].isCorrect;
    console.log(currentQuestion.options[selectedOptionIndex].isCorrect)
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  return (
    <>
    <main>
      <h1>quiz game</h1>
      <div id="questionsContainer">Question
      <Question question={currentQuestion} handleUsersChoice={handleUsersChoice}/>
        <button id="startButton" onClick={handleStartButtonClick}>
          {/* TODO: implement reset */}
          {gameStarted ? 'Reset' : 'Start'}
        </button>
      </div>
    </main>
    </>
  )
}