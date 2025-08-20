const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual sua cor favorita?",
        alternativas: [
            {
                texto: "rosa",
                afirmacao: "um flamingo!"
            },
            {
                texto: "preto",
                afirmacao: "uma pantera-negra!"
            }
        ]
    },
    {
        enunciado: " qual sua comida favorita?",
        alternativas: [
            {
                texto: "chocolate",
                afirmacao: "um unicórnio"
            },
            {
                texto: "batata frita",
                afirmacao: "um cachorro."
            }
        ]
    },
    {
        enunciado: "qual sua bebida favorita?",
        alternativas: [
            {
                texto: "refrigerante.",
                afirmacao: "um pinguim."
            },
            {
                texto: "suco de morango.",
                afirmacao: "ovelha."
            }
        ]
    },
    {
        enunciado: "qual sua estação preferida?",
        alternativas: [
            {
                texto: "verão.",
                afirmacao: "cachorro"
            },
            {
                texto: "inverno.",
                afirmacao: "gato"
            }
        ]
    },
    {
        enunciado: " se você precisasse escolher um lugar para passar o feriado, qual seria? ",
        alternativas: [
            {
                texto: "praia",
                afirmacao: "golfinho."
            },
            {
                texto: "acampamento",
                afirmacao: "esquilo"
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "flamingo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();