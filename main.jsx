import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import { Layout } from './components/Layout/Layout.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx'
import { Home } from './components/Home/Home.jsx'
import {navlinks} from './components/Nav/navlinks.js'
import './index.css'

const router = createBrowserRouter([
  {
    path: navlinks.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]},
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
