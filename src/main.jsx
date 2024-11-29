import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Users from './components/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Header/>
      <App/>
    </div>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/register',
    element: <Register/>
  }
  ,
  
  {
    path: '/login',
    element: <Login/>
  }
  ,
  
  {
    path: '/users',
    element: <Users/>,
    loader: ()=> fetch('http://localhost:5000/users')
  }
 
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
