let nombreJugador = "";
let dificultad = "facil";

let preguntasFacil = [
    { pista: "Palabra que nombra un animal", correcta: "Perro", opciones: ["Correr","Bonito","Perro","Rápido"] },
    { pista: "Palabra que indica acción", correcta: "Correr", opciones: ["Mesa","Correr","Azul","Perro"] },
    { pista: "Palabra que describe algo", correcta: "Bonito", opciones: ["Casa","Correr","Bonito","Perro"] },
    { pista: "Palabra que nombra una cosa", correcta: "Mesa", opciones: ["Correr","Mesa","Feliz","Rápido"] },
    { pista: "Artículo femenino", correcta: "La", opciones: ["El","La","Un","Uno"] },
    { pista: "Pronombre personal", correcta: "Ella", opciones: ["Casa","Ella","Bonito","Correr"] },
    { pista: "Adverbio de modo", correcta: "Rápido", opciones: ["Perro","Rápido","Mesa","Cantar"] },
    { pista: "Verbo en pasado", correcta: "Comí", opciones: ["Comer","Comí","Come","Comida"] },
    { pista: "Palabra que describe emoción", correcta: "Feliz", opciones: ["Feliz","Mesa","Correr","Perro"] },
    { pista: "Palabra que nombra objeto", correcta: "Computadora", opciones: ["Correr","Bonito","Computadora","Rápido"] },
    { pista: "Palabra que nombra persona", correcta: "Niño", opciones: ["Correr","Niño","Rápido","Bonito"] },
    { pista: "Palabra que indica acción", correcta: "Saltar", opciones: ["Mesa","Azul","Saltar","Perro"] },
    { pista: "Palabra que describe color", correcta: "Rojo", opciones: ["Rojo","Correr","Casa","Perro"] },
    { pista: "Palabra que nombra lugar", correcta: "Escuela", opciones: ["Bonito","Escuela","Correr","Rápido"] },
    { pista: "Artículo masculino", correcta: "El", opciones: ["La","El","Una","Un"] },
    { pista: "Pronombre personal", correcta: "Nosotros", opciones: ["Mesa","Nosotros","Bonito","Correr"] },
    { pista: "Adverbio de tiempo", correcta: "Hoy", opciones: ["Perro","Mesa","Hoy","Bonito"] },
    { pista: "Verbo en presente", correcta: "Come", opciones: ["Comí","Comer","Come","Comida"] },
    { pista: "Palabra que expresa emoción", correcta: "Triste", opciones: ["Mesa","Perro","Triste","Correr"] },
    { pista: "Palabra que nombra objeto", correcta: "Teléfono", opciones: ["Correr","Bonito","Teléfono","Rápido"] },
    { pista: "Palabra que nombra un animal", correcta: "Gato", opciones: ["Correr","Gato","Bonito","Rápido"] },
    { pista: "Palabra que indica acción", correcta: "Leer", opciones: ["Mesa","Leer","Azul","Perro"] },
    { pista: "Palabra que describe tamaño", correcta: "Grande", opciones: ["Grande","Correr","Casa","Perro"] },
    { pista: "Palabra que nombra objeto", correcta: "Silla", opciones: ["Bonito","Silla","Correr","Rápido"] },
    { pista: "Artículo plural", correcta: "Los", opciones: ["El","La","Los","Un"] },
    { pista: "Pronombre personal", correcta: "Tú", opciones: ["Mesa","Tú","Bonito","Correr"] },
    { pista: "Adverbio de lugar", correcta: "Allí", opciones: ["Perro","Mesa","Allí","Bonito"] },
    { pista: "Verbo en infinitivo", correcta: "Vivir", opciones: ["Viví","Vivir","Vive","Vivido"] },
    { pista: "Palabra que expresa emoción", correcta: "Enojado", opciones: ["Mesa","Perro","Enojado","Correr"] },
    { pista: "Palabra que nombra lugar", correcta: "Parque", opciones: ["Correr","Bonito","Parque","Rápido"] },
    { pista: "Palabra que describe color", correcta: "Verde", opciones: ["Verde","Correr","Casa","Perro"] },
    { pista: "Palabra que indica acción", correcta: "Escribir", opciones: ["Mesa","Azul","Escribir","Perro"] },
    { pista: "Pronombre personal", correcta: "Ellos", opciones: ["Casa","Ellos","Bonito","Correr"] },
    { pista: "Artículo indefinido", correcta: "Un", opciones: ["El","La","Un","Los"] },
    { pista: "Palabra que describe forma", correcta: "Redondo", opciones: ["Redondo","Correr","Casa","Perro"] },
    { pista: "Verbo en presente", correcta: "Corre", opciones: ["Corrió","Correr","Corre","Corriendo"] },
    { pista: "Adverbio de tiempo", correcta: "Mañana", opciones: ["Perro","Mesa","Mañana","Bonito"] },
    { pista: "Palabra que nombra cosa", correcta: "Libro", opciones: ["Correr","Bonito","Libro","Rápido"] },
    { pista: "Palabra que expresa cualidad", correcta: "Alto", opciones: ["Mesa","Perro","Alto","Correr"] },
    { pista: "Palabra que indica acción", correcta: "Beber", opciones: ["Mesa","Azul","Beber","Perro"] }
];

