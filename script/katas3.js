
// Exercícios - Katas 3 


// Primeira Tarefa - Retornar o "X" percorrendo o array.

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





























































































