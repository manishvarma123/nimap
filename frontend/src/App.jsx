import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './Components/Home'


const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App