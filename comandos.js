// VARIÁVEIS
const botaoajuda = document.getElementById("btnAjuda");

let qtdAnimaisDesbloqueados = parseInt(localStorage.getItem("qtdAnimaisDesbloqueados") || "0", 10);

const secaoAjuda = document.getElementById("secaoAjuda");
const secaoOpcao = document.getElementById("secaoOpcao");
const paragrafoReset = document.getElementById("paragrafoReset");
const paragrafoConquistas = document.getElementById("paragrafoConquistas");
const secaoConquistas = document.getElementById("secaoConquistas");

const campoComando = document.getElementById("digiteComando");

const btnVelociraptor = document.getElementById("btnVelociraptor");
const btnSinosauropteryx = document.getElementById("btnSinosauropteryx");
const btnBrontossauro = document.getElementById("btnBrontossauro");

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
    // MESOZÓICO
    velociraptor: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Velociraptor",
        descricaoBasica: "Um pequeno terópode carnívoro, ágil e (possivelmente) inteligente, famoso por suas garras em forma de foice.",
        era: "Mesozoico",
        periodo: "Cretáceo Superior",
        regiao: "Ásia Central (atual Mongólia e China)",
        altura: "cerca de 0,5 metros até o quadril",
        comprimento: "aprox. 2 metros",
        peso: "15-20 kg",
        dieta: "Carnívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Theropoda (clado)",
        familia: "Dromaeosauridae - Eudromaeosauria (clado) - Velociraptorinae (subfamília)",
        genero: "Velociraptor",
        especie: "Velociraptor mongoliensis | Velociraptor osmolskae"
    },
    sinosauropteryx: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Sinosauropteryx",
        descricaoBasica: "Um pequeno dinossauro terópode coberto por penas simples, conhecido por ser o primeiro dinossauro não aviário descoberto com evidências claras de plumagem.",
        era: "Mesozoico",
        periodo: "Cretáceo Inferior",
        regiao: "China (província de Liaoning)",
        altura: "aprox. 0,3-0,4 metros até o quadril",
        comprimento: "cerca de 1 metro",
        peso: "2-5 kg",
        dieta: "Carnívoro/Insectívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Theropoda (clado)",
        familia: "Compsognathidae)",
        genero: "Sinosauropteryx",
        especie: "Sinosauropteryx prima"
    },
    brontossauro: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Brontossauro",
        descricaoBasica: "Um grande dinossauro herbívoro, conhecido por seu pescoço longo e cauda longa, que viveu durante o período Jurássico.",
        era: "Mesozoico",
        periodo: "Jurássico Superior",
        regiao: "América do Norte",
        altura: "cerca de 4,5 metros até o quadril",
        comprimento: "aprox. 22 metros",
        peso: "15-20 toneladas",
        dieta: "Herbívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Sauropodomorpha (clado) - Sauropoda (clado)",
        familia: "Diplodocoidea (Superfamília) - Diplodocidae (Família) - Apatosaurinae (Subfamília)",
        genero: "Brontosaurus",
        especie: "Apatosaurus excelsus | Brontosaurus parvus | Brontosaurus yahnahpin"
    },
    // CENOZÓICO
    smilodon: {
        eraCategoria: "cenozoico",
        nomeDoAnimal: "Dentes-de-sabre",
        descricaoBasica: "Um grande felino conhecido por seus longos caninos superiores em forma de sabre, que viveu durante o Pleistoceno.",
        era: "Cenozoico",
        periodo: "Pleistoceno inferior - Holoceno inferior",
        regiao: "América do Norte e América do Sul",
        altura: "cerca de 1 metro até os ombros",
        comprimento: "aprox. 1,5-2 metros",
        peso: "160-280 kg",
        dieta: "Carnívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Mammalia",
        ordem: "Carnivora",
        familia: "Felidae - Machairodontinae (Subfamília) - Smilodontini (Tribo)",
        genero: "Smilodon",
        especie: "Smilodon fatalis | Smilodon populator | Smilodon gracilis"
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
localStorage.setItem("velociraptorDesbloqueado", "true"); // sempre desbloqueado
if (localStorage.getItem("sinosauropteryxDesbloqueado") === "true") {
    btnSinosauropteryx.style.display = "block";
}
if (localStorage.getItem("brontossauroDesbloqueado") === "true") {
    btnBrontossauro.style.display = "block";
}
if (localStorage.getItem("smilodonDesbloqueado") === "true") {
    btnSmilodon.style.display = "block";
}
// SEÇÃO DE PARÁGRAFOS E COMANDOS DESBLOQUEADOS
if (localStorage.getItem("paragrafoResetDesbloqueado") === "true") {
    paragrafoReset.style.display = "block";
}
if (localStorage.getItem("paragrafoConquistasDesbloqueado") === "true") {
    paragrafoConquistas.style.display = "block";
}

// SEÇÃO DE COMANDOS
campoComando.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const comando = (campoComando.value || '').trim().toLowerCase();
        if (comando === "ajuda") {
            secaoAjuda.style.display = "block";
            secaoOpcao.style.display = "none";

            if (!localStorage.getItem("sinosauropteryxDesbloqueado")) {
                console.log("Novo animal descoberto: Sinosauropteryx");
                alert("Você desbloqueou um novo animal: Sinosauropteryx!");
                desbloquearAnimal("sinosauropteryx", btnSinosauropteryx);
            }

        } else if (comando === "sair") {
            secaoAjuda.style.display = "none";
            secaoOpcao.style.display = "none";
            secaoConquistas.style.display = "none";

        } else if (comando === "reset" || comando === "reiniciar" || comando === "resetar") {
            if (localStorage.getItem("paragrafoResetDesbloqueado") === "true") {
                console.log("Local storage limpo.");
                alert("Progresso reiniciado! Recarregue a página para aplicar as mudanças.");
                localStorage.clear();
            } else {
                console.log("Comando 'reset' ainda não desbloqueado.");
                alert("Você ainda não desbloqueou esse comando. Descubra algum animal primeiro!");
            }
        } else if (comando === "conquistas") {
            if (localStorage.getItem("paragrafoConquistasDesbloqueado") === "true" && localStorage.getItem("secaoConquistasDesbloqueado") === "true") {
                atualizarConquistas();
                secaoConquistas.style.display = "block";
                secaoOpcao.style.display = "none";
                secaoAjuda.style.display = "none";
            }
        }
        
        else if (animais[comando]) {
            mostrarAnimal(comando);

            if (comando === "brontossauro" && !localStorage.getItem("brontossauroDesbloqueado")) {
                console.log("Novo animal descoberto: Brontossauro");
                alert("Você desbloqueou um novo animal: Brontossauro!");
                desbloquearAnimal("brontossauro", btnBrontossauro);
            }
        }

        campoComando.value = "";
    }
});

