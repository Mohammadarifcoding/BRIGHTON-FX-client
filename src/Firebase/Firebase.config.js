// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3qKToDZu1YEs7S1Lh7US_h9mN9CL8YAM",
  authDomain: "brighthonfx.firebaseapp.com",
  projectId: "brighthonfx",
  storageBucket: "brighthonfx.appspot.com",
  messagingSenderId: "711861804409",
  appId: "1:711861804409:web:21ac0bc4ffaf0c8aa363a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth
