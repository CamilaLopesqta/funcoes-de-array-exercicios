//XERCÍCIO 3
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 
//Utilizando o array **produtos** disponibilizado, retorne um novo array com os **nomes** dos produtos da categoria **limpeza**.

//Observe que cada elemento do array **produtos** é um objeto com as propriedades *nome*, *preco* e *categoria*.

const retornarProduto = produtos.filter((produto)=>{
    const prodLimp = produto.categoria==="Limpeza"
       return prodLimp
})
console.log("produtos de limpeza", retornarProduto)

const retNome = retornarProduto.map((nomes)=>{
    const retornar = nomes.nome
    return retornar
})
console.log(retNome);