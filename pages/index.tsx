import { GetStaticProps, NextPage } from "next";
import { Grid } from "@nextui-org/react";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { pokeApi } from "../api";
import Layout from "@/components/layouts/Layout";
import { PokemonCard } from "@/components/pokemon";
import { useEffect, useState } from "react";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPokemons, setCurrentPokemons] = useState<SmallPokemon[]>([]);
  const numResult = 100;
  const pageSize = Math.ceil(pokemons.length / numResult);
  /**
   * Incrementa el listado de los pokemones
   */
  useEffect(() => {
    setCurrentPokemons((current) => [
      ...current,
      ...paginate(pokemons, currentPage, numResult),
    ]);
  }, [currentPage]);
  /**
   * Inicializa el evento scroll
   */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Incrementa en 1 la pagina actual para realizar la paginación
   * @param {_data} Array de lista
   * @param {_currentPage} Pagina actual
   * @param {_numResult} Cantidad de resultados a mostrar
   * @returns {SmallPokemon[]} Retorna un listado de pokemones acorde a la paginación
   */
  const paginate = (
    _data: SmallPokemon[],
    _currentPage: number,
    _numResult: number
  ) => {
    const startIndex = (_currentPage - 1) * _numResult;
    return _data.slice(startIndex, startIndex + _numResult);
  };

  /**
   * Incrementa en 1 la pagina actual para realizar la paginación
   * @param {}
   * @returns {void} No retorna respuesta
   */
  const handleScroll = () => {
    // To get page offset of last user
    const lastUserLoaded = document.querySelector("body");
    if (!lastUserLoaded) return;

    const lastUserLoadedOffset =
      lastUserLoaded.offsetTop + lastUserLoaded.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset < lastUserLoadedOffset) return;
    if (currentPage <= pageSize) {
      setCurrentPage((current) => current + 1);
    }
  };

  return (
    <Layout title="Pokemones Listados">
      <Grid.Container gap={2} justify="flex-start">
        {currentPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=649");

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
// const config = { ip: "1234.22.11", port: 3000 };

export default HomePage;
