import { useNavigate, useParams } from "react-router-dom";
import { DestinationCard } from "../../Component/DestinationCard/DestinationCard";
import { data } from "../../db";

export const Places = () => {
  const { continentName, countryName } = useParams();

  const { continents } = data;
  const navigate = useNavigate();

  const { countries } = continents?.find(({ name }) => name === continentName);

  const { destinations } = countries?.find(({ name }) => name === countryName);

  return (
    <div>
      {destinations?.map((destination) => (
        <DestinationCard
          destination={destination}
          navigate={() =>
            navigate(`/${continentName}/${countryName}/${destination?.name}`)
          }
        />
      ))}
    </div>
  );
};
