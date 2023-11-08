"use client";

import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";

import { getPokemons, getPokemonsById } from "@/app/api/pokemons";

import SimpleTable from "./simple-table";
import ApiTable from "./api-table";

type pokemonsTable = {
  name: string;
  key: Number;
  height: Number;
  weight: Number;
  photo: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

const TablePage = () => {
  const [pokemonsTable, setPokemonsTable] = useState<pokemonsTable[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getPokemons();
      const pokemonsTable: pokemonsTable[] = [];
      await Promise.all(
        pokemons.results.map(async (pokemon: any, index: number) => {
          pokemonsTable[index] = {
            name: pokemon.name,
            key: index,
            height: 0,
            weight: 0,
            photo: "",
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
          };
          const pokemonDetail = await getPokemonsById(index + 1);
          pokemonsTable[index].height = pokemonDetail.height;
          pokemonsTable[index].weight = pokemonDetail.weight;
          pokemonsTable[index].photo =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master" +
            pokemonDetail.sprites.front_default.split(
              "https://raw.githubusercontent.com/PokeAPI/sprites/master"
            )[
              pokemonDetail.sprites.front_default.split(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master"
              ).length - 1
            ];

          pokemonsTable[index].hp = pokemonDetail.stats[0].base_stat;
          pokemonsTable[index].attack = pokemonDetail.stats[1].base_stat;
          pokemonsTable[index].defense = pokemonDetail.stats[2].base_stat;
          pokemonsTable[index].speed = pokemonDetail.stats[5].base_stat;
        })
      );
      setPokemonsTable(pokemonsTable);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          motion: false,
        },
      }}
    >
      <div>
        <span className="ml-1 mb-1">simple table</span>
        <SimpleTable />
      </div>
      <div>
        <span className="ml-1 mb-1">api table</span>
        <ApiTable dataSource={pokemonsTable} isLoading={isLoading} />
      </div>
    </ConfigProvider>
  );
};

export default TablePage;
