// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault();
        const seccionId = this.getAttribute('href');
        document.querySelector(seccionId).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

// Animaciones de entrada para las imágenes y mensajes personalizados al hacer clic
document.querySelectorAll('.galeria-imagenes img, .personaje img, .escena img').forEach(imagen => {
    imagen.addEventListener('mouseover', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1.1)';
    });

    imagen.addEventListener('mouseout', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
    });

    // Mostrar un mensaje al hacer clic en la imagen
    imagen.addEventListener('click', function() {
        const mensaje = this.getAttribute('data-message'); // Obtener el mensaje del atributo personalizado
        if(mensaje != null) alert(mensaje); // Muestra el mensaje correspondiente a la imagen
    });
});
