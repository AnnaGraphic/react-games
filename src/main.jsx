import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './components/Layout/Layout.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';
import { Home } from './components/Home/Home.jsx';
import { Memory } from './components/Memory/Memory.jsx';
import { QuizGame } from './components/QuizGame/QuizGame.jsx';
import {navlinks} from './components/Nav/navlinks.js';
import { MegaMario } from './components/MegaMario/MegaMario.jsx';
import './index.css';
console.log('navlinks', navlinks.Memory);

const router = createBrowserRouter([
  {
    path: navlinks.Home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: navlinks.Memory,
        element: <Memory />
      },
      {
        path: navlinks["Quiz Game"],
        element: <QuizGame />
      },
      {
        path: navlinks["Mega Mario"],
        element: <MegaMario />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
      <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
  </React.StrictMode>,
)
