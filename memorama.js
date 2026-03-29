// 🔥 IMÁGENES (ponlas en /img/)
let temas = {
    Avenger: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    animales: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    comida: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    deportes: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],
    carros: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
};

// duplicar pares
let cartas = [];
let seleccionadas = [];
let bloqueadoMemo = false;
let intentos = 0;

// 🔥 IR AL MENÚ DEL MEMORAMA
function irAMemorama() {
    document.getElementById("hub").style.display = "none";

    // 🔥 asegurar limpieza
    document.getElementById("memorama").classList.add("hidden");

    // 🔥 abrir memorama
    document.getElementById("menuMemorama").classList.remove("hidden");

    // 🔥 reset básico
    seleccionadas = [];
    bloqueadoMemo = false;
}

function elegirTema() {
    let claves = Object.keys(temas);
    let random = claves[Math.floor(Math.random() * claves.length)];
    return random;
}

function volverAlHub() {
    clearInterval(intervalo);

    // 🔥 reset memorama
    seleccionadas = [];
    bloqueadoMemo = false;

     // 🔥 ocultar TODO manualmente (sin romper nada)
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("final").classList.add("hidden");

    document.getElementById("memorama").classList.add("hidden");
    document.getElementById("menuMemorama").classList.add("hidden");

    document.getElementById("progresoContainer").classList.add("hidden");

    // 🔥 mostrar hub
    document.getElementById("hub").style.display = "block";
}

// 🔥 INICIAR JUEGO
function iniciarMemorama() {
    document.getElementById("menuMemorama").classList.add("hidden");
    document.getElementById("memorama").classList.remove("hidden");

    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
// 🔥 RESET SIEMPRE
    seleccionadas = [];
    bloqueadoMemo = false;
    intentos = 0;
    
    actualizarIntentos();
    // 🔥 ELEGIR TEMA RANDOM
    let tema = elegirTema();

    // 🔥 DUPLICAR CARTAS (PARES)
    let base = temas[tema];
    let cartas = [...base, ...base];

    // 🔥 MEZCLAR
    cartas = mezclar(cartas);

    // 🔥 CREAR TABLERO
    cartas.forEach((img, index) => {
        let div = document.createElement("div");
        div.classList.add("carta");

        div.dataset.valor = img;
        div.dataset.tema = tema;

        div.onclick = () => voltearCarta(div);

        tablero.appendChild(div);
    });

    // 🔥 MOSTRAR TODAS 4 SEGUNDOS
    mostrarTodas(cartas, tema);
}



// 🔥 MOSTRAR CARTAS AL INICIO
function mostrarTodas(cartas, tema) {
    let cartasDOM = document.querySelectorAll(".carta");

    cartasDOM.forEach((carta, i) => {
        carta.innerHTML = `<img src="memorama/${tema}/${cartas[i]}">`;
    });

    setTimeout(() => {
        cartasDOM.forEach(carta => {
            carta.innerHTML = "";
        });
    }, 4000);
}


// 🔥 VOLTEAR CARTA
function voltearCarta(carta) {

    if (bloqueadoMemo || carta.classList.contains("correcta") || carta.innerHTML) return;

    // 🔥 USA EL TEMA DINÁMICO
    let tema = carta.dataset.tema;

    carta.innerHTML = `<img src="memorama/${tema}/${carta.dataset.valor}">`;
    carta.classList.add("volteada");

    seleccionadas.push(carta);

    if (seleccionadas.length === 2) {
        bloqueadoMemo = true;
        intentos++;

        let [c1, c2] = seleccionadas;

        if (c1.dataset.valor === c2.dataset.valor) {

            c1.classList.add("correcta");
            c2.classList.add("correcta");

            seleccionadas = [];
            bloqueadoMemo = false;

        } else {

            setTimeout(() => {

                c1.innerHTML = "";
                c2.innerHTML = "";

                c1.classList.remove("volteada");
                c2.classList.remove("volteada");

                seleccionadas = [];
                bloqueadoMemo = false;

            }, 800);
        }

        actualizarIntentos();
    }
}

// 🔥 INTENTOS
function actualizarIntentos() {
    document.getElementById("intentos").innerText = "Intentos: " + intentos;
}
