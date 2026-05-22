import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Template from './components/Template'
import Error from './components/Error'
import "./App.css"

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Template />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/service",
            element: <Service />
          },
           {
            path: "/*",
            element: <Error  />
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router} />

  )
}

export default App