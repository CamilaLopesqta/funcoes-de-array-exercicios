//EXERCÍCIO 2

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const quintuplos = array.map((numero, indice, array)=> {
    return numero*5
  })
  console.log("map / quintuplo", quintuplos);

  const metades = array.map((numero, indice, array)=> {
    return numero/2
  })
  console.log("map / metades", metades);