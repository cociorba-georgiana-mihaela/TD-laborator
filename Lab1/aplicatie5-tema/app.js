document.getElementById("n").addEventListener("input", inputFibonacci);

function inputFibonacci() {
    var inputNumber = parseInt(document.getElementById("n").value);
    console.log(getFibonacci(inputNumber));

}

function getFibonacci(n) {
    if (typeof n === "undefined") return "not allowed";
    var fib = [1, 1];
    if (!isNaN(n)) {
        if (n >= 1 && n <= 10) {
            if (n === 1) {
                return [0, 1];
            } else

                for (var i = 2; i < n; i++) {
                    fib[i] = fib[i - 2] + fib[i - 1];
                }
            console.log(fib);

        } else {
            console.log("not allowed");
        }
    } else {
        console.log("not allowed");
    }
}

console.log(getFibonacci(5));


/*function getFibonacci(n) {
    if (typeof n === "undefined") return "not allowed";
    var number1 = 1, number2 = 1, aux;
    if (!isNaN(n)) {
        if (n >= 1 && n <= 10) {
            console.log(number1);
            console.log(number2);
            for (let i = 2; i < n; i++) {
                aux = number1 + number2;
                console.log(aux);
                number1 = number2;
                number2 = aux;
            }

        } else {
            console.log("not allowed");
        }
    } else {
        console.log("not allowed");
    }
}*/