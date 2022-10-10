import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";


const Question = ({ question, correct,setCorrect,incorrect,setIncorrect }) => {
    // console.log(question)

    const showAnswer = answer => {
        toast.info(answer,{autoClose:3000})
    };
    const checkAnswer = e => {
        const value = e.target.innerText;
        console.log(question.correctAnswer, value);
        if (value === question.correctAnswer) {
            setCorrect(correct + 1)
            toast.success("Your answer is Incorrect!!", { autoClose: 500 });
        }
        else {
            toast.error("Your answer is Incorrect!!", { autoClose: 500 });
            setIncorrect(incorrect + 1);
        }
    }
    return (
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-11/12 lg:w-1/2 mx-auto p-4 shadow-lg rounded-lg my-3 relative"
      >
        <ToastContainer position="top-center"></ToastContainer>
        <EyeIcon
          onClick={() => showAnswer(question.correctAnswer)}
          className="absolute w-6 h-6 right-2"
        ></EyeIcon>
        <h1 className="text-indigo-500 font-bold text-3xl my-3">
          Question: {question.question}
        </h1>
        <div className="p-5">
          <ol className="list-decimal text-indigo-600">
            {question.options.map((option,_idx) => (
              <li key={_idx}
                className="my-3 border-2 cursor-pointer p-2 rounded"
                onClick={(e) => checkAnswer(e)}
              >
                {option}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
};

export default Question;