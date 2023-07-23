import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const myrouter = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  
  {
    path:'/aboutMe',
    element: <About />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myrouter} />
);
