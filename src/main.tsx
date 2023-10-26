import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './main.css';
import { Register } from './routes/register/Register.tsx';
import { HomeSearch } from './routes/home/HomeSearch.tsx';
import { Index } from './routes/restaurants/Index.tsx';
import { RestaurantView } from './routes/restaurant-view/RestaurantView.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <HomeSearch />,
      },
      {
        path: "restaurants",
        element: <Index />,
      },
      {
        path: "restaurants/:id",
        element: <RestaurantView />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
