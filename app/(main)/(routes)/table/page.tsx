import { getPokemons, getPokemonsById } from "@/app/api/pokemons";

import SimpleTable from "./simple-table";
import ApiTable from "./api-table";

const TablePage = async () => {
  const pokemons = await getPokemons();

  const pokemonsTable: {
    name: string;
    key: Number;
    height: Number;
    weight: Number;
    photo: string;
  }[] = [];

  await Promise.all(
    pokemons.results.map(async (pokemon: any, index: number) => {
      pokemonsTable[index] = {
        name: pokemon.name,
        key: index,
        height: 0,
        weight: 0,
        photo: "",
      };
      const pokemonDetail = await getPokemonsById(index + 1);
      pokemonsTable[index].height = pokemonDetail.height;
      pokemonsTable[index].weight = pokemonDetail.weight;
      pokemonsTable[index].photo = pokemonDetail.sprites.back_default;
    })
  );

  return (
    <>
      <div>
        <span className="ml-1 mb-1">simple table</span>
        <SimpleTable />
      </div>
      <div>
        <span className="ml-1 mb-1">api table</span>
        <ApiTable dataSource={pokemonsTable} />
      </div>
    </>
  );
};

export default TablePage;
