alert("Bienvenidos a nuestro simulador interactivo , aqui podras realizar calculos de hasta 3 cifras y encontraras 4 resultados segun nuestras opciones" )
let num1 = parseFloat(prompt("Ingrese el valor que desea calcular"))
let num2 = parseFloat(prompt("Ingrese el segundo valor que desea calcular"))
let num3 = parseFloat(prompt("ingrese el tercer valor que desea calcular"))
let operador = parseFloat(prompt("ingrese algun operador para obtener los resultados , las opciones son (+,-,*,/)"))
function calcular(num1,num2,num3,operador) {
    switch (operador) {
        case "+":
            return num1+num2+num3;
            
            case "-":
            return num1-num2-num3;
            
            case "/":
            return num1/num2/num3;
           
            case "*":
            return num1*num2*num3;
            default:
                return 0;
    }
}
if ("+") {
    alert(calcular(num1,num2,num3,"+"))
}
if ("-") {
    alert(calcular(num1,num2,num3,"-"))
}
if ("*") {
    alert(calcular(num1,num2,num3,"*"))
}
if ("/"){
    alert(calcular(num1,num2,num3,"/"))
}


alert("En base al resultado anterior podra ahora sacar el impuesto o el descuento pertinente que desee calcular , si no lo desa tan solo presione aceptar ")

let valor = parseFloat(prompt("ingrese el valor que desea calcular"))
let descuento = parseFloat(prompt("ingrese el valor del Descuento , si no tiene un descuento y solo desea calcular el impuesto ingrese 0"))
let impuesto = parseFloat(prompt("ingrese el valor del Impuesto"))

if (descuento !="") {
    let resultado = valor * descuento / 100
    alert("El valor del descuento a tu valor es de " + resultado)
} 
if(impuesto !="") {
        let resultado2 = valor * impuesto / 100
        let final = valor + resultado2
        alert("El valor del impuestro agregado a tu valor es de " + final)
}