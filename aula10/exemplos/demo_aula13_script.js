// Demo Aula 13 — Funções

// seleção dos elementos

const inputNome = document.querySelector('#input-nome');
const btnSaudar = document.querySelector('#btn-saudar');
const resultadoSaudacao = document.querySelector("#resultado-saudacao");


function saudar(nome){
    return `Olá, ${nome}!`;
}

btnSaudar.addEventListener("click", () => {
    resultadoSaudacao.textContent = saudar(inputNome.value);
});