let preguntasMedio = [
    { pista: "Adjetivo en: 'El perro es grande'", correcta: "Grande", opciones: ["Perro","Es","Grande","Muy"] },
    { pista: "Verbo en: 'María estudia mucho'", correcta: "Estudia", opciones: ["María","Estudia","Mucho","Nada"] },
    { pista: "Adverbio de cantidad", correcta: "Poco", opciones: ["Casa","Poco","Correr","Azul"] },
    { pista: "Pronombre personal", correcta: "Él", opciones: ["Él","Mesa","Bonito","Correr"] },
    { pista: "Preposición", correcta: "En", opciones: ["Perro","En","Azul","Correr"] },
    { pista: "Conjunción", correcta: "Y", opciones: ["Casa","Y","Bonito","Rápido"] },
    { pista: "Palabra con significado propio", correcta: "Mesa", opciones: ["Y","En","El","Mesa"] },
    { pista: "Sujeto en: 'El niño juega'", correcta: "Niño", opciones: ["Juega","Niño","El","Nada"] },
    { pista: "Sustantivo abstracto", correcta: "Amor", opciones: ["Mesa","Perro","Amor","Correr"] },
    { pista: "Adverbio de lugar", correcta: "Aquí", opciones: ["Correr","Aquí","Mesa","Bonito"] },
    { pista: "Adjetivo en: 'La casa es bonita'", correcta: "Bonita", opciones: ["Casa","Es","Bonita","La"] },
    { pista: "Verbo en: 'Ellos corren rápido'", correcta: "Corren", opciones: ["Ellos","Rápido","Corren","Nada"] },
    { pista: "Adverbio de tiempo", correcta: "Ayer", opciones: ["Casa","Ayer","Correr","Azul"] },
    { pista: "Pronombre posesivo", correcta: "Mío", opciones: ["Mío","Mesa","Bonito","Correr"] },
    { pista: "Preposición", correcta: "Sobre", opciones: ["Perro","Sobre","Azul","Correr"] },
    { pista: "Conjunción", correcta: "Pero", opciones: ["Casa","Pero","Bonito","Rápido"] },
    { pista: "Sujeto en: 'La niña canta'", correcta: "Niña", opciones: ["Canta","Niña","La","Nada"] },
    { pista: "Sustantivo concreto", correcta: "Silla", opciones: ["Amor","Silla","Correr","Felicidad"] },
    { pista: "Adverbio de modo", correcta: "Lentamente", opciones: ["Correr","Mesa","Lentamente","Bonito"] },
    { pista: "Palabra con significado léxico", correcta: "Libro", opciones: ["Y","En","El","Libro"] },
    { pista: "Adjetivo en: 'El coche es rápido'", correcta: "Rápido", opciones: ["Coche","Es","Rápido","El"] },
    { pista: "Verbo en: 'Ana canta bonito'", correcta: "Canta", opciones: ["Ana","Bonito","Canta","Nada"] },
    { pista: "Adverbio de lugar", correcta: "Aquí", opciones: ["Casa","Aquí","Correr","Azul"] },
    { pista: "Pronombre reflexivo", correcta: "Se", opciones: ["Se","Mesa","Bonito","Correr"] },
    { pista: "Preposición", correcta: "Desde", opciones: ["Perro","Desde","Azul","Correr"] },
    { pista: "Conjunción", correcta: "O", opciones: ["Casa","O","Bonito","Rápido"] },
    { pista: "Sujeto en: 'Pedro estudia'", correcta: "Pedro", opciones: ["Estudia","Pedro","Nada","El"] },
    { pista: "Sustantivo abstracto", correcta: "Libertad", opciones: ["Mesa","Perro","Libertad","Correr"] },
    { pista: "Adverbio de afirmación", correcta: "Sí", opciones: ["Casa","Sí","Correr","Azul"] },
    { pista: "Palabra con significado léxico", correcta: "Montaña", opciones: ["Y","En","El","Montaña"] },
    { pista: "Adjetivo en: 'La flor roja'", correcta: "Roja", opciones: ["Flor","Roja","La","Nada"] },
    { pista: "Verbo en: 'Ellos comen'", correcta: "Comen", opciones: ["Ellos","Comen","Nada","El"] },
    { pista: "Adverbio de negación", correcta: "No", opciones: ["Casa","No","Correr","Azul"] },
    { pista: "Pronombre demostrativo", correcta: "Ese", opciones: ["Ese","Mesa","Bonito","Correr"] },
    { pista: "Preposición", correcta: "Contra", opciones: ["Perro","Contra","Azul","Correr"] },
    { pista: "Conjunción", correcta: "Aunque", opciones: ["Casa","Aunque","Bonito","Rápido"] },
    { pista: "Sujeto en: 'Los perros ladran'", correcta: "Perros", opciones: ["Ladran","Perros","Los","Nada"] },
    { pista: "Sustantivo concreto", correcta: "Mesa", opciones: ["Amor","Mesa","Correr","Felicidad"] },
    { pista: "Adverbio de modo", correcta: "Rápidamente", opciones: ["Correr","Mesa","Rápidamente","Bonito"] },
    { pista: "Palabra con significado propio", correcta: "Río", opciones: ["Y","En","El","Río"] }
];

