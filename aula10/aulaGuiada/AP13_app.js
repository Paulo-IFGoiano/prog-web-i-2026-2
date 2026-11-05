// AP13 — Catálogo AgroVale Interativo
// Preencha os blocos TODO abaixo com o código JavaScript

// Array inicial de produtos
const produtos = ['Milho', 'Soja', 'Café', 'Feijão', 'Arroz'];

// Referências aos elementos da página
const listaProdutos = document.querySelector('#lista-produtos');
const inputProduto  = document.querySelector('#input-produto');
const btnAdicionar  = document.querySelector('#btn-adicionar');
const inputBusca    = document.querySelector('#input-busca');
const msgVazia      = document.querySelector('#msg-vazia');

// === PASSO 1: Renderizar a lista ===
// TODO: crie a função renderizar(lista) que:
// 1. limpe o conteúdo atual de listaProdutos (innerHTML = '')
// 2. percorra cada item de lista com forEach
// 3. para cada item, crie um <li> com o nome do produto
//    usando document.createElement e appendChild
// 4. chame renderizar(produtos) para exibir a lista inicial

// === PASSO 2: Adicionar produto ===
// TODO: adicione um evento de clique no btnAdicionar que:
// 1. leia e limpe (trim) o valor de inputProduto
// 2. valide se o campo está vazio (se sim, não faça nada)
// 3. adicione o novo produto ao array produtos com push
// 4. chame renderizar(produtos) para atualizar a lista
// 5. limpe o campo inputProduto (value = '')

// === PASSO 3: Remover produto ===
// DICA: na função renderizar, além do <li> com o nome,
//       crie também um <button class="btn-remover">✕</button>
//       e adicione-o dentro do <li> com appendChild.
// TODO: ao clicar nesse botão:
// 1. descubra o índice do produto no array: produtos.indexOf(nomeDoProduto)
// 2. remova-o com produtos.splice(indice, 1)
// 3. chame renderizar(produtos) para atualizar a lista

// === PASSO 4: Filtrar em tempo real ===
// TODO: adicione um evento 'input' no inputBusca que:
// 1. pegue o texto digitado (toLowerCase para busca sem distinção de maiúsculas)
// 2. filtre o array produtos com .filter() + .includes()
// 3. chame renderizar com o array filtrado (NÃO com produtos diretamente)
//    — assim a lista original não é alterada
