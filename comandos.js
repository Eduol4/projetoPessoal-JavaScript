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
const btnSmilodonte = document.getElementById("btnSmilodonte");
const btnMamute = document.getElementById("btnMamute");

// VARIÁVEIS EXTRAS SOBRE DESBLOQUEIOS DE ANIMAIS
let smilodonteIntervalId = null;

// VARIÁVEIS DAS INFORMAÇÕES DOS ANIMAIS
const elNomeDoAnimal = document.getElementById("nomeDoAnimal");
const elSignificado = document.getElementById("significado");
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
        significado: "Ladrão veloz/Agarrador veloz",
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
        significado: "Primeira pena de dragão chinês",
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
        significado: "Lagarto trovão",
        descricaoBasica: "Um grande dinossauro herbívoro, conhecido por seu pescoço longo e cauda longa, que viveu durante o final do período Jurássico.",
        era: "Mesozoico",
        periodo: "Jurássico Superior (156,3-146,8 milhões de anos atrás)",
        regiao: "América do Norte",
        altura: "aprox. 8-10 metros (pode ser maior dependendo da posição do pescoço)",
        comprimento: "aprox. 22 metros",
        peso: "15-20 toneladas",
        dieta: "Herbívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Reptilia (tradicional) - Dinosauria (clado)",
        ordem: "Saurischia - Sauropodomorpha (clado) - Sauropoda (clado)",
        familia: "Diplodocoidea (Superfamília) - Diplodocidae (Família) - Apatosaurinae (Subfamília)",
        genero: "Brontosaurus",
        especie: "Brontosaurus excelsus | Brontosaurus parvus | Brontosaurus yahnahpin",
        dataDescoberta: "1879",
        descobridor: "Othniel Charles Marsh",
        formacao: "Formação Morrison, Estados Unidos"
    },
    // CENOZÓICO
    smilodonte: {
        eraCategoria: "cenozoico",
        nomeDoAnimal: "Smilodonte",
        significado: "Dente em forma de lâmina de dois gumes",
        descricaoBasica: "Um grande felino conhecido por seus longos caninos superiores em forma de sabre, que foi contemporâneo com os seres humanos.",
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
    },
    mamute: {
        eraCategoria: "cenozoico",
        nomeDoAnimal: "Mamute",
        significado: "Mamute-lanoso",
        descricaoBasica: "",
        era: "Cenozoico",
        periodo: "Pleistoceno Médio - Holoceno (300.000 e 10.000 anos atrás)",
        regiao: "América do Norte e Sibéria",
        altura: "2,67-3,49 metros até os ombros",
        comprimento: "",
        peso: "3,9-8,2 toneladas",
        dieta: "Herbívoro",
        reino: "Animalia",
        Filo: "Chordata",
        classe: "Mammalia",
        ordem: "Proboscídeos",
        familia: "Elefantíase",
        genero: "Mammuthus",
        especie: "Mammuthus primigenius",
        dataDecoberta: "1728",
        descobridor: "Hans Sloane",
        formacao: "Permafrost"
    },
    megatherium: {
        eraCategoria: "cenozoico",
        nomeDoAnimal: "Megatério",
        significado: "Besta gigante",
        descricaoBasica: "",
        era: "Cenozoico",
        periodo: "Plioceno superior - Pleistoceno superior (5 milhões e 12.000 anos atrás)",
        regiao: "América do Norte e América do Sul",
        altura: "",
        comprimento: "",
        peso: "",
        dieta: "Herbívoro",
        reino: "Animalia",
        filo: "Chordata",
        classe: "Mammalia",
        ordem: "Xenarthra",
        familia: "Megatheriidae",
        genero: "Megatherium",
        especie: "Megatherium americanum",
        dataDescoberta: "1787",
        descobridor: "Georges Cuvier",
        formacao: "Rio"
    }
};

