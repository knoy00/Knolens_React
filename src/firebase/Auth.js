import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from "./firebase";

const auth = getAuth(app);

//Register new user
const registerUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password, name);
}

//login in a user
const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

//log out user
const logoutUser = () => {
    return signOut(auth);
}

//check if user is logged in
const checkUser = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (!currentUser) {
      console.log("No user logged in.");
      return false; // User is not logged in
    }
  
    console.log("User is logged in:", currentUser.uid);
    return true; // User is logged in
  };
  
  export default checkUser;
  



export {registerUser, loginUser, logoutUser, checkUser, auth};