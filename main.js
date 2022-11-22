function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    // const listaDeTeclas = document.querySelector('.tecla')
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// enquanto 
// let contador = 0;

// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const listaSom = tecla.classList[1];
//     const idAudio = `#som_${listaSom}`;
//     // console.log(idAudio); 
//     tecla.onclick = function () {

//         tocaSom(idAudio);
//     }
//     contador = contador + 1;

//     // console.log(contador);
// }
//  para
for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const listaSom = tecla.classList[1];
    const idAudio = `#som_${listaSom}`; 
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

