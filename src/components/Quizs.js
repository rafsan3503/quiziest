import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const Quizs = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
      <div>
        <article className="flex flex-col dark:bg-gray-900 shadow-lg overflow-hidden rounded-lg">
          <img className="bg-indigo-400" src={logo} alt="" />
          <div className="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="/"
              className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
            >
              Total: {total}
            </a>
            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
              {name}
            </h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
              <Link to={`/quiz/${id}`} className="bg-indigo-400 py-2 px-6 flex items-center font-bold text-white rounded-lg">
                Start Quiz
                <ArrowRightIcon className='w-4 h-4'></ArrowRightIcon>
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
};

export default Quizs;