let preguntasDificil = [
    { pista: "Núcleo del predicado en: 'Juan corre rápido'", correcta: "Corre", opciones: ["Juan","Rápido","Corre","El"] },
    { pista: "Palabra con significado figurado", correcta: "Serpiente", opciones: ["Mesa","Libro","Serpiente","Silla"] },
    { pista: "Determinante posesivo", correcta: "Mi", opciones: ["Correr","Azul","Mi","Rápido"] },
    { pista: "Palabra con varios significados", correcta: "Banco", opciones: ["Perro","Banco","Azul","Correr"] },
    { pista: "Complemento directo en: 'Juan come manzanas'", correcta: "Manzanas", opciones: ["Juan","Come","Manzanas","El"] },
    { pista: "Sustantivo colectivo", correcta: "Manada", opciones: ["Perro","Manada","Correr","Azul"] },
    { pista: "Verbo en subjuntivo", correcta: "Corra", opciones: ["Corre","Corrió","Corra","Correr"] },
    { pista: "Adverbio de modo", correcta: "Bien", opciones: ["Casa","Perro","Bien","Rápido"] },
    { pista: "Interjección", correcta: "Wow", opciones: ["Casa","Wow","Correr","Azul"] },
    { pista: "Sujeto implícito en: 'Corremos en el parque'", correcta: "Nosotros", opciones: ["Parque","Corremos","Nosotros","En"] },
    { pista: "Núcleo del sujeto en: 'El perro ladra'", correcta: "Perro", opciones: ["El","Perro","Ladra","Nada"] },
    { pista: "Palabra con sentido connotativo", correcta: "Zorro", opciones: ["Mesa","Zorro","Silla","Libro"] },
    { pista: "Determinante demostrativo", correcta: "Ese", opciones: ["Correr","Azul","Ese","Rápido"] },
    { pista: "Palabra homónima", correcta: "Vino", opciones: ["Perro","Azul","Vino","Correr"] },
    { pista: "Complemento indirecto en: 'Le di un regalo a Ana'", correcta: "Ana", opciones: ["Le","Regalo","Ana","Di"] },
    { pista: "Sustantivo individual", correcta: "Oveja", opciones: ["Manada","Oveja","Correr","Azul"] },
    { pista: "Verbo en imperativo", correcta: "Corre", opciones: ["Corre","Corrió","Correr","Corra"] },
    { pista: "Adverbio de cantidad", correcta: "Mucho", opciones: ["Casa","Perro","Mucho","Rápido"] },
    { pista: "Interjección de sorpresa", correcta: "Oh", opciones: ["Casa","Oh","Correr","Azul"] },
    { pista: "Sujeto implícito en: 'Voy al cine'", correcta: "Yo", opciones: ["Cine","Voy","Yo","Al"] },
    { pista: "Núcleo del sujeto en: 'La casa blanca es grande'", correcta: "Casa", opciones: ["La","Casa","Blanca","Grande"] },
    { pista: "Palabra con sentido figurado", correcta: "León", opciones: ["Mesa","León","Silla","Libro"] },
    { pista: "Determinante artículo", correcta: "El", opciones: ["Correr","Azul","El","Rápido"] },
    { pista: "Palabra polisémica", correcta: "Llama", opciones: ["Perro","Llama","Azul","Correr"] },
    { pista: "Complemento circunstancial en: 'Corre en el parque'", correcta: "Parque", opciones: ["Corre","En","Parque","Nada"] },
    { pista: "Sustantivo colectivo", correcta: "Equipo", opciones: ["Jugador","Equipo","Correr","Azul"] },
    { pista: "Verbo en pretérito", correcta: "Cantó", opciones: ["Canta","Cantó","Cantar","Cantando"] },
    { pista: "Adverbio de duda", correcta: "Quizá", opciones: ["Casa","Perro","Quizá","Rápido"] },
    { pista: "Interjección de dolor", correcta: "Ay", opciones: ["Casa","Ay","Correr","Azul"] },
    { pista: "Sujeto implícito en: 'Llegamos tarde'", correcta: "Nosotros", opciones: ["Tarde","Llegamos","Nosotros","Nada"] },
    { pista: "Núcleo del predicado en: 'Ellos estudian mucho'", correcta: "Estudian", opciones: ["Ellos","Mucho","Estudian","Nada"] },
    { pista: "Palabra con doble significado", correcta: "Cura", opciones: ["Mesa","Cura","Silla","Libro"] },
    { pista: "Determinante posesivo", correcta: "Tu", opciones: ["Correr","Azul","Tu","Rápido"] },
    { pista: "Palabra homógrafa", correcta: "Sal", opciones: ["Perro","Sal","Azul","Correr"] },
    { pista: "Complemento directo en: 'Leo libros'", correcta: "Libros", opciones: ["Leo","Libros","Nada","El"] },
    { pista: "Sustantivo individual", correcta: "Árbol", opciones: ["Bosque","Árbol","Correr","Azul"] },
    { pista: "Verbo en futuro", correcta: "Correré", opciones: ["Corre","Corrió","Correré","Correr"] },
    { pista: "Adverbio de cantidad", correcta: "Poco", opciones: ["Casa","Perro","Poco","Rápido"] },
    { pista: "Interjección de sorpresa", correcta: "Eh", opciones: ["Casa","Eh","Correr","Azul"] },
    { pista: "Sujeto implícito en: 'Estudio mucho'", correcta: "Yo", opciones: ["Mucho","Estudio","Yo","Nada"] }
];

let preguntas = [];
let indice = 0;
let puntos = 0;
let intervalo = null;
let bloqueado = false;

let sonidoCorrecto = document.getElementById("correcto");
let sonidoIncorrecto = document.getElementById("incorrecto");
let sonidoTimer = document.getElementById("warning");

// 🔥 CONFIGURACIÓN (puedes cambiar esto)
const TOTAL_PREGUNTAS = {
    facil: 10,
    medio: 10,
    dificil: 8
};

function mezclar(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

window.onload = () => {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("juego").classList.add("hidden");
};

function iniciarJuego() {
    let nombre = document.getElementById("nombre").value;
    if (!nombre) return alert("Pon tu nombre");

    nombreJugador = nombre;
    dificultad = document.getElementById("dificultad").value;

    let banco = [];

    if (dificultad === "facil") banco = preguntasFacil;
    if (dificultad === "medio") banco = preguntasMedio;
    if (dificultad === "dificil") banco = preguntasDificil;

    // 🔥 AQUÍ ESTÁ LA CLAVE
    let total = TOTAL_PREGUNTAS[dificultad];

    preguntas = mezclar([...banco]).slice(0, total);

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
