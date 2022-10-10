import { useLoaderData } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Quizs from "./Quizs";
export const Header = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={banner}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A diamond is forever
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              A quiz refers to a short test of knowledge, typically around 10
              questions in length, with question formats often including
              multiple choice, fill in the blanks, true or false and short
              answer. A quiz is much shorter than a traditional test or exam and
              is rarely impactful on a final course grade.
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 w-9/12 mx-auto">
        <div class="space-y-2 text-center mb-5">
          <h2 class="text-3xl font-bold">Choose a topics to get started</h2>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Quizs topic={topic} key={topic.id}></Quizs>
          ))}
        </div>
      </div>
    </div>
  );
};
