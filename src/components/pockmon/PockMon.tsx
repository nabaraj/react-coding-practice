import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{ name: string; url: string }>;
};

export const PokeMon: React.FC = () => {
  const [combinedData, setCombinedData] = useState({} as PokemonResponse);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    const result = await data.json();
    setCombinedData(result);
  };

  useEffect(() => {
    if (id) {
      console.log(id);
    }
    getData();
  }, [id]);

  const handleChange = (event: SelectChangeEvent) => {
    const pokemonUrl = event.target.value;
    const pokemonId = getPokeMonId(pokemonUrl);
    setSelectedPokemon(pokemonUrl);
    navigate("/pokeMon/" + pokemonId); // Programmatically navigate
  };

  const getPokeMonId = (url: string) => {
    const urlArr = url.split("/");
    return urlArr[urlArr.length - 2]; // Pokemon ID is in the second last position in the URL
  };

  return (
    <div>
      PokeMon
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>PokeMons</InputLabel>
        {combinedData && combinedData?.results?.length > 0 ? (
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectedPokemon}
            label='PokeMons'
            onChange={handleChange}
          >
            {combinedData.results.map((pokeMon) => (
              <MenuItem value={pokeMon.url} key={pokeMon.url}>
                {pokeMon.name}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <span>..loading</span>
        )}
      </FormControl>
    </div>
  );
};
