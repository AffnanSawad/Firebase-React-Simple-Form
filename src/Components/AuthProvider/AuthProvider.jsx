import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";



//// 1. create context
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

   // NAVBAR E USER EMAIL / USER ER ANY INFO. SHARE ER JNNO. 
  
    const [user,setuser]=useState(null);

    //google authentication

    const googleprovider = new GoogleAuthProvider()

     // SIGN UP / REGISTER ER JNNO
      const register = (email,password)=> {
       
       
       return createUserWithEmailAndPassword(auth,email,password)

       
      }

      //LOG IN ER JNNO

      const logIn = (email,password) => {

       return signInWithEmailAndPassword(auth,email,password)

        
      }
      //logout

      const logout = () => {
        return signOut(auth)
      }

      //google authentication

      const googleLogin = () => {
        return signInWithPopup(auth,googleprovider);
      }
      
      const authvalue = {
      register,
      logIn,
      user,
      setuser,
      googleLogin,
      logout
      }


    //observer (onAuth)
      useEffect( ()=> {
  
      const unsubscribe=  onAuthStateChanged(auth, (currentuser) => {
          if (currentuser) {
           
           setuser(currentuser)
          } 
          else {
          setuser(null)
          }
        });

        return ()=> {
          unsubscribe();
        }
  
       },[])
      
    

  





    //PROVIDE CONTEXT 
    return (
        <div>
            <AuthContext.Provider value={authvalue} >

            {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;