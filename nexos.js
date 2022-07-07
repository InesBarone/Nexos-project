

//MODAL

const ingresarButton = document.querySelector('.general-nav-button');

const modal = document.querySelector('.modal');

ingresarButton.addEventListener('click', () => {
    modal.classList.add('modal-open');
})

const cruz = document.querySelector('.cruz-registrar')

cruz.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    localStorage.setItem('botonTexto', ingresarButton.innerHTML);
})

const flechaEmpresa = document.querySelector('.carta-registro-flecha.emp');

const flechaOrganizacion = document.querySelector('.carta-registro-flecha.org');

flechaEmpresa.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    ingresarButton.innerHTML = 'HOLA EMPRESA';
    localStorage.setItem('botonTexto', ingresarButton.innerHTML);
})

flechaOrganizacion.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    ingresarButton.innerHTML = 'HOLA ORGANIZACIÓN';
    localStorage.setItem('botonTexto', ingresarButton.innerHTML);
})

const obtenerButtonText = () => {
    const texto = localStorage.getItem('botonTexto');
    if (texto === null) {
        ingresarButton.innerHTML = 'INGRESAR';
    } else {
        ingresarButton.innerHTML = texto;
    }
}

obtenerButtonText();

//CONTACTO

const inputSoloTexto = document.getElementById('solo-texto');

const aviso = document.querySelector('.avisos.text');

inputSoloTexto.addEventListener('blur', () => {
    const regEx = /^[A-Z]+$/i
    if (regEx.test(inputSoloTexto.value) != true) {
     aviso.innerHTML = '* El "texto dato" debe solo contener letras';
} else {
    aviso.innerHTML = '';
}
})

const avisoEmail = document.querySelector('.avisos.email')

const inputEmail = document.getElementById('email');

inputEmail.addEventListener('blur', () => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (re.test(inputEmail.value) != true) {
        avisoEmail.innerHTML = '* No es correcto el email ingresado';
    } else {
        avisoEmail.innerHTML = '';
    }
})

const caracteres = document.querySelector('.textarea');

const mensaje = document.getElementById('mensaje');

mensaje.addEventListener('input', (e) => {
    const target = e.target;
    const longitudMax = 255;
    const longitudAct = target.value.length;
    caracteres.innerHTML = `Caracteres: ${longitudAct}/255`;
})

//CARROUSEL

const punto = document.querySelectorAll('.puntos-li');

const contenedorGrande = document.querySelector('.carrousel-completo');

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click',() => {
        let posicion = i;
        let operacion = posicion * -33.33;
        console.log(operacion);

        contenedorGrande.style.transform = `translateX(${operacion}%)`;

        punto.forEach((cadaPunto,i) => {
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})






