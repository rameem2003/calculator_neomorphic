function displayDigit(digit){
    document.getElementById("screen").value = document.getElementById("screen").value + digit;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function calculate(){
    let a = document.getElementById("screen").value;
    let b = eval(a);
    document.getElementById("screen").value = b;
}