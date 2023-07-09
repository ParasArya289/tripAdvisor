import { useParams } from "react-router-dom";
import "./Detail.css";
import { data } from "../../db";

export const Detail = () => {
  const { continentName, countryName, placeName } = useParams();

  const { continents } = data;
  const { countries } = continents?.find(({ name }) => name === continentName);

  const { destinations } = countries?.find(({ name }) => name === countryName);

  const place = destinations.find(({ name }) => name === placeName);

  return (
    <div>
      <h1>{place?.name}</h1>
      <div className="detail">
        <img src={place?.image} height="200" />
        <div>
          <span>Description: {place?.description}</span>
          <span>Rating: {place?.ratings}</span>
          <span>Review: {place?.reviews}</span>
          <span>Location: {place?.location}</span>
          <span>Opening Hours: {place?.openingHours}</span>
          <span>Ticket Price: {place?.ticketPrice}</span>
          <a href={place?.website} target="_blank">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
