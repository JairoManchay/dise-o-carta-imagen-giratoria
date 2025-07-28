// Para el flip del tercer sobre
const flipCardTres = document.querySelector('.envoltura-sobre-tres .flip-card-tres');
const imgCartaTres = document.getElementById('img-carta-tres');
const backTres = flipCardTres ? flipCardTres.querySelector('.flip-card-back-tres') : null;

function toggleCartaBotonesTres(visible) {
    const btnLeerTres = document.getElementById('btn-leer-carta-tres');
    const btnGuardarTres = document.getElementById('btn-guardar-carta-tres');
    if (btnLeerTres) {
        btnLeerTres.style.display = visible ? 'block' : 'none';
        btnLeerTres.style.zIndex = visible ? '2' : '';
    }
    if (btnGuardarTres) {
        btnGuardarTres.style.display = visible ? 'block' : 'none';
        btnGuardarTres.style.zIndex = visible ? '2' : '';
    }
}
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const envolturaDos = document.querySelector(".envoltura-sobre-dos");
const cartaDos = document.querySelector(".carta-dos");
const cartaTres = document.querySelector(".carta-tres");
const envolturaTres = document.querySelector(".envoltura-sobre-tres");
const audio = document.getElementById('romantic-audio');

// Para el flip del segundo sobre
const flipCardDos = document.querySelector('.envoltura-sobre-dos .flip-card-dos');
const imgCartaDos = document.getElementById('img-carta-dos');
const backDos = flipCardDos ? flipCardDos.querySelector('.flip-card-back-dos') : null;

function toggleCartaBotones(visible) {
    const btnLeer = document.getElementById('btn-leer-carta');
    const btnGuardar = document.getElementById('btn-guardar-carta');
    if (btnLeer) {
        btnLeer.style.display = visible ? 'block' : 'none';
        btnLeer.style.zIndex = visible ? '2' : '';
    }
    if (btnGuardar) {
        btnGuardar.style.display = visible ? 'block' : 'none';
        btnGuardar.style.zIndex = visible ? '2' : '';
    }
}

