//1
/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FF0000";


ctx.beginPath();
ctx.moveTo(650, 350);//base
ctx.lineTo(999, 350);

ctx.moveTo(999, 350);//palo
ctx.lineTo(999, 50);

ctx.moveTo(999, 50);//base de arriba
ctx.lineTo(650, 50);

ctx.moveTo(650, 50);//palo
ctx.lineTo(650, 350);


ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";

ctx.beginPath();

ctx.moveTo(200, 200);
ctx.arc(200, 200, 80, 0, 2 * Math.PI, false);


ctx.fill();  

ctx.stroke();
*/
// 2 [NO SE HACERLO]
/*
const fragment = document.createDocumentFragment();
const template = document.querySelector("#template").content;
const clone = template.cloneNode(true);
fragment.appendChild(clone);

var div = document.querySelector("div");
let texto = document.createTextNode("<b>Texto desde el Nodo</b>"); //--> Escribir mediante Nodos de texto
div.appendChild(texto);

document.body.appendChild(fragment);
*/

//3 

var input1 = document.createElement("input");
input1.setAttribute("type", "Usuario");
input1.setAttribute("placeholder", "Usuario");

document.body.appendChild(input1);


var select = document.createElement("select");
input1.setAttribute("name", "lista");

var option1 = document.createElement("option");
option1.setAttribute("value", "Youtube");
option1.setAttribute("id", "Youtube");


/*
const opt1 = document.getElementById("Youtube")
opt1.innerHTML = "Youtube";
option1.appendChild(opt1);
*/

select.appendChild(option1);

var option2 = document.createElement("option");
option2.setAttribute("value", "Google");
option2.setAttribute("id", "Google");

select.appendChild(option2);



document.body.appendChild(select);

console.log(document);


