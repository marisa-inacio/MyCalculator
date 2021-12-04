let isDot = false;
let isEqual = false;


function insert(n) {
    let x = document.getElementById('screen').innerHTML;

    //limpa a tela depois do igual
    if (isEqual == true) {
        clearScreen();
        isEqual = false;
    }

    //Corrigidos alguns bugs do Eval
    switch (n) {
        case '.':
            if (isDot == true) {
                n = '';
            } else {
                isDot = true;
            }
            break;
        case '+':
            if (x.length == 0 || (x[0] == '-' && x.length == 1)) {
                n = '';
            } else if (x[x.length - 1] == '+' || x[x.length - 1] == '-' || x[x.length - 1] == '*' || x[x.length - 1] == '/') {
                deleteNumber();
                isDot = false;
            } else {
                isDot = false;
            }
            break;
        case '-':
            if (x[x.length - 1] == '+' || x[x.length - 1] == '-' || x[x.length - 1] == '*' || x[x.length - 1] == '/') {
                deleteNumber();
                isDot = false;
            } else {
                isDot = false;
            }
            break;
        case '*':
            if (x.length == 0 || (x[0] == '-' && x.length == 1)) {
                n = '';
            } else if (x[x.length - 1] == '+' || x[x.length - 1] == '-' || x[x.length - 1] == '*' || x[x.length - 1] == '/') {
                deleteNumber();
                isDot = false;
            } else {
                isDot = false;
            }
            break;
        case '/':

            if (x.length == 0 || (x[0] == '-' && x.length == 1)) {
                n = '';
            } else if (x[x.length - 1] == '+' || x[x.length - 1] == '-' || x[x.length - 1] == '*' || x[x.length - 1] == '/') {
                deleteNumber();
                isDot = false;
            } else {
                isDot = false;
            }

            break;
        case ')':
            if (x.length == 0) {
                n = '';
            } else {
                isDot = false;
            }
            break;
        case '0':
            if (x[0] == '0' && x.length == 1) {
                n = '';
            }
            break;

    }
    document.getElementById('screen').innerHTML += n;
}


function calc() {
    let val = document.getElementById('screen').innerHTML;


    if (val.length > 1) {
        val = parseFloat(eval(val));
        val = Math.round(val * 100) / 100;
        document.getElementById('screen').innerHTML = val;
        isEqual = true;

    };

}


function clearScreen() {
    document.getElementById("screen").innerHTML = "";
    isDot = false;
}

function deleteNumber() {
    let val = document.getElementById("screen").innerHTML;
    document.getElementById('screen').innerHTML = val.substr(0, val.length - 1);
}