// CASO O JOGADOR JÁ TENHA UM ANIMAL DESBLOQUEADO, O SORTEIO CONTINUA VALENDO MESMO APÓS RECARREGAR A PÁGINA
iniciarTimerSmilodonte();

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
localStorage.setItem("velociraptorDesbloqueado", "true"); // Sempre desbloqueado
if (localStorage.getItem("sinosauropteryxDesbloqueado") === "true") {
    btnSinosauropteryx.style.display = "block";
}
if (localStorage.getItem("brontossauroDesbloqueado") === "true") {
    btnBrontossauro.style.display = "block";
}
if (localStorage.getItem("smilodonteDesbloqueado") === "true") {
    btnSmilodonte.style.display = "block";
}
if (localStorage.getItem("mamuteDesbloqueado") === "true") {
    btnMamute.style.display = "block";
}
if (localStorage.getItem("megaterioDesbloqueado") === "true") {
    btnMegaterio.style.display = "block";
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
        } else if (comando === "conquistas" || comando == "conquista") { // Se o comando for "conquistas", serão mostradas todos os animais bloqueados e já desbloqueados
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

    if (!localStorage.getItem(chaveFlag)) { // Se o animal dentro de chaveFlag ainda não foi desbloqueado, roda esse código
        localStorage.setItem(chaveFlag, "true");
        qtdAnimaisDesbloqueados++; // Adiciona mais um animal desbloqueado para a contagem
        localStorage.setItem("qtdAnimaisDesbloqueados", String(qtdAnimaisDesbloqueados));
    }

    if (botao) {
        botao.style.display = "block";
    }

    // Se tiver pelo menos 1 animal desbloqueado -> libera parágrafo/comando de reset
    if (qtdAnimaisDesbloqueados >= 1 && !localStorage.getItem("paragrafoResetDesbloqueado")) {
        console.log("Parágrafo de reset desbloqueado.");
        alert("Você desbloqueou o comando reset!");
        localStorage.setItem("paragrafoResetDesbloqueado", "true");
        paragrafoReset.style.display = "block";
    }

    // Se tiver pelo menos 1 animal desbloqueado -> Inicia o timer para o desbloqueio do Smilodonte
    if (qtdAnimaisDesbloqueados >= 1) {
        iniciarTimerSmilodonte();
    }
    
    // Se tiver pelo menos 3 animais desbloqueados -> libera parágrafo/seção/comando de conquistas
    if (qtdAnimaisDesbloqueados >= 3 && !localStorage.getItem("secaoConquistasDesbloqueado")) {
        console.log("Parágrafo/Seção de conquistas desbloqueado.");
        alert("Você desbloqueou a seção de conquistas!");
        localStorage.setItem("paragrafoConquistasDesbloqueado", "true");
        localStorage.setItem("secaoConquistasDesbloqueado", "true");
        paragrafoConquistas.style.display = "block";
    }
}

