const checkbox = document.getElementById('menu');
const menucito = document.getElementById('menucito');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        menucito.style.display = 'block';
    } else {
        menucito.style.display = 'none';
    }
});

// Opcional: Ocultar menú cuando se hace clic en un enlace
const links = menucito.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
        menucito.style.display = 'none';
    });
});

window.addEventListener('load', () => {
    menucito.style.display = 'none';
});

// Efecto de desplazamiento en la navegación
const navegacion = document.getElementById('navegacion');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navegacion.classList.add('desplazado');
    } else {
        navegacion.classList.remove('desplazado');
    }
});

// Animaciones al aparecer
const elementos = document.querySelectorAll('.animar');
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.1 });

elementos.forEach(elemento => {
    observador.observe(elemento);
});

// Desplazamiento suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        menuMovil.classList.remove('activo');
    });
});

// Manejo del formulario
document.querySelector('.formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarme!');
    e.target.reset();
});
