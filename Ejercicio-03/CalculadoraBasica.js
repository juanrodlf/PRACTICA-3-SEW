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

var cal = new Calculadora();
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
            cal.punto();
            break;
        case "Delete", "Backspace":
            cal.borrar();
            break;
        case "Enter":
            cal.igual();
            break;
        case "b":
            cal.mrc();
            break;
        case "n":
            cal.mMenos();
            break;
        case "m":
            cal.mMas();
            break;
    }
})