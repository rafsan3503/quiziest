import React, { useState } from 'react';
import { EyeIcon,EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";


const Question = ({ question, correct,setCorrect,incorrect,setIncorrect }) => {
    // console.log(question)
  const [open, setOpen] = useState(false);

    const showAnswer = answer => {
      toast.info(answer, { autoClose: 3000 });
      setOpen(!open);
    };
    const checkAnswer = (e) => {
      const value = e.target.innerText;
      console.log(question.correctAnswer, value);
      if (value === question.correctAnswer) {
        setCorrect(correct + 1);
        toast.success("Your answer is correct!!", { autoClose: 500 });
        e.target.classList.remove("text-indigo-400");
        e.target.classList.add("text-green-400");
      } else {
        toast.error("Your answer is Incorrect!!", { autoClose: 500 });
        setIncorrect(incorrect + 1);
        e.target.classList.remove("text-indigo-400");
        e.target.classList.add("text-red-400");
      }
    };
    return (
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-11/12 lg:w-1/2 mx-auto p-4 shadow-lg rounded-lg my-3 relative"
      >
        <div>
          {open ? (
            <EyeIcon className="absolute text-indigo-400 w-6 h-6 right-2"></EyeIcon>
          ) : (
            <EyeSlashIcon
              onClick={() => showAnswer(question.correctAnswer)}
              className="absolute text-indigo-400 w-6 h-6 right-2"
            ></EyeSlashIcon>
          )}
        </div>
        <h1 className="text-indigo-500 font-bold text-3xl my-3">
          Question: {question.question}
        </h1>
        <div className="p-5">
          <ol className="list-decimal text-indigo-600">
            {question.options.map((option, _idx) => (
              <li
                className="my-3 border-2 cursor-pointer p-2 rounded relative"
                key={_idx}
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