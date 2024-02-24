import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import {createBrowserRouter,Ro, RouterProvider} from 'react-router-dom';

let router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <NotFound/>
  },
  {
    path:'/movieDetails/:id',
    element:<MovieDetails/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