function toggleCartaBotonesDos(visible) {
    const btnLeerDos = document.getElementById('btn-leer-carta-dos');
    const btnGuardarDos = document.getElementById('btn-guardar-carta-dos');
    if (btnLeerDos) {
        btnLeerDos.style.display = visible ? 'block' : 'none';
        btnLeerDos.style.zIndex = visible ? '2' : '';
    }
    if (btnGuardarDos) {
        btnGuardarDos.style.display = visible ? 'block' : 'none';
        btnGuardarDos.style.zIndex = visible ? '2' : '';
    }
}
window.addEventListener('DOMContentLoaded', function() {
    var flipCard = document.querySelector('.envoltura-sobre .flip-card');
    var imgCarta = document.getElementById('img-carta');
    var back = flipCard ? flipCard.querySelector('.flip-card-back') : null;
    if (flipCard) {
        // Hacer el giro aún más lento
        var inner = flipCard.querySelector('.flip-card-inner');
        if (inner) inner.style.transition = 'transform 3s cubic-bezier(.4,2,.6,1)';
    }
    // Botón LEER: hace el flip
    const btnLeer = document.getElementById('btn-leer-carta');
    if (btnLeer) {
        btnLeer.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.add('flipped');
        });
    }
    // Botón GUARDAR: guarda la carta
    const btnGuardar = document.getElementById('btn-guardar-carta');
    if (btnGuardar) {
        btnGuardar.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.remove('flipped');
            toggleCartaBotones(false);
            setTimeout(() => {
                carta.classList.add('cerrando-carta');
                envoltura.classList.remove('desactivar-sobre');
                setTimeout(() => {
                    carta.classList.remove('cerrando-carta');
                    carta.classList.remove('abierta');
                }, 500);
            }, flipCard.classList.contains('flipped') ? 3000 : 0);
        });
    }
    // Al cerrar el flip manualmente (clic en reverso), solo quitar el flip
    if (back && flipCard) {
        back.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.remove('flipped');
        });
    }
    // Ocultar botones si la carta se guarda por otros medios
    carta.addEventListener('transitionend', function() {
        if (!carta.classList.contains('abierta')) {
            toggleCartaBotones(false);
        }
    });

    // TERCER SOBRE
    if (flipCardTres) {
        var innerTres = flipCardTres.querySelector('.flip-card-inner-tres');
        if (innerTres) innerTres.style.transition = 'transform 3s cubic-bezier(.4,2,.6,1)';
    }
    // Botón LEER 3: hace el flip
    const btnLeerTres = document.getElementById('btn-leer-carta-tres');
    if (btnLeerTres) {
        btnLeerTres.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardTres.classList.add('flipped');
        });
    }
    // Botón GUARDAR 3: guarda la carta
    const btnGuardarTres = document.getElementById('btn-guardar-carta-tres');
    if (btnGuardarTres) {
        btnGuardarTres.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardTres.classList.remove('flipped');
            toggleCartaBotonesTres(false);
            setTimeout(() => {
                cartaTres.classList.add('cerrando-carta');
                envolturaTres.classList.remove('desactivar-sobre');
                setTimeout(() => {
                    cartaTres.classList.remove('cerrando-carta');
                    cartaTres.classList.remove('abierta');
                }, 500);
            }, flipCardTres.classList.contains('flipped') ? 3000 : 0);
        });
    }
    // Al cerrar el flip manualmente (clic en reverso), solo quitar el flip
    if (backTres && flipCardTres) {
        backTres.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardTres.classList.remove('flipped');
        });
    }
    // Ocultar botones si la carta se guarda por otros medios
    cartaTres.addEventListener('transitionend', function() {
        if (!cartaTres.classList.contains('abierta')) {
            toggleCartaBotonesTres(false);
        }
    });

    // SEGUNDO SOBRE
    if (flipCardDos) {
        var innerDos = flipCardDos.querySelector('.flip-card-inner-dos');
        if (innerDos) innerDos.style.transition = 'transform 3s cubic-bezier(.4,2,.6,1)';
    }
    // Botón LEER 2: hace el flip
    const btnLeerDos = document.getElementById('btn-leer-carta-dos');
    if (btnLeerDos) {
        btnLeerDos.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardDos.classList.add('flipped');
        });
    }
    // Botón GUARDAR 2: guarda la carta
    const btnGuardarDos = document.getElementById('btn-guardar-carta-dos');
    if (btnGuardarDos) {
        btnGuardarDos.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardDos.classList.remove('flipped');
            toggleCartaBotonesDos(false);
            setTimeout(() => {
                cartaDos.classList.add('cerrando-carta');
                envolturaDos.classList.remove('desactivar-sobre');
                setTimeout(() => {
                    cartaDos.classList.remove('cerrando-carta');
                    cartaDos.classList.remove('abierta');
                }, 500);
            }, flipCardDos.classList.contains('flipped') ? 3000 : 0);
        });
    }
    // Al cerrar el flip manualmente (clic en reverso), solo quitar el flip
    if (backDos && flipCardDos) {
        backDos.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCardDos.classList.remove('flipped');
        });
    }
    // Ocultar botones si la carta se guarda por otros medios
    cartaDos.addEventListener('transitionend', function() {
        if (!cartaDos.classList.contains('abierta')) {
            toggleCartaBotonesDos(false);
        }
    });
});



