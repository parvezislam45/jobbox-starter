import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDVifFLjdgn-XMLvUvldzheqg6CkRMxtlE",
  authDomain: "job-box-e4429.firebaseapp.com",
  projectId: "job-box-e4429",
  storageBucket: "job-box-e4429.appspot.com",
  messagingSenderId: "796582135790",
  appId: "1:796582135790:web:5a79b62a79e104a1f6b0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;