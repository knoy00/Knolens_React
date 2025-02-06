import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API,
  authDomain: process.env.REACT_APP_MY_AUTH,
  projectId: process.env.REACT_APP_MY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_MY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MY_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MY_APP_ID,
  measurementId: process.env.REACT_APP_MY_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app); 

const db = getFirestore(app);


export {app, db};

