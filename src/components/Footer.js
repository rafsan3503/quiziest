import React from "react";
import logo from "../assets/favicon.png";

const Footer = () => {
  return (
    <footer className="px-4 py-8 dark:bg-gray-800 text-white bg-indigo-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <img className="w-10" src={logo} alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="/">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="instagram.com">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="facebook.com">
              Facebook
            </a>
          </li>
          <li>
            <a href="twitter.com">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
