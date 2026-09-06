// Animación al cargar
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  titulo.style.opacity = 0;
  setTimeout(() => {
    titulo.style.transition = "opacity 2s";
    titulo.style.opacity = 1;
  }, 500);
});

// Acción al abrir Colab
function abrirColab() {
  alert("🌌 Abriendo demo en Google Colab... usando GPU en la nube!");
}
