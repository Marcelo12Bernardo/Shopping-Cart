export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (termoBusca) => {
  if (!termoBusca) {
    throw Error('Termo de busca não informado');
  }
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${termoBusca}`;
  const result = await fetch(URL);
  const data = await result.json();
  return data.results;
};
