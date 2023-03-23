import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setUser, toggleLoading } from "./Features/Auth/authSlice";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user)
        dispatch(setUser(user.email));
      } else{
        dispatch(toggleLoading());
      }
    })
  },[])
  return (
    <>
    <Toaster></Toaster>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
