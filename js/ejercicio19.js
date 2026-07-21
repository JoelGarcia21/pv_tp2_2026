import { cambiarTexto } from './funciones19.js';

const parrafo = document.querySelector('#parrafo');
const boton = document.querySelector('#btnCambiar');

boton.addEventListener('click', () => {
  cambiarTexto(parrafo, 'El texto ha sido cambiado con exito.');
});
