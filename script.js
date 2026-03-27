let nombreJugador = "";
let dificultad = "facil";

let preguntasFacil = [
    { pista: "Fruta roja", correcta: "Manzana", opciones: ["Pera","Manzana","Uva","Plátano"] },
    { pista: "Animal que ladra", correcta: "Perro", opciones: ["Gato","Perro","León","Lobo"] },
    { pista: "Color del cielo", correcta: "Azul", opciones: ["Rojo","Azul","Verde","Negro"] },
    { pista: "Día después del lunes", correcta: "Martes", opciones: ["Martes","Jueves","Viernes","Domingo"] },
    { pista: "2 + 2", correcta: "4", opciones: ["3","4","5","6"] },
    { pista: "Capital de México", correcta: "CDMX", opciones: ["CDMX","Monterrey","Guadalajara","Puebla"] },
    { pista: "Animal que maúlla", correcta: "Gato", opciones: ["Perro","Gato","León","Tigre"] },
    { pista: "Color del pasto", correcta: "Verde", opciones: ["Azul","Rojo","Verde","Negro"] },
    { pista: "Sirve para sentarse", correcta: "Silla", opciones: ["Mesa", "Silla", "Cama", "Puerta"] },
    { pista: "La usas para dormir", correcta: "Cama", opciones: ["Sofá", "Cama", "Silla", "Alfombra"] },
    { pista: "Para ver películas y dibujos", correcta: "Televisión", opciones: ["Radio", "Espejo", "Televisión", "Reloj"] },
    { pista: "Mes después de enero", correcta: "Febrero", opciones: ["Marzo","Febrero","Abril","Mayo"] },
    { pista: "Tiene el cuello muy largo", correcta: "Jirafa", opciones: ["Elefante", "Cebra", "Jirafa", "Mono"] },
    { pista: "Planeta donde vivimos", correcta: "Tierra", opciones: ["Marte","Venus","Tierra","Júpiter"] },
    { pista: "Es larga, amarilla y dulce", correcta: "Plátano", opciones: ["Limón", "Plátano", "Sandía", "Coco"] },
    { pista: "Se usa para hacer pizza", correcta: "Queso", opciones: ["Chocolate", "Arroz", "Pescado", "Queso"] },
    { pista: "Brilla de día y da calor", correcta: "Sol", opciones: ["Luna", "Estrella", "Nube", "Sol"] },
    { pista: "Cae de las nubes cuando llueve", correcta: "Agua", opciones: ["Fuego", "Agua", "Tierra", "Viento"] },
    { pista: "Transporte con cuatro ruedas", correcta: "Coche", opciones: ["Barco", "Avión", "Coche", "Bicicleta"] }
];

let preguntasMedio = [
    { pista: "5 x 6", correcta: "30", opciones: ["20","30","25","35"] },
    { pista: "Planeta rojo", correcta: "Marte", opciones: ["Venus","Marte","Júpiter","Saturno"] },
    { pista: "Lenguaje web", correcta: "HTML", opciones: ["Python","HTML","Java","C++"] },
    { pista: "Raíz de 64", correcta: "8", opciones: ["6","7","8","9"] },
    { pista: "Océano más grande", correcta: "Pacífico", opciones: ["Atlántico","Índico","Pacífico","Ártico"] },
    { pista: "Gas que respiramos", correcta: "Oxígeno", opciones: ["CO2","Oxígeno","Hidrógeno","Nitrógeno"] },
    { pista: "Velocidad sonido", correcta: "343 m/s", opciones: ["200 m/s","343 m/s","50 m/s","1000 m/s"] },
    { pista: "3²", correcta: "9", opciones: ["6","9","12","3"] },
    { pista: "Capital de Japón", correcta: "Tokio", opciones: ["Seúl","Tokio","Pekín","Bangkok"] },
    { pista: "Animal rápido", correcta: "Guepardo", opciones: ["León","Guepardo","Caballo","Tigre"] },
    // extras
    { pista: "H2O es", correcta: "Agua", opciones: ["Fuego","Agua","Aire","Tierra"] },
    { pista: "Continentes", correcta: "5", opciones: ["3","5","7","10"] },
    { pista: "Color mezcla azul+rojo", correcta: "Morado", opciones: ["Verde","Morado","Amarillo","Naranja"] },
    { pista: "Animal nocturno", correcta: "Murciélago", opciones: ["Águila","Murciélago","Paloma","Cuervo"] },
    { pista: "Capital de Francia", correcta: "París", opciones: ["Londres", "Berlín", "París", "Roma"] },
    { pista: "Ciudad de los canales", correcta: "Venecia", opciones: ["Roma", "Venecia", "Madrid", "París"] },
    { pista: "Pintó la Mona Lisa", correcta: "Da Vinci", opciones: ["Picasso", "Dalí", "Van Gogh", "Da Vinci"] },
    { pista: "Instrumento de 6 cuerdas", correcta: "Guitarra", opciones: ["Violín", "Arpa", "Guitarra", "Piano"] },
    { pista: "Estructuras de Egipto", correcta: "Pirámides", opciones: ["Torres", "Templos", "Pirámides", "Castillos"] },
    { pista: "Día de la Independencia de México", correcta: "16 de Septiembre", opciones: ["5 de Mayo", "16 de Septiembre", "20 de Noviembre", "1 de Mayo"] },   
    { pista: "Moneda de la Unión Europea", correcta: "Euro", opciones: ["Dólar", "Libra", "Yen", "Euro"] }    
];

