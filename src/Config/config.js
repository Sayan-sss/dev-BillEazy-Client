console.log(process.env.REACT_APP_MODE);
let firebaseConfig = {};
if (process.env.REACT_APP_MODE === "dev") {
  firebaseConfig = {
    apiKey: "AIzaSyB8F13ksI7one37vC0NDy5_kDyny1TaVPc",
    authDomain: "dev-billeazy.firebaseapp.com",
    projectId: "dev-billeazy",
    storageBucket: "dev-billeazy.appspot.com",
    messagingSenderId: "675495393643",
    appId: "1:675495393643:web:0958dab7c05b434772b42e",
    measurementId: "G-J7WFZHG5YX",
  };
} else {
  firebaseConfig = {
    apiKey: "AIzaSyCbhlL4daJHPW_Fyfa21vfO9N32PoyONGo",
    authDomain: "billeazy.firebaseapp.com",
    projectId: "billeazy",
    storageBucket: "billeazy.appspot.com",
    messagingSenderId: "581909086390",
    appId: "1:581909086390:web:4d4b9bd3985004b0962617",
    measurementId: "G-ZMZ5273YFE",
  };
}
export { firebaseConfig };
