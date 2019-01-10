function showDate() {
    document.getElementById("demo").innerHTML= Date();
}

function f() {
    var x = 16 + 4 + "Volvo";
    var y = "Volvo" + 16 + 4;

    document.getElementById("demo").innerHTML= "16 + 4 + \"Volvo\": " + x
    + "</br>"
    + "\"Volvo\" + 16 + 4: " + y;
}

function p1() {
    var x = {firstName:"John", lastName:"Doe"};
}
function p2() {
    var p1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    p1 = null;

    var pe2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    p2 = undefined;

    document.getElementById("demo").innerHTML= "Type of p1: " + typeof p1
        + "</br>"
        + "Type of p2: " + typeof p2;
}








