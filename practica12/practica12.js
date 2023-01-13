/*Escribe una función flecha (lo más simplificada posible) que convierta una
temperatura dada en grados Celsius a grados Fahrenheit. La fórmula para
convertir de Celsius a Fahrenheit es F = C * 9/5 + 32.

//lo que ha costao
var grados = (C) => (C*9/5)+32;
console.log(grados(15));
*/

/*
Escribe una función flecha (lo menos simplificada posible) que determine si
un número es primo o no. Un número es primo si es divisible únicamente por
1 y por sí mismo. Por ejemplo, 2, 3, 5 y 7 son números primos, pero 4, 6 y 8
no lo son

var numero = 5;
var esPrimo = numero => {
	for (var x = 2; x < numero / 2; x++) { 
		if (numero % x == 0) {
            return false; 
	    }
        else{
            return true;
        }
    }
}
console.log(esPrimo(numero));
*/

/*
Escribe una función que reciba un número en forma de
“manyMoreArguments” y devuelva un array con los números ordenados en el
array.

function manyMoreArguments(...lista ){
         console.log("lista: " +lista.sort());
        }
manyMoreArguments(6,7,4,1,2,9);
*/

/*
Crea (mediante funciones) una clase llamada "Alumno" que tenga los
siguientes atributos: nombre, apellido, edad y una lista de 5 calificaciones
generadas aleatoriamente (entre el 0 y el 10 con dos decimales posibles). La
clase debe tener un método llamado "promedio" que calcule el promedio de
las calificaciones del alumno y otro método llamado "esAprobado" que
devuelva verdadero si el alumno tiene un promedio mayor o igual a 70 y falso
en caso contrario.

function alumno(nombre, apellido, edad, calificaciones){
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.calificaciones = calificaciones;

    
    function metodo_promedio(){
        sum_array = this.calificaciones;
    }

    metodo_promedio = () =>{
        //sum_array = this.calificaciones;
        let sumArray = 0;
        for (let calificacion of this.calificaciones) {
            this.sumArray += this.calificacion;
        }

    }
    metodo_promedio();
    }
     var Daniel = new alumno("Daniel", "Aybar","18",[Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)]);

     console.log(Daniel);
     console.log(Daniel.metodo_promedio());
*/
/*
Crea (mediante clases) una clase llamada "CuentaBancaria" que tenga los
siguientes atributos: nombre del titular y el saldo. También debe tener los
siguientes métodos: "ingresarDinero" que permita al titular ingresar una
cantidad de dinero a su cuenta, "retirarDinero" que permita al titular retirar
una cantidad de dinero de su cuenta (siempre que tenga saldo suficiente) y
"consultarSaldo" que permita al titular consultar su saldo actual.

class CuentaBancaria{
    constructor(nombre="",saldo=0,dinero=0){
        this.nombre = nombre;
        this.saldo = saldo;
        this.dinero = dinero;
    }

    IngresarDinero(din){
        this.dinero = din;
        this.saldo = this.saldo + din;
    }
    SacarDinero(din){
        this.dinero = din;
        this.saldo = this.saldo - din;
    }
    ConsultarDinero(){
        return this.saldo;
    }
    Negativo(){
        if (this.saldo < 0){
            this.saldo = this.saldo + this.dinero;
            return "No se puede sacar dinero, saldo negativo";
        }
    }
    
}
var C = new CuentaBancaria();
console.log(C.IngresarDinero(50));
console.log(C.ConsultarDinero());
console.log(C.SacarDinero(50));
console.log(C.ConsultarDinero());
console.log(C.Negativo());
console.log(C.ConsultarDinero());
*/

