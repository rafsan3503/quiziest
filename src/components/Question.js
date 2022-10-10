import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";


const Question = ({ question }) => {
    console.log(question)
    const showAnswer = answer => {
        Swal.fire({
          title: `Correct answer : ${answer}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
    }
    return (
      <div className="w-9/12 mx-auto p-4 shadow-lg rounded-lg my-3 relative">
        <EyeIcon
          onClick={() => showAnswer(question.correctAnswer)}
          className="absolute w-6 h-6 right-2"
        ></EyeIcon>
            <h1>Question: {question.question}</h1>
        <div>
            <label htmlFor="quiz">
                    {
                        question.options.map(option => 
                           <input type="radio" name="" id="" value='name'/>
                       ) 
                    }
            </label>
        </div>
      </div>
    );
};

export default Question;