// FUNÇÃO PARA DESBLOQUEAR ANIMAIS E PARÁGRAFOS
function desbloquearAnimal(nome, botao) {
    const chaveFlag = nome + "Desbloqueado";

    // só conta se for a primeira vez
    if (!localStorage.getItem(chaveFlag)) {
        localStorage.setItem(chaveFlag, "true");
        qtdAnimaisDesbloqueados++;
        localStorage.setItem("qtdAnimaisDesbloqueados", String(qtdAnimaisDesbloqueados));
    }

    if (botao) {
        botao.style.display = "block";
    }

    // se tiver pelo menos 1 animal desbloqueado → libera parágrafo de reset
    if (qtdAnimaisDesbloqueados >= 1 && !localStorage.getItem("paragrafoResetDesbloqueado")) {
        console.log("Parágrafo de reset desbloqueado.");
        alert("Você desbloqueou o comando reset!");
        localStorage.setItem("paragrafoResetDesbloqueado", "true");
        paragrafoReset.style.display = "block";
    }
    
    // se tiver pelo menos 2 animais desbloqueados → libera parágrafo/seção de conquistas
    if (qtdAnimaisDesbloqueados >= 2 && !localStorage.getItem("secaoConquistasDesbloqueado")) {
        console.log("Parágrafo/Seção de conquistas desbloqueado.");
        alert("Você desbloqueou a seção de conquistas!");
        localStorage.setItem("paragrafoConquistasDesbloqueado", "true");
        localStorage.setItem("secaoConquistasDesbloqueado", "true");
        paragrafoConquistas.style.display = "block";
    }
}

