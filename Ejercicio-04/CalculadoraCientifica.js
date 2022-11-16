class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memory = 0;
        this.ultimoResultado = 0;
    }
    digitos(value){
        this.pantalla += value;
        this.update();
    }
    punto(){
        this.pantalla += ".";
        this.update();
    }
    suma(){
        this.pantalla += "+";
        this.update();
    }
    resta(){
        this.pantalla += "-";
        this.update();
    }
    multiplicacion(){
        this.pantalla += "*";
        this.update();
    }
    division(){
        this.pantalla += "/";
        this.update();
    }
    mrc(){
        this.ultimoResultado = this.pantalla;
        this.pantalla = this.memory;
        this.update();
    }
    mMenos(){
        this.memory -= Number(this.pantalla);
        if (Number.isNaN(this.memory)) {
            this.memory = 0;
        }
    }
    mMas(){
        this.memory += Number(this.pantalla);
        if (Number.isNaN(this.memory)) {
            this.memory = 0;
        }
    }
    borrar(){
        this.pantalla = "";
        this.update();
    }
    igual(){
        try { 
            this.ultimoResultado = this.pantalla;
            this.pantalla = eval(this.pantalla).toString();
        }
        catch(err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }
    update() {
        document.querySelector("input[type=text]").value = this.pantalla;
    }
    
}

