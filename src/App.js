import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
}

export default App;
