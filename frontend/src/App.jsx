import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './Components/Home'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'
import MovieDetail from './Components/MovieDetail'
import SearchMovie from './Components/SearchMovie'


const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/top-rated',
        element : <TopRated />
      },
      {
        path : '/upcoming',
        element : <Upcoming />
      },
      {
        path : '/:id/movie-detail',
        element : <MovieDetail />
      },
      {
        path : '/search',
        element : <SearchMovie />
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