//EXERCÍCIO 1

const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (objeto) => {
    let novoObjeto = {}
    for (let i in objeto){
        novoObjeto[i] = objeto[i].toUpperCase()
    }
    return novoObjeto
    }
    console.log(caixaAlta(infosPessoa))

const textoCorrido = (retornarValores) => {
    let textoCorrido1 = ``
    for (let i in retornarValores){
        textoCorrido1 += `O valor da propriedade "${i}" é "${retornarValores[i]}".\n`
    }
    return textoCorrido1
}
console.log(textoCorrido(infosPessoa))

function objetoDisponibilizado (retornarValores, callback){
    const objDisp = callback(retornarValores)
    return objDisp
}

console.log(objetoDisponibilizado(infosPessoa,caixaAlta))
console.log(objetoDisponibilizado(infosPessoa,textoCorrido));