// SEÇÃO DE CONQUISTAS
function atualizarConquistas() {
    const eras = { // O objeto "eras" é criado, que agrupa todas as informações necessárias por era
        paleozoico: {
            total: 0, // Conta quantos animais existem naquela era no objeto animais
            desbloqueados: [], // Acumula os nomes dos animais dessa era que já foram desbloqueados
            elQtdTotal: document.getElementById("paleoTotalQtd"), // Referência para o <span> no HTML onde é mostrado o total de animais na era
            elQtdDesbloqueados: document.getElementById("paleoDesbloqueadosQtd"), // <span> que mostra quantos já foram desbloqueados
            elQtdRestantes: document.getElementById("paleoRestantesQtd"), // <span> que mostra quantos ainda faltam
            elListaDesbloqueados: document.getElementById("paleoDesbloqueadosLista") // <ul> onde você mostra a lista de nomes dos animais desbloqueados
        },
        // Funciona da mesma forma aqui
        mesozoico: {
            total: 0,
            desbloqueados: [],
            elQtdTotal: document.getElementById("mesoTotalQtd"),
            elQtdDesbloqueados: document.getElementById("mesoDesbloqueadosQtd"),
            elQtdRestantes: document.getElementById("mesoRestantesQtd"),
            elListaDesbloqueados: document.getElementById("mesoDesbloqueadosLista")
        },
        // Funciona da mesma forma aqui também
        cenozoico: {
            total: 0,
            desbloqueados: [],
            elQtdTotal: document.getElementById("cenoTotalQtd"),
            elQtdDesbloqueados: document.getElementById("cenoDesbloqueadosQtd"),
            elQtdRestantes: document.getElementById("cenoRestantesQtd"),
            elListaDesbloqueados: document.getElementById("cenoDesbloqueadosLista")
        }
    };

    for (const chave in animais) { // Percorre todas as propriedades do objeto animais. Cada chave deve ser algum animal
        if(!animais.hasOwnProperty(chave)) continue; // Garante que está pegando somente propriedades diretas de "animais". Se não for uma propriedade direta, pula pra próxima chave
        const animal = animais[chave]; // Pega o objeto do animal em si e atribui ele a variável "animal"
        const eraCat = animal.eraCategoria; // Lê a variável "eraCategoria" do animal

        if (!eraCat || !eras[eraCat]) continue; // Se "eraCategoria" não existir, ignora e segue o loop

        const grupo = eras[eraCat]; // Atribui o "eraCat" para "grupo"
        grupo.total++; // Incrementa em 1 o total de animais daquela era

        const chaveFlag = chave + "Desbloqueado"; // chaveFlag virará algo como "brontossauroDesbloqueado", etc.
        const desbloqueado = localStorage.getItem(chaveFlag) === "true"; // Lê se esse animal foi marcado como desbloqueado

        if (desbloqueado) { // Se o animal já foi desbloqueado, ele é adicionado a lista grupo.desbloqueados
            grupo.desbloqueados.push(animal.nomeDoAnimal); // Exemplo: (eras.mesozoico.desbloqueados = ["Velociraptor, Brontossauro, etc."])
        }
    }

    Object.keys(eras).forEach(eraKey => { // Object.keys.(eras) => ["paleozoico", "mesozoico", "cenozoico"]. "eraKey" vai assumir cada uma dessas strings
        const grupo = eras[eraKey]; // Pega o bloco referente àquela era

        const total = grupo.total; // Quantidade total de animais definidos naquela era
        const desbloq = grupo.desbloqueados.length; // Quantos desses animais já estão desbloqueados
        const restantes = total - desbloq; // Quantos animais ainda faltam

        // Cada if verifica se o elemento HTML existe antes de usar
        if (grupo.elQtdTotal) {
            grupo.elQtdTotal.textContent = String(total);
        }
        if (grupo.elQtdDesbloqueados) {
            grupo.elQtdDesbloqueados.textContent = String(desbloq);
        }
        if (grupo.elQtdRestantes) {
            grupo.elQtdRestantes.textContent = String(restantes >= 0 ? restantes : 0);
        }

        // Constrói a lista com os animais desbloqueados
        if (grupo.elListaDesbloqueados) {
            grupo.elListaDesbloqueados.innerHTML = ""; // Remove qualquer <li> que estivesse lá anteriormente

            // Caso não tenha nenhum animal desbloquado, fornece um pouco de feedback visual para o jogador
            if (desbloq === 0) {
                const li = document.createElement("li"); // Cria um <li>
                li.textContent = "Nenhum ainda."; // Informa o usuário que ainda não há nenhum animal
                grupo.elListaDesbloqueados.appendChild(li); // Adiciona o <li> na <ul> daquela era
            } else {
                grupo.desbloqueados.forEach(nome => { // Percorre o array "grupo.desbloqueados", que contém nomes de animais
                    const li = document.createElement("li"); // Cria um <li>
                    li.textContent = nome; // Define "li.textContent = nome;"
                    grupo.elListaDesbloqueados.appendChild(li) // Adiciona o <li> na <ul> daquela era
                });
            }
        }
    });
}

function iniciarTimerSmilodonte() {
    // Verifica se o Smilodonte já foi desbloqueado
    const jaDesbloqueado = localStorage.getItem("smilodonteDesbloqueado") === "true";
    if (jaDesbloqueado) return; // Se já foi desbloqueado, a função para imediatamente

    if (qtdAnimaisDesbloqueados < 1) return; // Impede o timer de começar até que o usuário desbloqueie pelo menos um animal
    if (smilodonteIntervalId !== null) return; // Impede que existam múltiplos timers em execução

    // Timer
    smilodonteIntervalId = setInterval(() => { // Executa a função a cada 5 segundos, até parar
        const chance = Math.random(); // Gera um número aleatório entre 0 e 1

        if (chance < 1/50) { // Verifica a chance de 1 em 50 (2% de chance) a cada 5 segundos para desbloquear o animal
            console.log("Novo animal descoberto: Smilodonte");
            console.log("Chance de desbloquear Smilodonte: 2% a cada 5 segundos");
            alert("Você desbloqueou um novo animal: Smilodonte!");
            desbloquearAnimal("smilodonte", btnSmilodonte);

            clearInterval(smilodonteIntervalId); // Para o timer após desbloquear
            smilodonteIntervalId = null; // Zera a variável
        }
    }, 5000);
}

// PREENCHER OS DADOS DO ANIMAL
function mostrarAnimal(chave) {
    const animal = animais[chave.toLowerCase()];
    if (!animal) return; // SE O ANIMAL NÃO EXISTIR, NADA ACONTECE

    secaoAjuda.style.display = "none";
    secaoOpcao.style.display = "block";

    elNomeDoAnimal.innerText = animal.nomeDoAnimal;
    elSignificado.innerText = animal.significado;
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
btnSmilodonte.addEventListener("click", () => {
    mostrarAnimal("smilodonte");
})
btnMamute.addEventListener("click", () => {
    mostrarAnimal("mamute");
})
btnMegaterio.addEventListener("click", () => { 
    mostrarAnimal("megaterio");
})