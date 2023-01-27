/*
Ejercicio de DOM: Crea una web para dividir matrices. 
Inicialmente tendrás que poder especificar la cantidad de filas y columnas 
que tendrá tu matriz. 
Los números de cada celda se generan de manera aleatoria entre el 1 y el 50. 
Esta web inicialmente mostrará la siguiente información:


//tabla
var table = document.createElement("table");
var att0 = table.setAttribute("border","1");

//crear tr y meterlo a la tabla
var tr = document.createElement("tr");
table.appendChild(tr);
//crear td y metelo al tr
var td = document.createElement("td");
tr.appendChild(td);

//añadir matriz con el color azul
var p = document.createElement("p");
p.textContent = "MATRIZ";
var attp = p.setAttribute("color","blue");
td.appendChild(p);


//crear parrafo
var p1 = document.createElement("p");
p1.textContent = "Filas:";
td.appendChild(p1);
//añadir input
var input1 = document.createElement("input");
var id1 = input1.setAttribute("id","filas");
var att1 = input1.setAttribute("type","number");
td.appendChild(input1);

var br = document.createElement("br");
td.appendChild(br);

//crear parrafo
var p2 = document.createElement("p");
p2.textContent = "Columnas:";
td.appendChild(p2);
//añadir input
var input2 = document.createElement("input");
var id2 = input2.setAttribute("id","columnas");
var att2 = input2.setAttribute("type","number");

td.appendChild(input2);
var br2 = document.createElement("br");
td.appendChild(br2);

var button = document.createElement("button");
var att3 = button.setAttribute("onclick","Matriz");
var att4 = button.setAttribute("value","Calcular");

td.appendChild(button);

document.body.appendChild(table);

console.log(document);

function Matriz(){
    var filas = document.getElementById("filas");
    var columnas = document.getElementById("columnas");
    for (let i = 0;i<filas;i++){
        console.log(Math.floor((Math.random() * (1 - 50 + 1)) + min));
        for(let z = 0;z<columnas;z++){
            console.log(Math.floor((Math.random() * (1 - 50 + 1)) + min));
        }
    }

}
*/
/*
Teniendo un array con strings [ “separado”, “todo junto”, “espacios”, “sin espacios” ]
imprimir por pantalla los elementos que contengan espacios.
Para su correcta impresión deberán de estar cada uno en una línea.

//canteo que me ha salido a la primera

var arr = [ "separado", "todo junto", "espacios", "sin espacios" ];
for (let i = 0;i<arr.length;i++){
    for(let z = 0;z<arr[i].length;z++){
        if (arr[i][z] == " "){
            console.log(arr[i]);
        }
    }
}
*/
/*
Crear una matriz cuadrática

matriz = [];
for (let i = 0;i<5;i++) {
    matriz.push([]);
    for (let z = 0;z<5;z++) {
        matriz[i].push("x");
    }
}
console.log(matriz);
*/
/*
Haz un programa que pida a un usuario un número, 
en caso de ser un string deberá de saltar una excepción que corte el programa.
 En caso de introducir un número el programa deberá mirar si dicho 
 número tiene una cantidad de números pares
 (ojo, eso no es que el número sea par). Ej: 37 → tiene 2 números, por tanto es par
*/
var input1 = document.createElement("input");
var id1 = input1.setAttribute("id","numero");
var att1 = input1.setAttribute("type","text");
input1.addEventListener("change",func);
//td.appendChild(input1);


document.body.appendChild(input1);

function func(){
    var varia = document.getElementById("numero");
    if (typeof valor === 'number'){ //is nan pero no entra
        alert("NO");
    }
    else{
        for (let i = 0;i<varia;i++){
            for (let z = 0;z<varia[i];z++){
                console.log(z);
            }
        }
        
    }

}

console.log(document);