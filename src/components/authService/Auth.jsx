import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const registerUser = async()=>{
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
 

export const LoginUser=async()=>{
    try{
const existingUser = await signInWithEmailAndPassword(auth, email, password)
const token = existingUser.user.getIdToken()
    
   return token

}catch(error) {
    console.error("Error signing in user:", error.message);
    throw error;
  };
}