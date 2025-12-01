// VARIÁVEL DO BOTÃO DE AJUDA
const botaoajuda = document.getElementById("btnAjuda");

// CONTADOR DE ANIMAIS DESBLOQUEADOS
let qtdAnimaisDesbloqueados = parseInt(localStorage.getItem("qtdAnimaisDesbloqueados") || "0", 10);

//VARIÁVEIS DE SEÇÕES E PARÁGRAFOS
const secaoAjuda = document.getElementById("secaoAjuda");
const secaoOpcao = document.getElementById("secaoOpcao");
const paragrafoReset = document.getElementById("paragrafoReset");
const paragrafoConquistas = document.getElementById("paragrafoConquistas");
const secaoConquistas = document.getElementById("secaoConquistas");

// VARIÁVEIS DE ERROS
const erroMsg = document.getElementById("erro");
const erroMsg2 = document.getElementById("erro2");
let erroTimeout = null;

// VARIÁVEL DE DIGITAÇÃO
const campoComando = document.getElementById("digiteComando");

// BOTÕES DOS ANIMAIS
const btnVelociraptor = document.getElementById("btnVelociraptor");
const btnSinosauropteryx = document.getElementById("btnSinosauropteryx");
const btnBrontossauro = document.getElementById("btnBrontossauro");

// VARIÁVEIS DAS INFORMAÇÕES DOS ANIMAIS
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
const elDataDescoberta = document.getElementById("dataDescoberta");
const elDescobridor = document.getElementById("descobridor");
const elFormacao = document.getElementById("formacao");

// OBJETOS DOS ANIMAIS
const animais = {
    // MESOZÓICO
    velociraptor: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Velociraptor",
        descricaoBasica: "Um pequeno terópode carnívoro, ágil e (possivelmente) inteligente, famoso por suas garras em forma de foice.",
        era: "Mesozoico",
        periodo: "Cretáceo Superior (84-85 milhões de anos atrás)",
        regiao: "Ásia Central (atual Mongólia e China)",
        altura: "aprox. 1 metro",
        comprimento: "aprox. 2 metros",
        peso: "15-20 kg",
        dieta: "Carnívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Theropoda (clado)",
        familia: "Dromaeosauridae - Eudromaeosauria (clado) - Velociraptorinae (subfamília)",
        genero: "Velociraptor",
        especie: "Velociraptor mongoliensis | Velociraptor osmolskae",
        dataDescoberta: "11 de agosto de 1924",
        descobridor: "Peter Kaisen",
        formacao: "Formação Djadochta, Deserto de Gobi, Mongólia"
    },
    sinosauropteryx: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Sinosauropteryx",
        descricaoBasica: "Um pequeno dinossauro terópode coberto por penas simples, conhecido por ser o primeiro dinossauro não aviário descoberto com evidências claras de plumagem.",
        era: "Mesozoico",
        periodo: "Cretáceo Inferior (124,6-122 milhões de anos atrás)",
        regiao: "China (província de Liaoning)",
        altura: "aprox. 0,3-0,4 metros (30-40 centímetros)",
        comprimento: "aprox. 1 metro",
        peso: "2-5 kg",
        dieta: "Carnívoro/Insectívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Theropoda (clado)",
        familia: "Compsognathidae",
        genero: "Sinosauropteryx",
        especie: "Sinosauropteryx prima - Sinosauropteryx lingyuanensis",
        dataDescoberta: "Agosto de 1996",
        descobridor: "Li Yumin",
        formacao: "Formação Yixian, Província de Liaoning, China"
    },
    brontossauro: {
        eraCategoria: "mesozoico",
        nomeDoAnimal: "Brontossauro",
        descricaoBasica: "Um grande dinossauro herbívoro, conhecido por seu pescoço longo e cauda longa, que viveu durante o final do período Jurássico.",
        era: "Mesozoico",
        periodo: "Jurássico Superior (156,3-146,8 milhões de anos atrás)",
        regiao: "América do Norte",
        altura: "aprox. 8-10 metros (podia ser maior dependendo da posição do pescoço)",
        comprimento: "aprox. 22 metros",
        peso: "15-20 toneladas",
        dieta: "Herbívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Sauropodomorpha (clado) - Sauropoda (clado)",
        familia: "Diplodocoidea (Superfamília) - Diplodocidae (Família) - Apatosaurinae (Subfamília)",
        genero: "Brontosaurus",
        especie: "Apatosaurus excelsus | Brontosaurus parvus | Brontosaurus yahnahpin",
        dataDescoberta: "1879",
        descobridor: "Othniel Charles Marsh",
        formacao: "Formação Morrison, Estados Unidos"
    },
    // CENOZÓICO
    smilodon: {
        eraCategoria: "cenozoico",
        nomeDoAnimal: "Dentes-de-sabre",
        descricaoBasica: "Um grande felino conhecido por seus longos caninos superiores em forma de sabre, que viveu durante o Pleistoceno.",
        era: "Cenozoico",
        periodo: "Pleistoceno inferior - Holoceno inferior (2,5 milhões e 10 mil anos atrás)",
        regiao: "América do Norte e América do Sul",
        altura: "aprox. 1,20 metros até os ombros",
        comprimento: "aprox. 2 metros",
        peso: "220-436 kg",
        dieta: "Carnívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Mammalia",
        ordem: "Carnivora",
        familia: "Felidae - Machairodontinae (Subfamília) - Smilodontini (Tribo)",
        genero: "Smilodon",
        especie: "Smilodon populator | Smilodon fatalis | Smilodon gracilis",
        dataDescoberta: "1837",
        descobridor: "Peter Wilhelm Lund",
        formacao: "Lagoa Santa, Brasil - La Brea, Estados Unidos - Caverna Port Kennedy, Estados Unidos"
    }
};

