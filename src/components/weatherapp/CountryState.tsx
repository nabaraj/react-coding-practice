import React from "react";
import { Country, State, City, ICity } from "country-state-city";
interface CountryStateProps {
  // Add your props here
}

export const CountryState: React.FC<CountryStateProps> = (props) => {
  // Add your component logic here
  const [country, setCountry] = React.useState("");
  const [states, setStates] = React.useState<
    { value: string; displayValue: string; isoCode: string }[]
  >([]);
  const [cities, setCities] = React.useState([] as ICity[]);

  const data = Country.getAllCountries().map((country) => {
    return {
      value: country.name,
      displayValue: `${country.name} - ${country.isoCode}`,
      isoCode: country.isoCode,
    };
  });
  const state = (countryisocode: string) => {
    const states = State.getStatesOfCountry(countryisocode);
    return states.map((state) => {
      return {
        value: state.name,
        displayValue: `${state.name}`,
        isoCode: state.isoCode,
      };
    });
  };
  const city = () => {
    const cities = City.getAllCities([country]);
    // return states.map((cities) => {
    //   return {
    //     value: state.name,
    //     displayValue: `${state.name}`
    //   };
    // });
    console.log({ cities });
    return cities;
  };
  const handleSelectCountry = (e) => {
    setCountry(e.target.value);
    setStates(state(e.target.value));
  };
  const updatePlace = (e) => {
    console.log(e.target.value);
    setCities(city());
  };

  return (
    <div>
      <select name='country' id='' onChange={handleSelectCountry}>
        {data.map(({ value, isoCode, displayValue }) => (
          <option key={value} value={isoCode}>
            {displayValue}
          </option>
        ))}
      </select>
      {states.length > 0 && (
        <select name='state' id='' onChange={updatePlace}>
          {states.map(({ value, displayValue }) => (
            <option key={value} value={value}>
              {displayValue}
            </option>
          ))}
        </select>
      )}
      {cities.length > 0 && (
        <select name='city' id=''>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
