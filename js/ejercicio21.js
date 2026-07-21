import { capitalesPorPais } from './funciones21.js';

const selectPaises = document.querySelector('#paises');
const selectCapitales = document.querySelector('#capitales');

selectPaises.addEventListener('change', () => {
  const pais = selectPaises.value;
  const capital = capitalesPorPais[pais];
  selectCapitales.value = capital;

  console.log(`País seleccionado: ${pais} - Capital: ${capital}`);
});
