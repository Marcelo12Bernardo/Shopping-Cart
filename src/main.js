import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const secaoProdutos = document.querySelector('.products');

const removeLoad = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const addLoad = () => {
  const loading = document.createElement('span');
  loading.className = 'loading';
  loading.textContent = 'carregando...';
  secaoProdutos.appendChild(loading);
};

const emiteError = () => {
  const spanErro = document.createElement('span');
  spanErro.className = 'error';
  spanErro.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  products.appendChild(spanErro);
};

window.onload = async () => {
  addLoad();
  try {
    const computerList = await fetchProductsList('computador');
    removeLoad();
    computerList.forEach((element) => {
      const novaSecao = createProductElement(element);
      secaoProdutos.appendChild(novaSecao);
    });
  } catch (e) {
    removeLoad();
    emiteError();
  }
};
