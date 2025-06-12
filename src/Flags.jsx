import style from "./Flags.module.css";
const Flags = ({ countries }) => {
  //   console.log(countries);
  return (
    <div className={style.flags}>
      {countries.length > 0 &&
        countries.map((country, index) => {
          return (
            <div key={index} className={style.countryCard}>
              <img src={country.png} alt={country.name} />
              <p>{country.common}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Flags;
