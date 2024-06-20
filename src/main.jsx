import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './component/App.jsx'
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'
import UpdateUser from './component/updateUser.jsx'
import DisplaySinglePost from './component/DisplaySinglePost.jsx'
import './stylesheet/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }, 
  {
    path: '/updateuser',
    element: <UpdateUser />
  },
  {
    path: '/post/:postId',
    element: <DisplaySinglePost />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)