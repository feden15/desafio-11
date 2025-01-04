import './style.css'

const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = 0;

pantalla.addEventListener('click', () => {
    operacion = 0;
    pantalla.value = '0';
});

let contador = 0;

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        const valor = boton.textContent;

        if (contador < 13) { /* cuando supere los 13 dígitos, muestra error en pantalla */
            if (valor === '=') {
                operacion = eval(operacion)
                pantalla.value = operacion
                contador = 0;
            } else if ((operacion === 0) && (valor === '0')) {
                pantalla.value = '0'
                contador = 0;
            } else if (operacion === 0) {
                operacion = valor
                pantalla.value = operacion
                contador ++
            } else {
                operacion = operacion + valor
                pantalla.value = operacion
                contador ++
            }
        } else {
            pantalla.value = 'Demasiados carácteres'
            contador = operacion = 0
        }
        

    });
})
