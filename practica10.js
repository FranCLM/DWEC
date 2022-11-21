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

ctx.moveTo(999, 50);
ctx.lineTo(650, 50);

ctx.moveTo(650, 50);
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
// 2 
/*
const template = document.querySelector("#template").content; //selecciono lo de dentro
const clone = template.cloneNode(true); //true xd
document.body.appendChild(clone);//lo añado al fragmento


var div = fragment.querySelector("#div1"); //selecciono el div de dentro de fragment si esto es tan listo como parece
div.setAttribute("id","div_rosa"); // el ID se cambia 

div.style.backgroundColor = 'pink';
div.style.height = '150px';
div.style.width = '200px';
div.style.float = 'left';

const template2 = document.querySelector("#template").content; 
const clone2 = template.cloneNode(true); 
document.body.appendChild(clone2);
//----------------------------------------------------------------

var div2 = fragment.querySelector("#div1");
div2.setAttribute("id","div_amarillo");

div2.style.backgroundColor = 'yellow';
div2.style.height = '150px';
div2.style.width = '200px';
div2.style.float = 'right';

const template3 = document.querySelector("#template").content; 
const clone3 = template.cloneNode(true); 
document.body.appendChild(clone3);
//----------------------------------------------------------------

var div3 = fragment.querySelector("#div1");
div3.setAttribute("id","div_azul");

div3.style.backgroundColor = 'blue';
div3.style.height = '75px';
div3.style.width = '75px';
div3.style.float = 'right';
//----------------------------------------------------------------

const template4 = document.querySelector("#template").content; 
const clone4 = template.cloneNode(true); 
document.body.appendChild(clone4);

var div4 = fragment.querySelector("#div1");
div4.setAttribute("id","segundos");

div4.style.textAlign = 'center';
//----------------------------------------------------------------
var segundos = new Date();
const cosa = document.querySelector(segundos);
const valorS = document.createElement('p');
valorS.textContent = 'se ha tardado en abrir la pagina: ' + segundos.getSeconds();

var insert = 0;
var seleccionar_div4 = document.querySelector('#segundos');
window.setInterval(function(){
  seleccionar_div4.innerHTML = insert;
  insert++;

},1000);

document.write(fragment);
*/

//3 

/*

var input1 = document.createElement("input");
input1.setAttribute("type", "Usuario");
input1.setAttribute("placeholder", "Usuario");

document.body.appendChild(input1);


var select = document.createElement("select");
input1.setAttribute("name", "lista");

var option1 = document.createElement("option");
option1.setAttribute("value", "Youtube");
option1.setAttribute("id", "Youtube");



const opt1 = document.getElementById("Youtube")
opt1.innerHTML = "Youtube";
option1.appendChild(opt1);


select.appendChild(option1);

var option2 = document.createElement("option");
option2.setAttribute("value", "Google");
option2.setAttribute("id", "Google");

select.appendChild(option2);



document.body.appendChild(select);

console.log(document);
*/

//4 ok
/*
var input_user = document.createElement("input");
var create_atrit = input_user.setAttribute("id","usuario");
var create_atrit2 = input_user.setAttribute("type","text");

document.body.appendChild(input_user);

var input_pass = document.createElement("input");
var create_atrit3 = input_pass.setAttribute("id","pass");
var create_atrit4 = input_pass.setAttribute("type","password");

document.body.appendChild(input_pass);

var boton = document.createElement("input");
var boton_atrit = boton.setAttribute("id","cajaNum");
var boton_atrit2 = boton.setAttribute("type","button");
var boton_atrit3 = boton.setAttribute("onClick","revelar()");
var boton_atrit4 = boton.setAttribute("value","revelar");

document.body.appendChild(boton);

console.log(document);

function revelar(){

    var us = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    alert("usuario:" + us + " pass:" + pass);
    
    console.log("usuario" + us +"<br>"+ "pass" + pass);
  
  }
*/
// 5
/*
var tarea = document.createElement("input");
var create_atrit = tarea.setAttribute("id","tarea");
var create_atrit2 = tarea.setAttribute("type","text");

document.body.appendChild(tarea);
//-----------------------------------
var boton = document.createElement("input");
var boton_atrit = boton.setAttribute("id","guardar");
var boton_atrit2 = boton.setAttribute("type","button");
var boton_atrit3 = boton.setAttribute("onClick","guardar()");
var boton_atrit4 = boton.setAttribute("value","guardar");

document.body.appendChild(boton);


var tareas = [];
function guardar(tareas){ // la meto como parametro para operar con ella
  const meter_tarea = document.getElementById('tarea'); //la pillo
  tareas.push(meter_tarea);    //lo meto a la lista
  document.getElementById("tarea").value = ""; //y deberia borrarlo pero no hace nada xd
}
//-----------------------------------
var boton2 = document.createElement("input");
var boton2_atrit = boton2.setAttribute("id","mostrar");
var boton2_atrit2 = boton2.setAttribute("type","button");
var boton2_atrit3 = boton2.setAttribute("onClick","mostrar()");
var boton2_atrit4 = boton2.setAttribute("value","mostrar");

document.body.appendChild(boton2);

function mostrar(){
    
    
}
//-----------------------------------

var mostrar_tiempo = document.createElement("p");
var boton_mostrar_tiempo = mostrar_tiempo.setAttribute("id","temp");
var cansao = mostrar_tiempo.setAttribute("script","date");

document.body.appendChild(mostrar_tiempo);

var tiempo = new Date();
const meter_tiempo = document.getElementById('temp');
var texto = tiempo.getHours() + ':' + tiempo.getMinutes() + ':' + tiempo.getSeconds();
meter_tiempo.innerHTML = texto;

console.log(document);

*/


// 6

var tarea = document.createElement("input");
var create_atrit = tarea.setAttribute("id","tarea");
var create_atrit2 = tarea.setAttribute("type","text");
document.body.appendChild(tarea); //input de tarea
//---------------------------------------------------------------
var boton = document.createElement("input");
var boton_atrit = boton.setAttribute("id","guardar");
var boton_atrit2 = boton.setAttribute("type","button");
var boton_atrit3 = boton.setAttribute("onClick","guardar()");
var boton_atrit4 = boton.setAttribute("value","guardar");

document.body.appendChild(boton); //guardar
//---------------------------------------------------------------
var boton2 = document.createElement("input");
var boton2_atrit = boton2.setAttribute("id","mostrar");
var boton2_atrit2 = boton2.setAttribute("type","button");
var boton2_atrit3 = boton2.setAttribute("onClick","mostrar()");
var boton2_atrit4 = boton2.setAttribute("value","mostrar");

document.body.appendChild(boton2); //mostrar
//---------------------------------------------------------------
var borrar = document.createElement("input");
var create_atrit = borrar.setAttribute("id","eliminar");
var create_atrit2 = borrar.setAttribute("type","text");
document.body.appendChild(borrar); //input de borrar
//---------------------------------------------------------------
var boton3 = document.createElement("input");
var boton3_atrit = boton.setAttribute("id","borrar");
var boton3_atrit2 = boton.setAttribute("type","button");
var boton3_atrit3 = boton.setAttribute("onClick","borrar()");
var boton3_atrit4 = boton.setAttribute("value","borrar");

document.body.appendChild(boton3);//borrar







