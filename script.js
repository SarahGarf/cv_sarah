function toggleContenu() {
    var contenu = document.getElementById("contenu-cache");
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}
function redirectToLink() {
    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=E_5kyFm1PmjkxK-3";
}
let currentZoom = 1; // Niveau de zoom initial
const initialFontSize = 16; // Taille de police par défaut

function zoomText() {
    currentZoom += 0.1; // Augmente le zoom
    document.body.style.fontSize = (initialFontSize * currentZoom) + "px"; // Applique le zoom
}
function resetText() {
    currentZoom = 1; // Réinitialise le niveau de zoom
    document.body.style.fontSize = initialFontSize + "px"; // Revient à la taille initiale
}
