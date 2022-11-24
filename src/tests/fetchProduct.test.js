import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toEqual('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Testa se retorna o objeto correto', async () => {
    const objResposta = await fetchProduct('MLB1405519561');
    expect(objResposta).toEqual(product);
  });

  it('Testa se retorna um erro quando não passa argumento', async () => {
    try {
      await fetchProduct();
    } catch(e) {
      expect(e.message).toMatch('ID não informado');
    }
  });

});
