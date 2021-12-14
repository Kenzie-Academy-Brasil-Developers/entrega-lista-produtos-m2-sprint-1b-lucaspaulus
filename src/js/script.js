
// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul')

// Selecionando botao em nosso HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
const botaoMostrarTodosProdutos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
const totalProdutos = document.querySelector('#precoTotal')
 

//Cria uma lista com os produtos
function montarListaProdutos(listaProdutos) {
    ul.innerHTML = ''
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')

         // Adicionando dados do produto aos elementos
        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        p.innerText = produto.preco
        span.innerText = produto.secao

        // Adicionando o elementos para o li
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        // Adicionando li ao HTML
        ul.appendChild(li)
        
    })
}
//-------------------SEÇÃO HORTIFRUTI-------------------------------------- 

//Filtra os produtos que são hortifruti
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })

    montarListaProdutos(listaHortifruti)
    console.log(listaHortifruti)

    //Soma os produtos filtrados pela seção Hortifruti
    totalProdutos.innerText = " " + somaTotalProdutos(listaHortifruti) + ".00"
    console.log(somaTotalProdutos(listaHortifruti))
}

// Adicionando event listener de clique, e executando a função de filtro pela seção
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

//---------------------BUSCA PELO NOME-------------------------------------

//Realiza a busca dos produtos pelo nome
function buscaPorNome(){
    let pesquisarProdutos = document.querySelector(".campoBuscaPorNome").value.toLowerCase() 
    
    const produtoPeloNome = produtos.filter((produto) =>{
        if(pesquisarProdutos === produto.nome.toLowerCase()){
            
            return produto.nome
        }
    })
    
    montarListaProdutos(produtoPeloNome)
    console.log(pesquisarProdutos) 

    //soma os produtos filtrados pelo nome
    totalProdutos.innerText = " " + somaTotalProdutos(produtoPeloNome) + ".00" 
    console.log(somaTotalProdutos(produtoPeloNome))
}

// Adicionando event listener de clique, e executando a função de filtro pelo nome
botaoBuscaPorNome.addEventListener('click', buscaPorNome)

//--------------------MOSTRA TODOS OS PRODUTOS--------------------------

//Mostra Todos os Produtos 
function mostrarTodosProdutos(){
    
     const mostrarProdutos = produtos.filter((produto) => {
        return produto.secao
    })
    
    montarListaProdutos(mostrarProdutos)
    console.log(mostrarProdutos) 
    
    // Soma todos os produtos disponiveis 
    totalProdutos.innerText = " " + somaTotalProdutos(mostrarProdutos) + ".00"
    console.log(somaTotalProdutos(mostrarProdutos))
}
 
botaoMostrarTodosProdutos.addEventListener('click', mostrarTodosProdutos)

//---------------------------------------------------------------

// Realiza a soma de quaisquer produtos
function somaTotalProdutos(valorProduto) {
    let somaTotal = 0;
    for(let i = 0 ; i < valorProduto.length ; i++) {
      somaTotal += valorProduto[i].preco
    } return somaTotal
  }
 
 
// Made by - Lucas Paulus
