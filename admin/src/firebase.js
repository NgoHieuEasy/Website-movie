import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRRpx_31ipA9hENZDoJ8Bx6hW6qI83K0g",
  authDomain: "nextfix-fa052.firebaseapp.com",
  projectId: "nextfix-fa052",
  storageBucket: "nextfix-fa052.appspot.com",
  messagingSenderId: "283156001064",
  appId: "1:283156001064:web:467b40b256bdb31fba201d",
  measurementId: "G-LN0QN4DTBG"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
