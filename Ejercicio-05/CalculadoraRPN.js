class Pila {
    constructor() {
        this.stack = new Array();
        this.pantallaStack = "";
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    update() {
        var pantallaElem = document.querySelector("textarea");
        var values = "";
        for (var i = 0; i < this.stack.length; i++) {
            values += i + 1 + ". " + this.stack[i] + "\r\n";
        }
        pantallaElem.value = values;
        pantallaElem.scrollTop = pantallaElem.scrollHeight;
    }

}

class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memory = 0;
        this.ultimoResultado = 0;
        this.pila = new Pila();
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
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 + arg2;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }
    resta(){
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 - arg2;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }
    multiplicacion(){
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 * arg2;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }
    division(){
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 / arg2;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }
    borrar(){
        this.pantalla = "";
        this.update();
    }
    enter(){
        this.pila.push(this.pantalla);
        this.pantalla = "";
        this.pila.update();
        this.update();
    }
    update() {
        document.querySelector("input[type=text]").value = this.pantalla;
    }

    sin() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.sin(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    cos() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.cos(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    tan() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.tan(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    asin(){
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.asin(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    acos() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.acos(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    atan() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.atan(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    square() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.pow(arg1, 2);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    pow() {
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.pow(arg1, arg2);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    sqrt() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.sqrt(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    pow10() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.pow(10, arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    log() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.log10(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    exponencial() {
        var arg2 = parseFloat(this.pila.pop());
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.pow(arg1, arg2 * 10);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            if (!isNaN(arg2)) {
                this.pila.push(arg2);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    exp() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = Math.exp(arg1);
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    mod() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 < 0 ? arg1 * -1 : arg1;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }
    
    pi() {
        this.pantalla += Math.PI;
        this.update();
    }

    c() {
        this.borrar();
    }

    unoPartidoX() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = 1 / arg1;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    factorial() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = 1;
        for (var i = 2; i <= arg1; i++) {
            resultado *= i;
        }
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    cambiarSigno() {
        var arg1 = parseFloat(this.pila.pop());
        var resultado = arg1 * -1;
        if (isNaN(resultado)) {
            alert("No se puede realizar esta operación con el estado actual de la pila.");
            if (!isNaN(arg1)) {
                this.pila.push(arg1);
            }
            return;
        }
        this.pila.push(resultado);
        this.pila.update();
    }

    e() {
        this.pantalla = Math.E;
        this.update();
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
            cal.enter();
            break;
        case "q":
            cal.sin();
            break;
        case "w":
            cal.cos();
            break;
        case "e":
            cal.tan();
            break;
        case "r":
            cal.asin();
            break;
        case "t":
            cal.acos();
            break;
        case "y":
            cal.atan();
        case "a":
            cal.square();
            break;
        case "s":
            cal.pow();
            break;
        case "d":
            cal.sqrt();
            break;
        case "f":
            cal.pow10();
            break;
        case "g":
            cal.log();
            break;
        case "z":
            cal.exponencial();
            break;
        case "x":
            cal.mod();
            break;
        case "c":
            cal.pi();
            break;
        case "v":
            cal.c();
            break;
        case "b":
            cal.unoPartidoX();
            break;
        case "n":
            cal.factorial();
            break;
        case "m":
            cal.cambiarSigno();
            break;
        case "p":
            cal.e();
            break;
        case "o":
            cal.exp();
            break;
    }
})