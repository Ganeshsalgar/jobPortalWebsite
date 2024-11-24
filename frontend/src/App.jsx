import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/jobs',
    element: <Jobs />
  },
  {
    path:'/description/:id',
    element:<JobDescription />
  },
  {
    path:'/browse',
    element:<Browse />
  },
  {
    path:'/profile',
    element:<Profile />
  },
  // admin
  {
    path:"/admin/companies",
    element:<Companies />
  },
  {
    path:"/admin/companies/create",
    element:<CompanyCreate />
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup />
  },
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
