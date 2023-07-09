import { useNavigate, useParams } from "react-router-dom";
import { DestinationCard } from "../../Component/DestinationCard/DestinationCard";
import { data } from "../../db";

export const Country = () => {
  const { continentName } = useParams();
  const { continents } = data;
  const navigate = useNavigate();
  const { countries } = continents?.find(({ name }) => name === continentName);

  return (
    <div>
      {countries?.map((country) => (
        <DestinationCard
          destination={country}
          navigate={() => navigate(`/${continentName}/${country?.name}`)}
        />
      ))}
    </div>
  );
};
