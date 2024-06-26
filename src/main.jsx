import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Apply from './Components/Apply/Apply.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,

    children: [

   {
    path:'/home',
    element: <Home> </Home>
   },
   {
    path:'/login',
    element:  <Login></Login>
   },
   {
    path:'/register',
    element: <Register></Register>
   },
   {
    path:'/applynow',
    element: <PrivateRoute>
      <Apply></Apply>
    </PrivateRoute>
   }



    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    
    
    <RouterProvider router={router} />

    </AuthProvider>


  </React.StrictMode>,
)
