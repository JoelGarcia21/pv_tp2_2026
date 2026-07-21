import { mostrarSeleccion } from './funciones24.js';

const opciones = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector('#resultado');

opciones.forEach((opcion) => {
  opcion.addEventListener('change', () => {
    mostrarSeleccion(resultado, opcion.value);
    console.log(`Lenguaje seleccionado: ${opcion.value}`);
  });
});