let preguntasDificil = [
    { pista: "Autor Don Quijote", correcta: "Cervantes", opciones: ["Borges","Cervantes","Neruda","Shakespeare"] },
    { pista: "Elemento Au", correcta: "Oro", opciones: ["Plata","Oro","Hierro","Cobre"] },
    { pista: "Velocidad luz", correcta: "300000 km/s", opciones: ["150000 km/s","300000 km/s","100000 km/s","500000 km/s"] },
    { pista: "Raíz de 256", correcta: "16", opciones: ["14","15","16","18"] },
    { pista: "Filósofo griego", correcta: "Sócrates", opciones: ["Platón","Sócrates","Aristóteles","Descartes"] },
    { pista: "Planeta lejano", correcta: "Neptuno", opciones: ["Urano","Neptuno","Saturno","Júpiter"] },
    { pista: "Lenguaje bajo nivel", correcta: "Assembly", opciones: ["Python","Assembly","HTML","Java"] },
    { pista: "Capital Islandia", correcta: "Reikiavik", opciones: ["Oslo","Reikiavik","Helsinki","Estocolmo"] },
    { pista: "Número primo", correcta: "13", opciones: ["12","13","15","18"] },
    { pista: "Derivada x²", correcta: "2x", opciones: ["x","2x","x²","3x"] },
    { pista: "Unidad fuerza", correcta: "Newton", opciones: ["Joule","Pascal","Newton","Watt"] },
    { pista: "Teoría relatividad", correcta: "Einstein", opciones: ["Newton","Einstein","Tesla","Bohr"] },
    { pista: "Átomo ligero", correcta: "Hidrógeno", opciones: ["Helio","Hidrógeno","Oxígeno","Carbono"] },
    { pista: "País más grande", correcta: "Rusia", opciones: ["China","EEUU","Rusia","Canadá"] },
    { pista: "Fórmula agua", correcta: "H2O", opciones: ["CO2","H2O","O2","NaCl"] },
    { pista: "Lenguaje base web", correcta: "HTML", opciones: ["Python","HTML","C#","Go"] },
    { pista: "Propuso la selección natural", correcta: "Darwin", opciones: ["Lamarck", "Darwin", "Linneo", "Aristóteles"] },
    { pista: "Padre del psicoanálisis", correcta: "Freud", opciones: ["Jung", "Skinner", "Freud", "Piaget"] },
    { pista: "Líder de la Revolución Rusa", correcta: "Lenin", opciones: ["Stalin", "Trotsky", "Lenin", "Marx"] },
    { pista: "Capital de Australia", correcta: "Camberra", opciones: ["Sídney", "Melbourne", "Camberra", "Perth"] },
    { pista: "Código legal de Babilonia", correcta: "Hammurabi", opciones: ["Justiniano", "Hammurabi", "Dracón", "Solón"] },
    { pista: "Corriente artística de Dalí", correcta: "Surrealismo", opciones: ["Cubismo", "Surrealismo", "Impresionismo", "Fovismo"] },
    { pista: "Escribió 'La Ilíada'", correcta: "Homero", opciones: ["Sófocles", "Eurípides", "Homero", "Platón"] },
    { pista: "Creador del lenguaje C", correcta: "Ritchie", opciones: ["Stroustrup", "Ritchie", "Gosling", "Thompson"] },
    { pista: "Primera programadora", correcta: "Ada Lovelace", opciones: ["Grace Hopper", "Ada Lovelace", "Marie Curie", "Hedy Lamarr"] }
];

let preguntas = [];
let indice = 0;
let puntos = 0;
let intervalo = null;
let bloqueado = false;

let sonidoCorrecto = document.getElementById("correcto");
let sonidoIncorrecto = document.getElementById("incorrecto");
let sonidoTimer = document.getElementById("warning");

