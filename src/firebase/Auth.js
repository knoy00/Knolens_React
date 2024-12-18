import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
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
const checkUser = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export {registerUser, loginUser, logoutUser, checkUser, auth};