import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const secaoProdutos = document.querySelector('.products');

window.onload = async () => {
  const computerList = await fetchProductsList('computador');
  computerList.forEach((element) => {
    const novaSecao = createProductElement(element);
    secaoProdutos.appendChild(novaSecao);
  });
};
