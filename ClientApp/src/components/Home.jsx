import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';

/*
const getQuestions = async () => {
  const response = await fetch('/api/Questions/GetAll');
  const questions = await response.json();
  return questions;
}
*/

const getQuestions = async () => {
  fetch('/api/Questions/GetAll')
  .then(response => {
  const questions = response.json()
  return questions;
  })
}

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      quiz: {},
      ready: false
    }
  }
  // const [quiz, setQuiz] = useState([]);

componentDidMount() {
    getQuestions().then(list => {
      this.setState((state) => {
        return {quiz: list}
      })
    })
  }

  render() {
    return (
      <div>
        <h1>All of the sweet questions</h1>
        this.state.ready ?
        {quiz.map((question, index) => {
          return (
            <div key={index}>
              <h4>Question {question['prompt']}</h4>
              <button>{question['option1']}</button>
              <button>{question['option2']}</button>
              <button>{question['option3']}</button>
            </div>
          )
        })} : <h2>Loading</h2>
      </div>
    )
  }
};

// export default Home;
