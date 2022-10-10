import React from 'react';

const Blog = () => {
    return (
      <div>
        <h2 className="text-center text-5xl font-bold text-indigo-400">
          Read Our Blogs
        </h2>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  What is the purpose of react router?
                </a>
                <p className="mb-2 text-gray-700">
                  React Router is a state container for the current location ,
                  or URL. It keeps track of the location and renders different
                  routes as it changes, and it also gives you tools to update
                  the location using Link s and the history API.
                </p>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://miro.medium.com/max/1195/1*mOpxRXP7O0laXUDIqzm2_Q.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Simple is better"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  How does context API works?
                </a>
                <p className="mb-2 text-gray-700">
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.
                </p>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Film It!"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  What is useHref hook in react?
                </a>
                <p className="mb-2 text-gray-700">
                  The useHref hook returns a URL that may be used to link to the
                  given to location, even outside of React Router. Tip: You may
                  be interested in taking a look at the source for the Link
                  component in react-router-dom to see how it uses useHref
                  internally to determine its own href value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;