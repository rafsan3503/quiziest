import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiztopics = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { questions } = quiz;
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    return (
      <div>
        <h2 className="text-center text-5xl font-bold my-10 text-indigo-500">
          {quiz.name} Quiz
        </h2>
        <div className="w-48 mx-auto bg-indigo-400 p-4 rounded-lg">
          <div className="text-xl font-semibold text-white">
            <p>Total Correct: {correct}</p>
            <p>
              Total Incorrect: <span className="text-red-500">{incorrect}</span>
            </p>
          </div>
        </div>

        <div className="lg:flex">
          <div
          >
            {questions.map((question) => (
              <Question
                question={question}
                key={question.id}
                correct={correct}
                setCorrect={setCorrect}
                incorrect={incorrect}
                setIncorrect={setIncorrect}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Quiztopics;