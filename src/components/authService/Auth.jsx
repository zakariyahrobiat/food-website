import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const registerUser = async(email, password)=>{
try{
const createUser = await createUserWithEmailAndPassword(auth, email, password)
  const user = createUser.user.uid
  
   return user
 
}
  catch(error) {
  console.error("Error registering user", error.message)
  throw error
  };
}
 

export const LoginUser=async(email, password)=>{
    try{
const existingUser = await signInWithEmailAndPassword(auth, email, password)
const token = await existingUser.user.getIdToken()
    
   return token

}catch(error) {
    setError(error.message || "Login failed.");
    throw error;
  };
}