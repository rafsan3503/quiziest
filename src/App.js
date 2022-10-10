import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer position='top-center'></ToastContainer>
    </RouterProvider>
  );
}

export default App;
