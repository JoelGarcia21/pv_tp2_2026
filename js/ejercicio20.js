import { formatearMensaje } from './funciones20.js';

const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLibreta = document.querySelector('#libreta');
const boton = document.querySelector('#btnMostrar');

boton.addEventListener('click', () => {
  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const libreta = inputLibreta.value;

  alert(formatearMensaje(nombre, apellido, libreta));
});
