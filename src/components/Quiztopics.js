import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiztopics = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;
    const { questions } = quiz;
    return (
        <div>
            <h2 className='text-center text-5xl font-bold my-10 text-indigo-500'>{quiz.name} Quiz</h2>

            {
                questions.map(question => <Question question={question} key={question.id}/>)
            }
        </div>
    );
};

export default Quiztopics;