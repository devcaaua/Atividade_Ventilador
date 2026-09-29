var botao = document.getElementById("botao");
var statusTexto = document.getElementById("status");
var grade = document.getElementById("grade-ventilador");

var btnV1 = document.getElementById("btn-v1");
var btnV2 = document.getElementById("btn-v2");
var btnV3 = document.getElementById("btn-v3");

var ligado = false;

botao.addEventListener("click", function() {
    if (ligado == false) {
        ligado = true;
        botao.innerText = "Desligar";
        statusTexto.innerText = "Status: Ligado";
        grade.classList.add("vel1");
    } else {
        ligado = false;
        botao.innerText = "Ligar";
        statusTexto.innerText = "Status: Desligado";
        grade.classList.remove("vel1", "vel2", "vel3");
    }
});

btnV1.addEventListener("click", function() {
    if (ligado == true) {
        grade.classList.remove("vel1", "vel2", "vel3");
        grade.classList.add("vel1");
    }
});

btnV2.addEventListener("click", function() {
    if (ligado == true) {
        grade.classList.remove("vel1", "vel2", "vel3");
        grade.classList.add("vel2");
    }
});

btnV3.addEventListener("click", function() {
    if (ligado == true) {
        grade.classList.remove("vel1", "vel2", "vel3");
        grade.classList.add("vel3");
    }
});
