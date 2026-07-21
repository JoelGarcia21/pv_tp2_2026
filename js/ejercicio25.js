import { obtenerColorAleatorio } from './funciones25.js';

const boton = document.querySelector('#btnColor');

boton.addEventListener('click', () => {
  const nuevoColor = obtenerColorAleatorio();
  document.body.style.backgroundColor = nuevoColor;
  console.log(`El color de fondo cambió a: ${nuevoColor}`);
});
