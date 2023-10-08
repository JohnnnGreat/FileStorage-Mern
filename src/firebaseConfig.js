// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsPoBT6kEPV7q0AYD_Y4gKFZbXiRXfjkk",
  authDomain: "fileuploader-14e17.firebaseapp.com",
  projectId: "fileuploader-14e17",
  storageBucket: "fileuploader-14e17.appspot.com",
  messagingSenderId: "500102671885",
  appId: "1:500102671885:web:3e565f7478344b7f49af44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
console.log(storage);
export default storage;
