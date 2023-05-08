import { Link } from "react-router-dom";
import { useLoginMutation } from "../store/api/authApi";
import { useEffect, useState } from "react";
import { UnAthurize } from "../config/UnAthorize";
import { useDispatch } from "react-redux";
import { setUser } from "../store/Reducer/AuthSlice";


const Login = () => {
  const [credentials, setCredentials] = useState({ password: "", email: ""});
  const [sendLoginData, { data, isLoading,error }]=useLoginMutation();

  const dispatch = useDispatch()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = () => {
    if(!credentials.email || !credentials.password){
      return;
    }
    sendLoginData(credentials);
  };

  useEffect(()=>{
    error && UnAthurize(error)
  },[error])


  useEffect(()=>{
     data && dispatch(setUser(data.data))
     data && window.location.replace("/")
  },[data, dispatch])

  return (
    <div className="card">
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
        required
      />
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
        required
      />
      {error && <span className="error">{error.data.message}</span>}
      <button onClick={handleLogin} disabled={isLoading}>
        Login
      </button>
      <span>
        You don&apos;t have an account? <Link to="/register">Register</Link>{" "}
      </span>
    </div>
  );
};

export default Login;
