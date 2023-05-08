import { useLocation } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const Card = () => {
  const { pathname } = useLocation();
  return (
    <div className="card_wrapper">
      {pathname && pathname.split("/")[1] === "register" ? (
        <Register/>
      ) : (
        <Login/>
      )}
    </div>
  );
};

export default Card;
