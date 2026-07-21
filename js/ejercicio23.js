import { actualizarContenido } from './funciones23.js';

const entrada = document.querySelector('#entrada');
const resultado = document.querySelector('#resultado');

entrada.addEventListener('input', () => {
  actualizarContenido(resultado, entrada.value);
});
