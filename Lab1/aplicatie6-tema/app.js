$(document).ready(function () {

    $("#btnEqual").on('click', function () {
        Equal();
    });

    function Equal() {
        var number1 = parseInt($("#firstNumber").value());
        var number2 = parseInt($("#secondNumber").value());
        var operator = $("#operators").value();

        if (operator === "+") {

            var r = number1 + number2;
            $("#result").text(r);
        }

        if (operator === '-') {

            var r = number1 - number2;
            $("#result").value(r);

        }

        if (operator === '*') {
            var r = number1 * number2;
            $("#result").value(r);

        }

        if (operator === '/') {
            var r = number1 / number2;
            $("#result").value(r);

        }
    }
})



/*
}
$("#btnAdd").on('click', function () {
Add();
});
$("#btnSubstract").on('click', function () {
Substract();
})
$("#btnMultiply").on('click', function () {
Multiply();
})
$("#btnDivide").on('click', function () {
Divide();
})
$('#btnEqual').click(function () {
$('result').val(eval($('result').val()));
});
});
function Add() {
var number1 = parseInt($("#firstNumber").val());
var number2 = parseInt($("#secondNumber").val());
var result = number1 + number2;

}
function Substract() {
var number1 = parseInt($("#firstNumber").val());
var number2 = parseInt($("#secondNumber").val());
var result = number1 - number2;

}
function Multiply() {
var number1 = parseInt($("#firstNumber").val());
var number2 = parseInt($("#secondNumber").val());
var result = number1 * number2;

}
function Divide() {
var number1 = parseInt($("#firstNumber").val());
var number2 = parseInt($("#secondNumber").val());
var result = number1 / number2;

}*/

