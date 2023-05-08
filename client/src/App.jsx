import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card";
import Home from "./components/Home";


// eslint-disable-next-line react/prop-types
const Project = ({children}) => {
  const {user} = useSelector(state=>state.user)
  return (!user ? <Navigate to="/login"/> : user ? children : <Navigate to="/"/>)
}

// eslint-disable-next-line react/prop-types
const SemiProject = ({children}) => {
  const {user} = useSelector(state=>state.user)
  return (!user ? children  : <Navigate to="/"/> )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Project><Home/></Project>)
  },
  {
    path: "/login",
    element: (<SemiProject><Card/></SemiProject>)
  },
  {
    path: "/register",
    element: (<SemiProject><Card/></SemiProject>)
  },
]);

function App() {
  const {user} = useSelector(state=>state.user)
  const {myLocation} = useSelector(state=>state.map)

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user));
  },[myLocation, user])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
