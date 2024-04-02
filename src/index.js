import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Project from './Project';

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

  {
    path:'/:projectId',
    element:<Project />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myrouter} />
);
