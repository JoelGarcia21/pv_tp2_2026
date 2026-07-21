export function actualizarContenido(elemento, texto) {
  elemento.textContent = texto;

  if (texto.length > 20) {
    elemento.style.backgroundColor = '#a5d6a7';
  } else {
    elemento.style.backgroundColor = '#fff';
  }
}