// BOTÃO DE "AJUDA"
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

// FUNÇÃO DE COMANDOS
campoComando.addEventListener("keydown", (event) => { // "Escuta" a tecla pressionada no campo de comando
    if (event.key === "Enter") { // O código só roda o código se o usuário pressionar Enter
        const comando = (campoComando.value || '').trim().toLowerCase(); // Lê, limpa e normaliza o comando (tudo que for digitado será interpretado e normalizados com letras minúsculas)
        if (comando === "ajuda") { // Se o comando for "ajuda", a seção ajuda será mostrada e um Sinosauropteryx será desbloqueado
            secaoAjuda.style.display = "block";
            secaoOpcao.style.display = "none";

            if (!localStorage.getItem("sinosauropteryxDesbloqueado")) { // Verifica se o usuário já tem o Sinosauropteryx desbloqueado, caso ele não tenha, será executado o código abaixo
                console.log("Novo animal descoberto: Sinosauropteryx");
                alert("Você desbloqueou um novo animal: Sinosauropteryx!");
                desbloquearAnimal("sinosauropteryx", btnSinosauropteryx);
            }

        } else if (comando === "sair") { // Se o comando for "sair", todas as caixas de texto serão fechadas
            secaoAjuda.style.display = "none";
            secaoOpcao.style.display = "none";
            secaoConquistas.style.display = "none";

        } else if (comando === "reset" || comando === "reiniciar" || comando === "resetar") { // Se o comando for "reset", "reiniciar" ou "resetar", todo o localStorage será limpo
            if (localStorage.getItem("paragrafoResetDesbloqueado") === "true") { // Apenas vai funcionar se o usuário já tiver desbloqueado o comando em questão
                console.log("Local storage limpo.");
                alert("Progresso reiniciado! Recarregue a página para aplicar as mudanças.");
                localStorage.clear();
            } else {
                console.log("Descubra pelo menos um animal para desbloquear esse comando.");
                mostrarErro2();
            }
        } else if (comando === "conquistas" || comando == "conquista") { // Se o camando for "conquistas", serão mostradas todos os animais bloqueados e já desbloqueados
            if (localStorage.getItem("paragrafoConquistasDesbloqueado") === "true" && localStorage.getItem("secaoConquistasDesbloqueado") === "true") { // Apenas vai funcionar se o usuário já tiver desbloquado o comando em questão
                atualizarConquistas(); // Chama a função que atualiza as conquistas
                secaoConquistas.style.display = "block";
                secaoOpcao.style.display = "none";
                secaoAjuda.style.display = "none";
            } else {
                console.log("Você precisa descobrir mais animais para desbloquear esse comando.");
                mostrarErro2();
            }
        } else if (animais[comando]) { // Verifica se o comando for um animal qualquer (que exista no projeto)
            const chaveFlag = comando + "Desbloqueado";
            const jaDesbloqueado = localStorage.getItem(chaveFlag) === "true"; // Atribui a informação do animal estar desbloqueado a uma variável

            const sempreDisponivel = (comando === "velociraptor" || comando === "brontossauro"); // Define quais animais estarão sempre disponíveis

            if (!jaDesbloqueado && !sempreDisponivel) { // Se o animal ainda não foi desbloqueado ou não for sempre disponível, retorna erro
                mostrarErro2();
            } else { // Caso contrário, será mostrada a caixa de informações do animal em questão
                mostrarAnimal(comando); // Mostra a caixa de informações do animal

                if (comando === "brontossauro" && !jaDesbloqueado) { // Se o comando digitado for "Brontossauro" e se ele ainda não estiver desbloqueado, esse código abaixo será executado
                    console.log("Novo animal descoberto: Brontossauro");
                    alert("Você desbloqueou um novo animal: Brontossauro!");
                    desbloquearAnimal("brontossauro", btnBrontossauro);
                }
            }
        } else {
            mostrarErro();
        }

        campoComando.value = ""; // Após a execução de um comando, a barra de digitação é limpa
    }
});

