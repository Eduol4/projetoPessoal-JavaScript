// VARIÁVEIS
const botaoajuda = document.getElementById("btnAjuda");

const secaoAjuda = document.getElementById("secaoAjuda");
const secaoOpcao = document.getElementById("secaoOpcao");

const campoComando = document.getElementById("digiteComando");

const btnVelociraptor = document.getElementById("btnVelociraptor");
const btnSinosauropteryx = document.getElementById("btnSinosauropteryx");

const elNomeDoAnimal = document.getElementById("nomeDoAnimal");
const elDescricaoBasica = document.getElementById("descricaoBasica");
const elEra = document.getElementById("era");
const elPeriodo = document.getElementById("periodo");
const elRegiao = document.getElementById("regiao");
const elAltura = document.getElementById("altura");
const elComprimento = document.getElementById("comprimento");
const elPeso = document.getElementById("peso");
const elDieta = document.getElementById("dieta");
const elReino = document.getElementById("reino");
const elFilo = document.getElementById("filo");
const elClasse = document.getElementById("classe");
const elOrdem = document.getElementById("ordem");
const elFamilia = document.getElementById("familia");
const elGenero = document.getElementById("genero");
const elEspecie = document.getElementById("especie");

// OBJETOS DOS ANIMAIS
const animais = {
    velociraptor: {
        nomeDoAnimal: "Velociraptor",
        descricaoBasica: "Um pequeno terópode carnívoro, ágil e (possivelmente) inteligente, famoso por suas garras em forma de foice.",
        era: "Mesozóica",
        periodo: "Cretáceo Superior",
        regiao: "Ásia Central (atual Mongólia e China)",
        altura: "cerca de 0,5 metros até o quadril",
        comprimento: "aprox. 2 metros",
        peso: "15-20 kg",
        dieta: "Carnívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) / Dinosauria (clado)",
        ordem: "Saurischia",
        familia: "Dromaeosauridae",
        genero: "Velociraptor",
        especie: "Velociraptor mongoliensis"
    },
    sinosauropteryx: {
        nomeDoAnimal: "Sinosauropteryx",
        descricaoBasica: "Um pequeno dinossauro terópode coberto por penas simples, conhecido por ser o primeiro dinossauro não aviário descoberto com evidências claras de plumagem.",
        era: "Mesozóica",
        periodo: "Cretáceo Inferior",
        regiao: "China (província de Liaoning)",
        altura: "aprox. 0,3-0,4 metros até o quadril",
        comprimento: "cerca de 1 metro",
        peso: "2-5 kg",
        dieta: "Carnívoro/Insectívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) / Dinosauria (clado)",
        ordem: "Saurischia",
        familia: "Compsognathidae (associação comum)",
        genero: "Sinosauropteryx",
        especie: "Sinosauropteryx prima"
    }
};

// SEÇÃO DE AJUDA
// 1. BOTÃO DE "AJUDA"
function alternarAjuda() {
    if (secaoAjuda.style.display === "none" || secaoAjuda.style.display === "") {
        secaoAjuda.style.display = "block";
        secaoOpcao.style.display = "none";
    } else {
        secaoAjuda.style.display = "none";
    }
}
botaoAjuda.addEventListener("click", alternarAjuda);

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
            secaoOpcao.style.display = "none";
        } else if(animais[comando]) {
            mostrarAnimal(comando);
        }
        campoComando.value = "";
    }
});

//SEÇÃO DOS ANIMAIS
// PREENCHER OS DADOS DO ANIMAL
function mostrarAnimal(chave) {
    const animal = animais[chave.toLowerCase()];
    if (!animal) return; // se não existir, não faz nada

    // garante que a ajuda some
    secaoAjuda.style.display = "none";
    // mostra a seção de informações do animal
    secaoOpcao.style.display = "block";

    elNomeDoAnimal.innerText = animal.nomeDoAnimal;
    elDescricaoBasica.innerText = animal.descricaoBasica;
    elEra.innerText = animal.era;
    elPeriodo.innerText = animal.periodo;
    elRegiao.innerText = animal.regiao;
    elAltura.innerText = animal.altura;
    elComprimento.innerText = animal.comprimento;
    elPeso.innerText = animal.peso;
    elDieta.innerText = animal.dieta;
    elReino.innerText = animal.reino;
    elFilo.innerText = animal.filo;
    elClasse.innerText = animal.classe;
    elOrdem.innerText = animal.ordem;
    elFamilia.innerText = animal.familia;
    elGenero.innerText = animal.genero;
    elEspecie.innerText = animal.especie;
}

// BOTÕES DOS ANIMAIS
btnVelociraptor.addEventListener("click", () => {
    mostrarAnimal("velociraptor");
});

btnSinosauropteryx.addEventListener("click", () => {
    mostrarAnimal("sinosauropteryx");
});