import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <RouterProvider router={router}>
      <ToastContainer position='top-center'></ToastContainer>
    </RouterProvider>
  );
}

export default App;
