import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse /> 
    }
])


function Body() {
  return (
      <div>
          <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body