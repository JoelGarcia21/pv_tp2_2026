import { actualizarTexto } from './funciones22.js';

const entrada = document.querySelector('#entrada');
const resultado = document.querySelector('#resultado');

entrada.addEventListener('input', () => {
  actualizarTexto(resultado, entrada.value);
});
