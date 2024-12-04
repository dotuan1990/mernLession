import React from 'react';

const questions = [
  {question: 'How does React render the DOM conservatively?', 
    explanation: 'React uses Virtual DOM to calculate minimal updates needed to render changes, enhancing performance.' },
  {question: 'Explain how the Virtual DOM works.', 
    explanation: 'The Virtual DOM calculates differences between current and previous states to update only necessary parts of the actual DOM.' },
];

const QuestionList = () => {
  return (
    <div>
      <h1>React Assessment Questions</h1>
      <ol>
        {questions.map((q) => (
          <li >
            <strong>{q.question}</strong>
            <p>{q.explanation}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionList;