/*
Crear una clase "Figura Geométrica" que tenga como atributos el tipo de
figura y el número de lados. Incluir métodos para establecer y obtener el valor
de cada uno de estos atributos. Crea dos clases que hereden de esta clase:
"Triángulo" y "Cuadrado". Cada una de estas clases deberá tener atributos y
métodos específicos para su tipo de figura. Por ejemplo, la clase "Triángulo"
podría tener atributos para el lado 1, el lado 2 y el lado 3, y un método que
calcule el área del triángulo. En caso de no asignarle alguno de sus valores
se le asignará el “5” por defecto.


class FiguraGeometrica{
    constructor(tipo="",lados=0){
        this.tipo = tipo;
        this.lados = lados;
    }
    __gettipo(){
        return this.tipo;
    }
    __settipo(type){
        this.tipo = type;
    }
    __getlados(){
        return this.lados;
    }
    __setlados(side){
        this.lados = side;
    }
}
class Triangulo extends FiguraGeometrica{
    constructor(lado1=5,lado2=5,lado3=5){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    __getlado(valor){
        if (valor == 1){
            return this.lado1;
        }
        else if (valor == 2){
            return this.lado2;
        }
        else if (valor == 3){
            return this.lado3;
        }
        else{
            return "unicamente tengo 3 lados";
        }
    }
    __setlado(valor_lado,lado){
        if (lado == 1){
            this.lado1 = valor_lado;
        }
        else if (lado == 2){
            this.lado2 = valor_lado;
        }
        else if (lado == 3){
            this.lado3 = valor_lado;
        }
        else{
            return "unicamente tengo 3 lados";
        }
    }
    PerimetroTriangulo(){
        return this.lado1 + this.lado2 + this.lado3;
    }
}
class Cuadrado extends FiguraGeometrica{
    constructor(lado1=0,lado2=0,lado3=0,lado4=0){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.lado4 = lado4;
    }
    __getlado(valor){
        if (valor == 1){
            return this.lado1;
        }
        else if (valor == 2){
            return this.lado2;
        }
        else if (valor == 3){
            return this.lado3;
        }
        else if (valor == 4){
            return this.lado4;
        }
        else{
            return "unicamente tengo 3 lados";
        }
    }
    __setlado(valor_lado,lado){
        if (lado == 1){
            this.lado1 = valor_lado;
        }
        else if (lado == 2){
            this.lado2 = valor_lado;
        }
        else if (lado == 3){
            this.lado3 = valor_lado;
        }
        else if (lado == 4){
            this.lado4 = valor_lado;
        }
        else{
            return "unicamente tengo 3 lados";
        }
    }
    PerimetroCuadrado(){
        return this.lado1 + this.lado2 + this.lado3 + this.lado4;
    }

}
*/
/*
Crea una función que averigüe “true” si pasados dos arrays estos son
inversos y “false” en caso de que no lo sean, para ello la función recibirá dos
parámetros que serán arrays. para cuidar su correcto funcionamiento se
lanzarán excepciones en los siguientes casos:
a) Alguno de estos dos parámetros no sea un array
b) Si no son de la misma longitud
c) Si son arrays y de la misma longitud PERO sus elementos no son todos numéricos
*/
let array1 = [1,2,3,4,5];
let array2 = [5,4,3,2,1];
let arrayinv = [];
function reverse(array2) {
    for (let i = array2.length - 1; i >= 0; i--) {
        arrayinv.push(array2[i]);
    }
}
reverse(array2);

try{
    if(Array.isArray(array1) && Array.isArray(array2)){

    }
    else{
        alert("Revisa los arrays");
    }

    if (array1.length != array2.length){
        alert("revisa longitud");
    }
    else{

    }
}
catch{
    alert("un error ha ocurrido");
}
finally{
    for (let e = 0; e <= array1.length;e++){
        if (isNaN(array1[e])){
            console.log("en el array 1 hay un forastero");
        }
        else if(isNaN(array2[e])){
            console.log("en el array 2 hay un forastero");
        }
        else{
            
        }
    }
}


//Prueba las funciones autoejecutables haciendo que muestren algún mensaje
/*
function normal(){
    document.write("funciono");
}

normal();
*/
//funcion anonima
/*
(function(){ 
    document.write("funciono...");    
})();
*/