document.addEventListener("click", (e) => {
    if (
        e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")
    ) {
        envoltura.classList.toggle("abierto");
    } else if(
        e.target.matches(".sobre-dos") ||
        e.target.matches(".solapa-derecha-dos") ||
        e.target.matches(".solapa-izquierda-dos") ||
        e.target.matches(".corazon-dos")
    ) {
        envolturaDos.classList.toggle("abierto");
        // Reproducir audio al abrir el segundo sobre
        if (envolturaDos.classList.contains("abierto") && audio) {
            audio.play().catch(()=>{});
        }
    } else if(
        e.target.matches(".sobre-tres") ||
        e.target.matches(".solapa-derecha-tres") ||
        e.target.matches(".solapa-izquierda-tres") ||
        e.target.matches(".corazon-tres")
    ) {
        envolturaTres.classList.toggle("abierto");
    }
    else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");
            // Mostrar los botones al abrir la carta
            toggleCartaBotones(true);
            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");
            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
    else if (e.target.matches(".sobre-dos *")) {
        if (!cartaDos.classList.contains("abierta")) {
            cartaDos.classList.add("mostrar-carta");
            // Reproducir audio al mostrar la carta del segundo sobre
            if (audio) {
                audio.play().catch(()=>{});
            }
            setTimeout(() => {
                cartaDos.classList.remove("mostrar-carta");
                cartaDos.classList.add("abierta");
            }, 500);
            envolturaDos.classList.add("desactivar-sobre")
            // Mostrar los botones del segundo sobre
            toggleCartaBotonesDos(true);
        } else {
            cartaDos.classList.add("cerrando-carta");
            envolturaDos.classList.remove("desactivar-sobre");

            setTimeout(() => {
                cartaDos.classList.remove("cerrando-carta")
                cartaDos.classList.remove("abierta")
            }, 500);
            // Ocultar los botones del segundo sobre
            toggleCartaBotonesDos(false);
        }
    } 
    else if (e.target.matches(".sobre-tres *")) {
        if (!cartaTres.classList.contains("abierta")) {
            cartaTres.classList.add("mostrar-carta");
            setTimeout(() => {
                cartaTres.classList.remove("mostrar-carta");
                cartaTres.classList.add("abierta");
            }, 500);
            envolturaTres.classList.add("desactivar-sobre")
            // Mostrar los botones del tercer sobre
            toggleCartaBotonesTres(true);
        } else {
            cartaTres.classList.add("cerrando-carta");
            envolturaTres.classList.remove("desactivar-sobre");
            setTimeout(() => {
                cartaTres.classList.remove("cerrando-carta")
                cartaTres.classList.remove("abierta")
            }, 500);
            // Ocultar los botones del tercer sobre
            toggleCartaBotonesTres(false);
        }
    }
});



// Mostrar/ocultar botones según el estado de la carta
function toggleCartaBotones(visible) {
    const btnLeer = document.getElementById('btn-leer-carta');
    const btnGuardar = document.getElementById('btn-guardar-carta');
    if (btnLeer) {
        btnLeer.style.display = visible ? 'block' : 'none';
        btnLeer.style.zIndex = visible ? '2' : '';
    }
    if (btnGuardar) {
        btnGuardar.style.display = visible ? 'block' : 'none';
        btnGuardar.style.zIndex = visible ? '2' : '';
    }
}
window.addEventListener('DOMContentLoaded', function() {
    var flipCard = document.querySelector('.envoltura-sobre .flip-card');
    var imgCarta = document.getElementById('img-carta');
    var back = flipCard ? flipCard.querySelector('.flip-card-back') : null;
    if (flipCard) {
        // Hacer el giro aún más lento
        var inner = flipCard.querySelector('.flip-card-inner');
        if (inner) inner.style.transition = 'transform 3s cubic-bezier(.4,2,.6,1)';
    }
    // Ya no se agrega ningún event listener a la imagen ni a la carta. Solo los botones trabajan.
    // Botón LEER: hace el flip
    const btnLeer = document.getElementById('btn-leer-carta');
    if (btnLeer) {
        btnLeer.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.add('flipped');
        });
    }
    // Botón GUARDAR: guarda la carta
    const btnGuardar = document.getElementById('btn-guardar-carta');
    if (btnGuardar) {
        btnGuardar.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.remove('flipped');
            toggleCartaBotones(false);
            setTimeout(() => {
                carta.classList.add('cerrando-carta');
                envoltura.classList.remove('desactivar-sobre');
                setTimeout(() => {
                    carta.classList.remove('cerrando-carta');
                    carta.classList.remove('abierta');
                }, 500);
            }, flipCard.classList.contains('flipped') ? 3000 : 0);
        });
    }
    // Al cerrar el flip manualmente (clic en reverso), solo quitar el flip
    if (back && flipCard) {
        back.addEventListener('click', function(e) {
            e.stopPropagation();
            flipCard.classList.remove('flipped');
        });
    }
    // Ocultar botones si la carta se guarda por otros medios
     carta.addEventListener('transitionend', function() {
         if (!carta.classList.contains('abierta')) {
             toggleCartaBotones(false);
         }
     });
});