// SEÇÃO DE CONQUISTAS
function atualizarConquistas() {
    const eras = {
        paleozoico: {
            total: 0,
            desbloqueados: [],
            elQtdTotal: document.getElementById("paleoTotalQtd"),
            elQtdDesbloqueados: document.getElementById("paleoDesbloqueadosQtd"),
            elQtdRestantes: document.getElementById("paleoRestantesQtd"),
            elListaDesbloqueados: document.getElementById("paleoDesbloqueadosLista")
        },
        mesozoico: {
            total: 0,
            desbloqueados: [],
            elQtdTotal: document.getElementById("mesoTotalQtd"),
            elQtdDesbloqueados: document.getElementById("mesoDesbloqueadosQtd"),
            elQtdRestantes: document.getElementById("mesoRestantesQtd"),
            elListaDesbloqueados: document.getElementById("mesoDesbloqueadosLista")
        },
        cenozoico: {
            total: 0,
            desbloqueados: [],
            elQtdTotal: document.getElementById("cenoTotalQtd"),
            elQtdDesbloqueados: document.getElementById("cenoDesbloqueadosQtd"),
            elQtdRestantes: document.getElementById("cenoRestantesQtd"),
            elListaDesbloqueados: document.getElementById("cenoDesbloqueadosLista")
        }
    };

    for (const chave in animais) {
        if(!animais.hasOwnProperty(chave)) continue;
        const animal = animais[chave];
        const eraCat = animal.eraCategoria;

        if (!eraCat || !eras[eraCat]) continue;

        const grupo = eras[eraCat];
        grupo.total++;

        const chaveFlag = chave + "Desbloqueado";
        const desbloqueado = localStorage.getItem(chaveFlag) === "true";

        if (desbloqueado) {
            grupo.desbloqueados.push(animal.nomeDoAnimal);
        }
    }

    Object.keys(eras).forEach(eraKey => {
        const grupo = eras[eraKey];

        const total = grupo.total;
        const desbloq = grupo.desbloqueados.length;
        const restantes = total - desbloq;

        if (grupo.elQtdTotal) {
            grupo.elQtdTotal.textContent = String(total);
        }
        if (grupo.elQtdDesbloqueados) {
            grupo.elQtdDesbloqueados.textContent = String(desbloq);
        }
        if (grupo.elQtdRestantes) {
            grupo.elQtdRestantes.textContent = String(restantes >= 0 ? restantes : 0);
        }

        if (grupo.elListaDesbloqueados) {
            grupo.elListaDesbloqueados.innerHTML = "";

            if (desbloq === 0) {
                const li = document.createElement("li");
                li.textContent = "Nenhum ainda.";
                grupo.elListaDesbloqueados.appendChild(li);
            } else {
                grupo.desbloqueados.forEach(nome => {
                    const li = document.createElement("li");
                    li.textContent = nome;
                    grupo.elListaDesbloqueados.appendChild(li)
                });
            }
        }
    });
}

//SEÇÃO DOS ANIMAIS
// PREENCHER OS DADOS DO ANIMAL
function mostrarAnimal(chave) {
    const animal = animais[chave.toLowerCase()];
    if (!animal) return; // se não existir, não faz nada

    secaoAjuda.style.display = "none";
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
    if(!localStorage.getItem("brontossauroDesbloqueado")) {
        console.log("Tente digitar o nome de um grande dinossauro herbívoro do Jurássico...");
    }
});
btnBrontossauro.addEventListener("click", () => {
    mostrarAnimal("brontossauro");
});