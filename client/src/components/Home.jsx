import { useEffect } from "react";
import { getMapLocation } from "../socket/map";
import { useSelector } from "react-redux";
import { loginUserSocket } from "../socket/emitterSocket";
import { socketWithServer } from "../socket/socketWithServer";
import Map from "./Map";
import { connectWithPeerServer } from "../socket/webrtcHandler";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const { myLocation } = useSelector((state) => state.map);

  useEffect(() => {
    socketWithServer();
    getMapLocation();
    connectWithPeerServer()
  }, []);

  useEffect(() => {
    myLocation.lat &&
      loginUserSocket({
        name: user.name,
        coords: {
          lat: myLocation.lat,
          lng: myLocation.lng,
        },
      });
  }, [myLocation, user.name]);

  return <Map />;
};

export default Home;
