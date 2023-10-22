import axios from "axios";

export const getPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data;
  } catch (err) {
    console.error(err);
    return { error: "Failed to load data" };
  }
};

export const getPokemonsById = async (id: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { error: "Failed to load data" };
  }
};
