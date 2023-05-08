import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import Markar from "./Markar";
import UserInfo from "./userInfoCard/UserInfo";
import Messanger from "./messanger/Messanger";
import VideoRooms from "./realtimeComunication/VideoRooms";

const Map = () => {
  const { myLocation, onlineUsers,cardChosenOption } = useSelector((state) => state.map);

  const defaultProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };

  return (
    myLocation.lat && (
      <div className="map_page_container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {onlineUsers &&
            onlineUsers.map((u) => (
              <Markar
                key={u.socketId}
                lat={u.coords.lat}
                lng={u.coords.lng}
                name={u.name}
                mySelf ={u.mySelf}
                socketId={u.socketId}
                coords={u.coords}
              />
            ))}
        </GoogleMapReact>
        <Messanger/>
        {
            cardChosenOption && (<UserInfo
            socketId={cardChosenOption.socketId}
            location={cardChosenOption.location}
            name={cardChosenOption.name}

            />)
        }
        <VideoRooms/>
      </div>
    )
  );
};

export default Map;
