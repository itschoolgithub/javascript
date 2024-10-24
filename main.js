// let hello = "Hello World!";

sum(function() {}, 1, 10);

// function showConsole(result) {
//     console.log(result);
// }

function showAlert(result) {
    alert(result);
}

function showConsoleB(result) {
    console.log("Результат подсчета: " + result);
}

let showConsole = function (result) {
    console.log(result);
}

sum(showAlert, 1, 100);
sum(showConsole, 1, 444);
sum(showConsoleB, 2, 45);
sum(function (r) {
    console.log("Анонимная функция: " + r);
}, 3, 100)

// sum();
// sum(2);
// sum(199, 330);

// let m = sum(2, 5) ** 2;
// console.log(m);

// let d = sum(199, 330);
// console.log(`Сумма чисел равна ${d}`);

// sum = 102;

// console.log(sum);

// sum();

function sum(c, a = 1, b = 10) {
    let s = 0;

    for (let i = a; i <= b; i++) {
        s = s + i;
    }

    c(s);

    // console.log(hello + ` Сумма чисел от ${a} до ${b} равна ${s}`);
    // return s;
}

