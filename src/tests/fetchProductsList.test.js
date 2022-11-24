import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  const lista = fetchProductsList;
  it('fetchProductsList é uma função', () => {
    expect(typeof lista).toEqual('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Testa se retorna o objeto correto', async () => {
    const objResposta = await fetchProductsList('computador');
    expect(objResposta).toEqual(computadorSearch);
  });

  it('Testa se retorna um erro quando não passa argumento', async () => {
    try {
      await fetchProductsList();
    } catch(e) {
      expect(e.message).toMatch('Termo de busca não informado');
    }
  });
});