function mezclar(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function irAJuego() {
    document.getElementById("hub").style.display = "none";
    document.getElementById("menu").classList.remove("hidden");
}

function volverAlHub() {
    clearInterval(intervalo);
    sonidoTimer.pause();
    sonidoTimer.currentTime = 0;
    sonidoCorrecto.pause();
    sonidoCorrecto.currentTime = 0;
    sonidoIncorrecto.pause();
    sonidoIncorrecto.currentTime = 0;
    bloqueado = true;
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("final").classList.add("hidden");
    document.getElementById("progresoContainer").classList.add("hidden");
    document.getElementById("hub").style.display = "block";
    document.getElementById("progresoBar").style.width = "0%";
}

function iniciarJuego() {
    let nombre = document.getElementById("nombre").value;
    if (!nombre) return alert("Pon tu nombre");

    nombreJugador = nombre;
    dificultad = document.getElementById("dificultad").value;

    if (dificultad === "facil") {
        preguntas = mezclar([...preguntasFacil]).slice(0, total);
    }

    if (dificultad === "medio") {
        preguntas = mezclar([...preguntasMedio]).slice(0, total);
    }

    if (dificultad === "dificil") {
        preguntas = mezclar([...preguntasDificil]).slice(0, total);
    }

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    document.getElementById("progresoContainer").classList.remove("hidden");

    indice = 0;
    puntos = 0;

    cargarPregunta();
}

function cargarPregunta() {
    clearInterval(intervalo); // 🔥 FIX CLAVE

    if (indice >= preguntas.length) {
        terminarJuego();
        return;
    }

    bloqueado = false;
    document.getElementById("resultado").innerText = "";

    let p = preguntas[indice];

    document.getElementById("pista").innerText = p.pista;
    document.getElementById("contador").innerText = `Pregunta ${indice+1}/${preguntas.length}`;

    let progreso = (indice / preguntas.length) * 100;
    document.getElementById("progresoBar").style.width = progreso + "%";

    let opciones = mezclar([...p.opciones]);

    let html = "";
    opciones.forEach(op => {
        html += `<button class="opcion" onclick="verificar('${op}')">${op}</button>`;
    });

    document.getElementById("opciones").innerHTML = html;

    iniciarTimer();
}

function iniciarTimer() {
    clearInterval(intervalo); // 🔥 DOBLE SEGURIDAD

    let tiempo = (dificultad === "dificil") ? 7 : 10;

    document.getElementById("timer").innerText = "Tiempo: " + tiempo;

    intervalo = setInterval(() => {
        tiempo--;
         // 🔥 evita negativos
        if (tiempo < 0) return;
        document.getElementById("timer").innerText = "Tiempo: " + tiempo;

        // 🔊 TICK PERFECTO
        let tick = sonidoTimer.cloneNode();
        tick.volume = 0.4;
        tick.play();

        if (tiempo <= 0) {
            clearInterval(intervalo);
            bloqueado = true;

            document.getElementById("resultado").innerText = "⏰ Se acabó el tiempo";

            setTimeout(siguiente, 3000);
        }
    }, 1000);
}

function verificar(respuesta) {
    if (bloqueado) return;

    bloqueado = true;
    clearInterval(intervalo);

    let correcta = preguntas[indice].correcta;

    if (respuesta === correcta) {
        puntos += 10;
        document.getElementById("resultado").innerText = "✅ Correcto";
        sonidoCorrecto.currentTime = 0;
        sonidoCorrecto.play();
    } else {
        document.getElementById("resultado").innerText = "❌ Incorrecto";
        sonidoIncorrecto.currentTime = 0;
        sonidoIncorrecto.play();
    }

    document.getElementById("puntos").innerText = puntos;

    setTimeout(siguiente, 3000);
}

function siguiente() {
    indice++;
    cargarPregunta();
}

function terminarJuego() {
    clearInterval(intervalo);

    document.getElementById("juego").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    // 🔥 CLAVE DINÁMICA
    let clave = "jugadores_" + dificultad;

    let jugadoresNivel = JSON.parse(localStorage.getItem(clave)) || [];

    jugadoresNivel.push({ nombre: nombreJugador, puntos });

    // ordenar ranking
    jugadoresNivel.sort((a, b) => b.puntos - a.puntos);

    localStorage.setItem(clave, JSON.stringify(jugadoresNivel));

    // mostrar tabla
    let tabla = document.getElementById("tabla");

    tabla.innerHTML = `
        <tr>
            <th>Jugador (${dificultad.toUpperCase()})</th>
            <th>Puntos</th>
        </tr>
    `;

    jugadoresNivel.forEach((j, i) => {
        tabla.innerHTML += `
            <tr>
                <td>${i + 1}. ${j.nombre}</td>
                <td>${j.puntos}</td>
            </tr>
        `;
    });
}

function volverAJugar() {
    location.reload();
}
//Borar ranking
function borrarRankingNivel(nivel) {
    const niveles = ["facil", "medio", "dificil"];
    let clave = "jugadores_" + niveles[nivel - 1];

    localStorage.removeItem(clave);
    console.log(`🧹 Ranking ${niveles[nivel - 1].toUpperCase()} eliminado`);
}

function setDificultad(nivel) {
    dificultad = nivel;

    document.querySelectorAll(".dificultad-btn").forEach(btn => {
        btn.classList.remove("activo");
    });

    event.target.classList.add("activo");
}
