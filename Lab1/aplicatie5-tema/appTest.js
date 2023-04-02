function test() {
    //console.log(getFibonacci(2) == [1, 1] ? "Passed" : "Failed");
    //console.log(getFibonacci(5) == [1, 1, 2, 3, 5] ? "Passed" : "Failed");
    console.log(getFibonacci() === "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci("a") === "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(11) === "not allowed" ? "Passed" : "Failed");

}


test();

