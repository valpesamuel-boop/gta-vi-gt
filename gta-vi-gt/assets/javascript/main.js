// assets/javascript/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos la sección hero (la imagen principal)
    const heroSection = document.getElementById('inicio');
    
    // Escuchamos el evento de scroll en la ventana
    window.addEventListener('scroll', () => {
        if (heroSection) {
            // Cuando el usuario baja más de 100px, desenfocamos el fondo levemente
            if (window.scrollY > 100) {
                heroSection.style.filter = 'blur(4px)';
                heroSection.style.transition = 'filter 0.4s ease-out';
            } else {
                // Cuando vuelve arriba, quitamos el desenfoque
                heroSection.style.filter = 'blur(0px)';
            }
        }
    });

    console.log("Efectos cargados. Listo para presentar.");
});