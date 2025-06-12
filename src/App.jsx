import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Flags from "./Flags";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchcountry, setSearchCountry] = useState([]);
  const [ischeck, setIsCheck] = useState(false);
  const searchFlags = (data, search = "") => {
    if (search) {
      setIsCheck(true);
      return;
    }
    setIsCheck(false);
    setSearchCountry(data);
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/count "
        );

        const data = await response.json();
        // console.log(data);
        setCountries(data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <>
      <SearchBar countries={countries} searchFlags={searchFlags} />
      {ischeck ? (
        ""
      ) : (
        <Flags
          countries={searchcountry.length > 0 ? searchcountry : countries}
        />
      )}
    </>
  );
}

export default App;
