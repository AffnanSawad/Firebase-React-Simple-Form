import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
 
 


    
  
  //creating context from main context

    const {logIn,googleLogin,setuser} = useContext(AuthContext);
    const [error,seterror] = useState('')


    //form handler

       const handlelogin = e => {
        e.preventDefault() ;
      
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const confirmpassword = e.target.confirmpassword.value ;

        console.log(email,password,confirmpassword);

        //declaring context
        logIn(email,password)
        .then(result => console.log(result.user))
        .catch(error=>seterror(error.message))

    }


   const handlegooglelogin = () => {
    googleLogin()
    .then(result=>setuser(result.user));
   }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold"> LOG IN NOW !!! </h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              
            
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      
      
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input name="confirmpassword" type="confirmpassword" placeholder="cpassrord" className="input input-bordered" required />
              </div>
      
      
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">LOG IN</button>
              </div>
              {
        error && <h4 className=" bg-red-500">{error} </h4>

    }

              <p>New here? Please <Link  className="btn btn-accent" to='/register' >REGISTER</Link> First? </p>
            </form>
            <button onClick={handlegooglelogin} className="btn btn-accent w-1/2 " >GOOGLE LOG IN</button>

          </div>
        </div>
      </div>
    );
};

export default Login;