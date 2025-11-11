// SESSÃO DE AJUDA
const botaoajuda = document.getElementById("btnAjuda");
const secaoAjuda = document.getElementById("secaoAjuda");

botaoajuda.addEventListener("click", () => {
    if (secaoAjuda.style.display === "none" || secaoAjuda.style.display === "") {
        secaoAjuda.style.display = "block";
    } else {
        secaoAjuda.style.display = "none";
    }
});