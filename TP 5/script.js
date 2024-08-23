// Mostrar la fecha actual en el footer
document.addEventListener('DOMContentLoaded', () => {
    const fechaElemento = document.getElementById('fecha');
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    fechaElemento.textContent = año;
});
