import { useNavigate } from "react-router-dom";
import { DestinationCard } from "../../Component/DestinationCard/DestinationCard";
import { data } from "../../db";

export const Continent = () => {
  const { continents } = data;
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h3>Top Continents for your next holdiday</h3>
      {continents.map((destination) => (
        <DestinationCard
          destination={destination}
          navigate={() => navigate("/" + destination?.name)}
        />
      ))}
    </div>
  );
};
