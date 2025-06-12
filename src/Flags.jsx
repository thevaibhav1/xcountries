import "./Flags.css";
const Flags = ({ countries }) => {
  //   console.log(countries);
  return (
    <div className="flags">
      {countries.length > 0 &&
        countries.map((country, index) => {
          return (
            <div key={index} className="countryCard">
              <img src={country.png} alt={country.common} />
              <p>{country.common}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Flags;
