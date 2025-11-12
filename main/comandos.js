// VARIÁVEIS
const botaoajuda = document.getElementById("btnAjuda");
const secaoAjuda = document.getElementById("secaoAjuda");

const campoComando = document.getElementById("digiteComando");

const btnSinosauropteryx = document.getElementById("btnSinosauropteryx");

// SEÇÃO DE AJUDA
// 1. BOTÃO DE "AJUDA"
function alternarAjuda() {
    if (secaoAjuda.style.display === "none" || secaoAjuda.style.display === "") {
        secaoAjuda.style.display = "block";
    } else {
        secaoAjuda.style.display = "none";
    }
}
btnAjuda.addEventListener("click", alternarAjuda);

// SEÇÃO DE ANIMAIS DESBLOQUEADOS
if(localStorage.getItem("sinosauropteryxDesbloqueado") === "true") {
    btnSinosauropteryx.style.display = "block";
}

// SEÇÃO DE COMANDOS
campoComando.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        const comando = (campoComando.value || '').trim().toLowerCase();
        if (comando === "ajuda") {
            secaoAjuda.style.display = "block";

            if(!localStorage.getItem("sinosauropteryxDesbloqueado")) {
                console.log("Novo animal descoberto: Sinosauropteryx");
                alert("Você desbloqueou um novo animal: Sinosauropteryx!");
                btnSinosauropteryx.style.display = "block";
                localStorage.setItem("sinosauropteryxDesbloqueado", "true");
            }
        } else if(comando === "sair") {
            secaoAjuda.style.display = "none";
        }
        campoComando.value = "";
    }
});