// FUNÇÃO DE MENSAGENS DE ERRO
// ERRO DE DIGITAÇÃO/COMANDO OU ANIMAL NÃO EXISTE
function mostrarErro() {
    if (erroTimeout) clearTimeout(erroTimeout);
    erroMsg.style.display = "block";

    erroTimeout = setTimeout(() => {
        erroMsg.style.display = "none";
    }, 5000);
}
// ANIMAL OU COMANDO AINDA NÃO DESBLOQUEADO DIGITADO
function mostrarErro2() {
    if (erroTimeout) clearTimeout(erroTimeout);
    erroMsg2.style.display = "block";

    erroTimeout = setTimeout(() => {
        erroMsg2.style.display = "none";
    }, 5000);
}

// FUNÇÃO PARA DESBLOQUEAR ANIMAIS E COMANDOS
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

    // se tiver pelo menos 1 animal desbloqueado -> libera parágrafo de reset
    if (qtdAnimaisDesbloqueados >= 1 && !localStorage.getItem("paragrafoResetDesbloqueado")) {
        console.log("Parágrafo de reset desbloqueado.");
        alert("Você desbloqueou o comando reset!");
        localStorage.setItem("paragrafoResetDesbloqueado", "true");
        paragrafoReset.style.display = "block";
    }
    
    // se tiver pelo menos 2 animais desbloqueados -> libera parágrafo/seção de conquistas
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

// PREENCHER OS DADOS DO ANIMAL
function mostrarAnimal(chave) {
    const animal = animais[chave.toLowerCase()];
    if (!animal) return; // SE O ANIMAL NÃO EXISTIR, NADA ACONTECE

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
    elDataDescoberta.innerText = animal.dataDescoberta;
    elDescobridor.innerText = animal.descobridor;
    elFormacao.innerText = animal.formacao;
}

// BOTÕES DOS ANIMAIS
btnVelociraptor.addEventListener("click", () => {
    mostrarAnimal("velociraptor");
});
btnSinosauropteryx.addEventListener("click", () => {
    mostrarAnimal("sinosauropteryx");
    if(!localStorage.getItem("brontossauroDesbloqueado")) {
        console.log("Tente digitar o nome de um grande dinossauro herbívoro do Jurássico");
    }
});
btnBrontossauro.addEventListener("click", () => {
    mostrarAnimal("brontossauro");
});