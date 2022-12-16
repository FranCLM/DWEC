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
*/
function alumno(nombre, apellido, edad, calificaciones){
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.calificaciones = calificaciones;

    function metodo_promedio(){
        sum_array = this.calificaciones
    }
    metodo_promedio();
    }
     var Daniel = new alumno("Daniel", "Aybar","18",[Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10),Math.round(Math.random()*10)]);

     console.log(Daniel);
     console.log(Daniel.metodo_promedio());