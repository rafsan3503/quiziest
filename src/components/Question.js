import React from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";

const Question = ({ question }) => {
    console.log(question.correctAnswer)
    const showAnswer = answer => {
        toast.success(answer, { autoClose: 500 })
    }
    return (
      <div className="w-96 mx-auto p-4 shadow-lg rounded-lg my-3 relative">
        <EyeIcon
          onClick={() => showAnswer(question.correctAnswer)}
          className="absolute w-4 h-4 right-2"
        ></EyeIcon>
        <h1>Quiz 1</h1>
        <div>
          <input type="radio" name="" id="" />
        </div>
      </div>
    );
};

export default Question;