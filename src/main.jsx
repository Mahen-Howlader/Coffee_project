import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Addcoffee from './Component/AddCoffee/Addcoffee';
import Updatecoffee from './Component/UpdateCoffee/Updatecoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : () => fetch("http://localhost:3000/coffee")

  },
  {
    path: "/addcoffee",
    element: <Addcoffee></Addcoffee>,
  },
  {
    path: "/updatecoffee",
    element: <Updatecoffee></Updatecoffee>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
