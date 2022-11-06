function displayDigit(digit){
    document.getElementById("screen").value = document.getElementById("screen").value + digit;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function root(){
    document.getElementById("screen").value = Math.sqrt(document.getElementById("screen").value)
}

function calculate(){
    let a = document.getElementById("screen").value;

    if(a == ""){
        document.getElementById("screen").value = null
    }else{
        let b = eval(a);
        document.getElementById("screen").value = b;
    }

}