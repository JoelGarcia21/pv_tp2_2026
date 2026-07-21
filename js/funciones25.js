export const colores = ['#f4f4f4', '#a5d6a7', '#90caf9', '#ffe082', '#ef9a9a'];

export function obtenerColorAleatorio() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}
