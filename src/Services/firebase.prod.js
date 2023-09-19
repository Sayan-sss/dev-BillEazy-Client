// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbhlL4daJHPW_Fyfa21vfO9N32PoyONGo",
  authDomain: "billeazy.firebaseapp.com",
  projectId: "billeazy",
  storageBucket: "billeazy.appspot.com",
  messagingSenderId: "581909086390",
  appId: "1:581909086390:web:4d4b9bd3985004b0962617",
  measurementId: "G-ZMZ5273YFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
