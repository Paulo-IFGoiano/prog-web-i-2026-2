// AP14 — Catálogo AgroVale · Objetos e JSON
// Programação Web I — IF Goiano Campus Ceres

let todosProdutos = [];

const catalogo        = document.querySelector('#catalogo');
const inputBusca      = document.querySelector('#input-busca');
const infoResultado   = document.querySelector('#info-resultado');
const painelDetalhe   = document.querySelector('#painel-detalhe');
const detalheConteudo = document.querySelector('#detalhe-conteudo');
const btnFechar       = document.querySelector('#btn-fechar');

// === PASSO 1: Carregar produtos do arquivo JSON com fetch ===
// Dica: salve os dados em todosProdutos e chame renderizar(dados)

// TODO 1 — fetch aqui
fetch('produtos.json')
.then(resposta => resposta.json())
.then(dados => {
  todosProdutos = dados;
  console.log(todosProdutos);
  renderizar(todosProdutos);
})
.catch(erro => {
  console.log('Erro ao carregar produtos ...');
  console.error('Erro ao carregar:', erro);
});

// === PASSO 2: Renderizar lista de produtos ===

// TODO 2 — função renderizar aqui
function renderizar(lista){
  infoResultado.textContent = `${lista.length} produtos carregos.`;

  catalogo.innerHTML = lista.map(p => `
    <div class="card" data-id="${p.id}">
    <div class="categoria">${p.categoria}</div>
    <h3>${p.nome}</h3>
    <div class="preco">R$ ${p.preco.toFixed(2)} / ${p.unidade}</div>
    <span class="badge ${p.estoque > 0 ? 'disponivel' : 'indisponivel'}">
      ${p.estoque > 0 ? 'Disponível' : 'Sem estoque'}
    </span>
  </div>`
    ).join('');
}

// === PASSO 3: Filtro em tempo real ===


// TODO 3 — filtro aqui
inputBusca.addEventListener('input', e => {
  const termo = e.target.value.toLowerCase();
  const filtrados = todosProdutos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );

    renderizar(filtrados);
})

// === PASSO 4: Exibir detalhes ao clicar no card ===


// TODO 4 — detalhes aqui


// Fechar painel
btnFechar.addEventListener('click', () => {
  painelDetalhe.classList.add('oculto');
});
