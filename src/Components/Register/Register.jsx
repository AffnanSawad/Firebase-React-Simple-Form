import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    //exporting auth register context

    const {register,setuser} = useContext(AuthContext)

    //vul pass  set er jnno

    const [error,seterror] = useState('')
     
    // form eventhandler

    const handleregister = e => {
        e.preventDefault() ;
        const name = e.target.name.value ;
        const photo = e.target.photo.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const confirmpassword = e.target.confirmpassword.value ;

// password milanor jnno & 6+ digit pass er jnno






if(password.length < 6 ){
    seterror('PASSWORD must be larger than 6 words');
    return;
}

if(password !== confirmpassword){
    seterror('PLEASE MATCH THE PASSWORD');
    return;
}


seterror('')




        console.log(name,email,photo,password,confirmpassword);
        
        //declaring auth register context
        register(email,password)
        .then(result =>{

          setuser(result.user)
        }
          
          
          
          )
        .catch(error=>seterror(error.message))
    }




    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">REGISTER NOW!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
        
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="your name" className="input input-bordered"  />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input name="photo" type="photo" placeholder="photo" className="input input-bordered"  />
        </div>
        
        
        
        
        
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


    {
        error && <h4 className=" bg-red-500">{error} </h4>

    }


        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        <p>Already Regitered. Please Go To <Link className="btn btn-accent" to='/login' >LOG IN</Link>  </p>

      </form>
    </div>
  </div>
</div>
    );
};

export default Register;