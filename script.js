// Buscamos el botón del modo oscuro
const modoBtn = document.getElementById("modoBtn");

// Cuando hacemos clic en el botón
modoBtn.addEventListener("click", function() {

    // Agregamos o quitamos la clase modo-claro
    document.body.classList.toggle("modo-claro");

    // Cambiamos el icono del botón
    if (document.body.classList.contains("modo-claro")) {
        modoBtn.textContent = "🌙";
    } else {
        modoBtn.textContent = "☀️";
    }

});