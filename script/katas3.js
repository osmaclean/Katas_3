
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

function vowelsCounter(lista) {
    let arrayCount = []
    for (let i = 0; i < lista.length; i++) {
        let count = 0;
        for (let j = 0; j < lista[i].length; j++) {
            switch (lista[i][j]) {
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

// 























































