class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
        this.medidaAngulo = "grados";
        this.hypPressed = false;
        this.notacionCientifica = false;
    }

    deg() {
        if (this.medidaAngulo == "gradianes") {
            this.medidaAngulo = "grados";
            document.querySelector("input[type=button][value=GRAD]").value = "DEG";
        }
        else if (this.medidaAngulo == "grados") {
            this.medidaAngulo = "radianes";
            document.querySelector("input[type=button][value=DEG]").value = "RAD";
        }
        else if (this.medidaAngulo == "radianes") {
            this.medidaAngulo = "gradianes";
            document.querySelector("input[type=button][value=RAD]").value = "GRAD";
        }
    }

    hyp() {
        if (!this.hypPressed){
            document.querySelector("input[type=button][value=sin]").setAttribute("onclick", "cal.sinh()");
            document.querySelector("input[type=button][value=cos]").setAttribute("onclick", "cal.cosh()");
            document.querySelector("input[type=button][value=tan]").setAttribute("onclick", "cal.tanh()");
            document.querySelector("input[type=button][value=sin]").value = "sinh";
            document.querySelector("input[type=button][value=cos]").value = "cosh";
            document.querySelector("input[type=button][value=tan]").value = "tanh";
            this.hypPressed = true;
        }
        else {
            document.querySelector("input[type=button][value=sinh]").setAttribute("onclick", "cal.sin()");
            document.querySelector("input[type=button][value=cosh]").setAttribute("onclick",  "cal.cos()");
            document.querySelector("input[type=button][value=tanh]").setAttribute("onclick",  "cal.tan()");
            document.querySelector("input[type=button][value=sinh]").value = "sin";
            document.querySelector("input[type=button][value=cosh]").value = "cos";
            document.querySelector("input[type=button][value=tanh]").value = "tan";
            this.hypPressed = false;
        }
    }

    fe() {
        if (!this.notacionCientifica) {
            this.ultimoResultado = this.pantalla;
            this.pantalla = Number.parseFloat(this.pantalla).toExponential().toString();
            super.update();
            this.notacionCientifica = true;
        }
        else {
            super.igual();
            this.notacionCientifica = false;
        }
    }

    mc(){
        this.memory = 0;
    }

    mr(){
        this.mrc();
    }

    ms() {
        this.memory = this.pantalla;
    }

    square() {
        try {
            this.ultimoResultado = this.pantalla;
            this.pantalla = Math.pow(eval(this.pantalla), 2);
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    pow() {
        this.pantalla += "**";
        this.update();
    }

    sin() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.sin(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.sin(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.sin(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    cos() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.cos(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.cos(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.cos(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    tan() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.tan(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.tan(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.tan(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    sinh() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.sinh(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.sinh(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.sinh(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    cosh() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.cosh(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.cosh(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.cosh(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    tanh() {
        try {
            this.ultimoResultado = this.pantalla;
            if (this.medidaAngulo == "grados") {
                this.pantalla = Math.tanh(eval(this.pantalla) * (Math.PI / 180)).toString();
            }
            else if (this.medidaAngulo == "radianes") {
                this.pantalla = Math.tanh(eval(this.pantalla)).toString();
            }
            else if (this.medidaAngulo == "gradianes") {
                this.pantalla = Math.tanh(eval(this.pantalla) * 0.015708).toString();
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    sqrt() {
        try {
            this.ultimoResultado = this.pantalla;
            this.pantalla = Math.sqrt(eval(this.pantalla));
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    pow10() {
        try {
            this.ultimoResultado = this.pantalla;
            this.pantalla = Math.pow(10, eval(this.pantalla));
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    log() {
        try {
            this.ultimoResultado = this.pantalla;
            this.pantalla = Math.log10(eval(this.pantalla));
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    exp() {
        this.pantalla += "* 10**";
        this.update();
    }

    mod() {
        try {
            var result = eval(this.pantalla);
            if (result < 0) {
                this.ultimoResultado = this.pantalla;
                this.pantalla = result * -1;
            }
            else {
                this.pantalla = result;
            }
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    previous() {
        this.pantalla = this.ultimoResultado;
        this.update();
    }

    ce() {
        this.borrar();
    }

    c() {
        this.borrar();
        this.ultimoResultado = 0;
    }

    del() {
        this.pantalla = this.pantalla.slice(0,-1);
        this.update();
    }

    pi() {
        this.pantalla += Math.PI;
        this.update();
    }

    factorial() {
        try {
            this.ultimoResultado = this.pantalla;
            var n = eval(this.pantalla);
            var res = 1;
            for (var i = 2; i <= n; i++) {
                res *= i;
            }
            this.pantalla = res;
        } catch(err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    cambiarSigno() {
        try {
            this.ultimoResultado = this.pantalla;
            var result = eval(this.pantalla);
            this.pantalla = result * - 1;
        }
        catch (err) {
            this.pantalla = "Error = " + err;
        }
        this.update();
    }

    parentesisI() {
        this.pantalla += "(";
        this.update();
    }

    parentesisD() {
        this.pantalla += ")";
        this.update();
    }

}

var cal = new CalculadoraCientifica();
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
    switch(keyName) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            cal.digitos(keyName);
            console.log("hola");
            break;
        case "+":
            cal.suma();
            break;
        case "-":
            cal.resta();
            break;
        case "*":
            cal.multiplicacion();
            break;
        case "/":
            cal.division();
            break;
        case ".":
        case ",":
            cal.punto();
            break;
        case "Enter":
            cal.igual();
            break;
        case "q":
            cal.mc();
            break;
        case "w":
            cal.mr();
            break;
        case "e":
            cal.mMenos();
            break;
        case "r":
            cal.mMas();
            break;
        case "t":
            cal.ms();
            break;
        case "a":
            cal.square();
            break;
        case "s":
            cal.pow();
            break;
        case "d":
            if (cal.hypPressed) {
                cal.sinh();
            }
            else {
                cal.sin();
            }
            break;
        case "f":
            if (cal.hypPressed) {
                cal.cosh();
            }
            else {
                cal.cos();
            }
            break;
        case "g":
            if (cal.hypPressed) {
                cal.tanh();
            }
            else {
                cal.tan();
            }
            break;
        case "z":
            cal.sqrt();
            break;
        case "x":
            cal.pow10();
            break;
        case "c":
            cal.log();
            break;
        case "v":
            cal.exp();
            break;
        case "b":
            cal.mod();
            break;
        case "ArrowUp":
            cal.previous();
            break;
        case "Delete":
            cal.c();
            break;
        case "Escape":
            cal.ce();
            break;
        case "Backspace":
            cal.del();
            break;
        case "p":
            cal.pi();
            break;
        case "n":
            cal.factorial();
            break;
        case "Control":
            cal.cambiarSigno();
            break;
        case "(":
            cal.parentesisI();
            break;
        case ")":
            cal.parentesisD();
            break;
        case "h":
            cal.deg();
            break;
        case "j":
            cal.hyp();
            break;
        case "k":
            cal.fe();
            break;
    }
})