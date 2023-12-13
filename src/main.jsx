import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Frilanser from './frilanser.jsx';
import Works from './works.jsx';
import Register from './views/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/frilanser',
    element: <Frilanser />
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: './views/Register',
    element: <Works />
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
