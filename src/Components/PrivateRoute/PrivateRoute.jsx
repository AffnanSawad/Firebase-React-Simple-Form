import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
   
    console.log(children)

   


    const {user} = useContext(AuthContext)
    if(user){
        return children;
    }
    else{
    return <Navigate  to='/login'  ></Navigate>
    }
    
  
};

export default PrivateRoute;