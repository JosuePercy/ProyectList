const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || " []"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || " []"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toggleFavorite, existInFavorites, pokemons };

// En este código, los enlaces o la URL se especifican en la prop href del componente ActiveLink. El contenido del enlace se define en la prop text.
// Luego, dentro del componente ActiveLink, se utiliza el hook useRouter de Next.js para obtener la ruta actual (asPath) del router. Luego se compara con la URL especificada en la prop href del componente. Si coinciden, se aplica el estilo definido en la constante style al enlace. Si no coinciden, el enlace se muestra sin estilo adicional.
// Por lo tanto, el código pinta los enlaces en el componente ActiveLink, utilizando el componente Link de Next.js, y el valor de la URL se especifica en la prop href.
