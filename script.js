let buttons = document.querySelector(".calc-buttons")
let input = document.querySelector("#calc-expression")
let ops = ["+" , "-" , "/" , "." , "*"]
buttons.onclick = function(event) {
    let target = event.target
    // classList.contains проверяет есть ли данный класс у тега
    if (target.classList.contains("number")) {
        if (input.value == "0") {
            input.value = target.innerHTML
        }
        else {
            input.value += target.innerHTML
        }   
    }
    // если юзер нажал на оператор И последний символ в инпуте не оператор
    else if (target.classList.contains("operation") && !ops.includes(input.value[input.value.length - 1])) {
        
        input.value += target.innerHTML
    }
    else if (target.classList.contains("equal")) {
        // метод eval нужен для того чтобы найти результат примера
        input.value = eval(input.value)
    }
    else if (target.classList.contains("clear")) {
        input.value = "0"
    }
    else if (target.classList.contains("clear-one")) {
        input.value = input.value.slice(0 , -1)
    }
}


