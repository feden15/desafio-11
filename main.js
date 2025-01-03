import './style.css'

const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.boton');

pantalla.addEventListener('click', () => {
    operacion = 0;
    pantalla.value = '0';
});
