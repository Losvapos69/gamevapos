function irAJuego() {
    document.getElementById("hub").style.display = "none";
    document.getElementById("menu").classList.remove("hidden");
}

function volverAlHub() {
    clearInterval(intervalo);
    sonidoCorrecto.pause();
    sonidoIncorrecto.pause();
    sonidoTimer.pause();
    bloqueado = true;

    document.getElementById("juego").classList.add("hidden");
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("final").classList.add("hidden");
    document.getElementById("memorama").classList.add("hidden");
    document.getElementById("progresoContainer").classList.add("hidden");

    document.getElementById("hub").style.display = "block";
    document.getElementById("progresoBar").style.width = "0%";
}
