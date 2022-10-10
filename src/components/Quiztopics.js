import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiztopics = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div>
            this is quiz topics
        </div>
    );
};

export default Quiztopics;