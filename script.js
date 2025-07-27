document.addEventListener('DOMContentLoaded', function() {
    const textSlides = document.querySelectorAll('.text-slide');
    const messageSlides = document.querySelectorAll('.message-slide');
    
    let currentTextIndex = 0;
    let currentMessageIndex = 0;
    
    // Función para cambiar slides de texto
    function changeTextSlide() {
        textSlides[currentTextIndex].classList.remove('active');
        currentTextIndex = (currentTextIndex + 1) % textSlides.length;
        textSlides[currentTextIndex].classList.add('active');
    }
    
    // Función para cambiar slides de mensajes
    function changeMessageSlide() {
        messageSlides[currentMessageIndex].classList.remove('active');
        currentMessageIndex = (currentMessageIndex + 1) % messageSlides.length;
        messageSlides[currentMessageIndex].classList.add('active');
    }
    
    // Cambiar texto cada 4 segundos
    setInterval(changeTextSlide, 10000);
    
    // Cambiar mensajes cada 2 segundos
    setInterval(changeMessageSlide, 4000);
    
    // Asegurar que el video se reproduzca automáticamente
    const video = document.getElementById('background-video');
    const audio = document.getElementById('background-music');
    
    // Intentar reproducir el video cuando la página esté lista
    video.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
        // Si el autoplay falla, intentar reproducir cuando el usuario toque la pantalla
        document.addEventListener('touchstart', function() {
            video.play();
            audio.play();
        }, { once: true });
    });
    
    // Intentar reproducir la música
    audio.play().catch(function(error) {
        console.log('Audio autoplay prevented:', error);
        // Si el autoplay falla, reproducir cuando el usuario toque la pantalla
        document.addEventListener('touchstart', function() {
            audio.play();
        }, { once: true });
    });

    // Configurar volumen de la música (0.0 a 1.0)
    audio.volume = 0.3; // 30% del volumen máximo

    // Asegurar que el video esté silenciado para autoplay
    video.muted = true;
});

document.addEventListener('DOMContentLoaded', function () {
    const textSlides = document.querySelectorAll('.text-slide');
    const messageSlides = document.querySelectorAll('.message-slide');

    let currentTextIndex = 0;
    let currentMessageIndex = 0;

    // Función para cambiar slides de texto
    function changeTextSlide() {
        textSlides[currentTextIndex].classList.remove('active');
        currentTextIndex = (currentTextIndex + 1) % textSlides.length;
        textSlides[currentTextIndex].classList.add('active');
    }

    // Función para cambiar slides de mensajes
    function changeMessageSlide() {
        messageSlides[currentMessageIndex].classList.remove('active');
        currentMessageIndex = (currentMessageIndex + 1) % messageSlides.length;
        messageSlides[currentMessageIndex].classList.add('active');
    }

    // Cambiar texto cada 10 segundos (ajusté a 10 para que coincida con tu intervalo)
    setInterval(changeTextSlide, 10000);

    // Cambiar mensajes cada 4 segundos
    setInterval(changeMessageSlide, 4000);

    // Video y audio
    const video = document.getElementById('background-video');
    const audio = document.getElementById('background-music');

    // Intentar reproducir video y audio
    video.play().catch(function (error) {
        console.log('Autoplay video prevented:', error);
        document.addEventListener('touchstart', function () {
            video.play();
            audio.play();
        }, { once: true });
    });

    audio.volume = 0.3;

    // Control botón música
    const musicToggle = document.getElementById('music-toggle');

    // Estado inicial: música pausada
    let isPlaying = false;

    // Actualizar ícono botón
function updateButton() {
    musicToggle.textContent = isPlaying ? '🔊' : '🔇';  // 🎵 o 🔊 o 🔇 a tu gusto
    musicToggle.setAttribute('aria-label', isPlaying ? 'Pausar música' : 'Reproducir música');
}

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play().catch(err => {
                console.log('Error al reproducir:', err);
            });
            isPlaying = true;
        }
        updateButton();
    });

    // No reproducir automáticamente al cargar (por eso no puse autoplay en el audio)
    updateButton();
});

