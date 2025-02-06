import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.MY_API,
  authDomain: process.env.MY_AUTH,
  projectId: process.env.MY_PROJECT_ID,
  storageBucket: process.env.MY_STORAGE_BUCKET,
  messagingSenderId: process.env.MY_MESSAGING_SENDER_ID,
  appId: process.env.MY_APP_ID,
  measurementId: process.env.MY_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app); 

const db = getFirestore(app);


export {app, db};

