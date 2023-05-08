import { useEffect, useState } from "react";
import { useRegisterMutation } from "../store/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { UnAthurize } from "../config/UnAthorize";
import { useDispatch } from "react-redux";
import { setUser } from "../store/Reducer/AuthSlice";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [sendRegisterData, { data,isLoading, error}]= useRegisterMutation();

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    if(!credentials.email || !credentials.password || credentials.name){
      return;
    }
    sendRegisterData(credentials);
  };

  useEffect(()=>{
    if(data){
      dispatch(setUser(data.data)) 
      navigate("/")
    }
    UnAthurize(error)
  },[data, dispatch, error, navigate])

  return (
    <div className="card">
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
        required
      />
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
      <button onClick={handleRegister} disabled={isLoading}>
        Register
      </button>
      <span>
        You have an account? <Link to="/login">Login</Link>{" "}
      </span>
    </div>
  );
};

export default Register;
