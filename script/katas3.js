
// Exercícios - Katas 3 


// Primeira Tarefa - Retornar o no console a movimentação do "x" ao longo do array, de sua posição inicial até a final.

let x = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]

function xRunning(expansao) {

      for (i = 1; i < expansao.length; i++) {
            console.log(expansao);
            if (expansao[i - 1] == "x") {
                  expansao.pop("x")
                  expansao.unshift("-")
            }
      }
      return expansao
}
console.log(xRunning(x));


// Segunda Tarefa - Retornar um novo Array substituindo as posições das strings por um número representando a contagem de vogais daquelas palavras.

let lista = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];

function vowelsCounter(listaas) {
      let arrayCount = []
      for (let i = 0; i < listaas.length; i++) {
            let count = 0;
            for (let j = 0; j < listaas[i].length; j++) {
                  switch (listaas[i][j]) {
                        case "a":
                        case "e":
                        case "i":
                        case "o":
                        case "u":
                              count++;
                              break;
                  }
            }
            arrayCount.push(count)
      }
      return arrayCount
}
console.log(vowelsCounter(lista));

// Terceira Tarefa - Retornar um novo array com esta frase fatiada em 3 em 3 caracteres posicionados ao longo do array.



// function stringTripletGroup(divisao) {
//       let devolucao = []
//       for (let i = 0; i = divisao.length; i++) {
//             let contagem = 0;
//             switch (divisao[i]) {
//                   case "Os ":
//                   case "trê":
//                   case "s m":
//                   case "osq":
//                   case "uet":
//                   case "eir":
//                   case "os ":
//                         contagem++
//                         break;
//             }
//             devolucao.push(contagem)
//       }
// return devolucao
// }
// console.log(stringTripletGroup(frase));


let frase = ["Os três mosqueteiros"];

function stringTripletGroup(c) {
      let stringVazia = ""
      let contagem = []
      for (let i = 0; i < c.length; i++) {
            stringVazia += c[i]
            if (stringVazia.length == 3) {
                  contagem.push(c[i])
            } else if (i == c.length - 1) {

            }
      }
      console.log(contagem)

}
console.log(stringTripletGroup(frase));

// Quarta Tarefa 


let arrGlobal = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]
function dominantPet(animais) {
      let cachorro = 0
      let gato = 0

      for (let i = 0; i < animais.length; i++) {
            let petz = animais[i].toLowerCase()
            if (petz == "cat") {
                  gato++
            } else if (petz == "dog") {
                  cachorro++
            }

      }
      if (gato > cachorro) {
            return `CAT!`
      } else if (gato < cachorro) {
            return `DOG!`
      } else {
            return `DRAW!`
      }
}

console.log(dominantPet(arrGlobal));










































































