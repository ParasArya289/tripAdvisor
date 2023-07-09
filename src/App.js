import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Continent } from "./Pages/Continent/Continent";
import { Country } from "./Pages/Country/Country";
import { Detail } from "./Pages/Detail/Detail";
import { Places } from "./Pages/Places/Places";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent />} />
        <Route path="/:continentName" element={<Country />} />
        <Route path="/:continentName/:countryName" element={<Places />} />
        <Route
          path="/:continentName/:countryName/:placeName"
          element={<Detail />}
        />
      </Routes>
    </div>
  );
}

export default App;
