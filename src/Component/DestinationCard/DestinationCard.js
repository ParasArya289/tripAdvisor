import "./DestinationCard.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export const DestinationCard = ({ destination, navigate }) => {
  
  return (
    <div className="destination" onClick={navigate}>
      <img src={destination?.image} height="200" />
      <span>
        <FaMapMarkerAlt />
        <span>{destination.name}</span>
      </span>
    </div>
  );
};
