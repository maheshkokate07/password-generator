var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

function generatePassword() {
    var passwordLength = document.getElementById("password-length").value;
    var password = "";
    var rawPass = "";
    if(document.getElementById("uppercase").checked) {
        rawPass += upperCase;
    }
    if(document.getElementById("lowercase").checked) {
        rawPass += lowerCase;
    }
    if(document.getElementById("numbers").checked) {
        rawPass += numbers;
    }
    if(document.getElementById("symbols").checked) {
        rawPass += symbols;
    }

    for(var i=0; i<=passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * rawPass.length);
        password += rawPass.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("result").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
}