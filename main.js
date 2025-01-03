import './style.css'

const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = 0;

pantalla.addEventListener('click', () => {
    operacion = 0;
    pantalla.value = '0';
});

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const valor = boton.textContent;
        
        if (valor === '=') {
            operacion = eval(operacion)
            pantalla.value = operacion
        } else if ((operacion === 0) && (valor === '0')) {
            pantalla.value = '0'
        } else if (operacion === 0) {
            operacion = valor
            pantalla.value = operacion
        } else {
            operacion = operacion + valor
            pantalla.value = operacion
        }

    });
})
