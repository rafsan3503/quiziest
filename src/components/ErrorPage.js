import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Footer from './Footer';
import { Nav } from './Navbar';
import errorImage from '../assets/error-icon-25266.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
      <div>
        <Nav />
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            
            <img className='w-32' src={errorImage} alt="" />
            <p className="text-3xl">{error.status}</p>
            <p className="text-red-500">{error.statusText}</p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
};

export default ErrorPage;