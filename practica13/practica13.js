/*
Crea una función flecha que acepte una matriz de números y 
devuelva true si todos los elementos de la matriz son pares 
y false en caso contrario
*/
var matriz = [[2,4,6][8,10,12]];
var mat = (matriz) =>{
    for(let i = 0;i<=matriz.lenght;i++){
        for(let k = 0;k<=matriz.lenght;k++){
            if(matriz[k] % 2 == 0){
                return true;
            }
            else{
                return false;
            }
        }
    }
}
console.log(mat(matriz));

// no entiendo por que no le gusta, devuelve algo pero no veo el que
for(let i = 0;i<=matriz.lenght;i++){
    console.log("entro a i");
    for(let k = 0;k<=matriz.lenght;k++){
        console.log("entro a k");
        if(matriz[k] % 2 == 0){
            console.log("ok");
        }
        else{
            console.log("nok");
        }
    }
}
    


/*
Escribe una función flecha (lo más simplificada posible) que 
calcule el área de un círculo dado su radio como argumento. 
La fórmula para calcular el área de un círculo es π * radio^2.

var areaC = (R) => (3.14*R^2);
console.log(areaC(2));
*/

/*
Crea una función flecha que tome una cadena de texto y devuelva la cadena de texto al revés. 
Por ejemplo: "Hola mundo" => "odnum aloH" 
(Para este ejercicio no tendrás restricciones de qué funciones puedes utilizar, pero debes hacerlo en una línea)

var vuelta = (string) => (string.reverse());
console.log(vuelta);

var palabra = "Hola mundo";
var inreverso = palabra => palabra.reverse();
console.log(inreverso(palabra));

const vuelta = str => str.reverse();
console.log(vuelta("Hola mundo"));

//funciona este
var palabra = "mi padre";
var reversing = str => str.split("").reverse().join("");
console.log(reversing(palabra)); 

*/
/*
Crea una clase “Person” con las propiedades “name”, “age”, “phone” y “gender”. 
Añade un método “GetDescription()” que devuelva una cadena de texto con la información del objeto. 
Crea “SetPhone(newPhone)” que actualice su teléfono. 
También añade un método estático “GetPopulation()” 
que devuelva el número total de personas creadas hasta el momento.
*/
/*
class Person{
    constructor(name="",age=0,phone=0,gender=""){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.gender = gender;
    }
    GetDescription(newName,newAge,newPhone,newGender){
        this.name = newName;
        this.age = newAge;
        this.phone = newPhone;
        this.gender = newGender;
        return "Me llamo " + this.name + " tengo " + this.age + " años. Mi numero de telefono es " + this.phone + " y soy " + this.gender;
    }
    SetPhone(newPhone){
        this.phone = newPhone;
    }
    GetPopulation(){
        return Person.length;
    }
}
P = new Person();
console.log(P.GetDescription("Daniel",24,6272828,"H"));
console.log(P.SetPhone(999999999));
//getpopulation no se como hacerlo
console.log(P.GetPopulation());
*/
/*
Crea una clase “Student” que herede de “Person” y 
tenga las propiedades adicionales “university” y “studentId”. 
Sobrescribe el método “GetDescription()” en la clase “Student” 
para incluir la universidad a la que asiste el estudiante y su ID de estudiante.
*/
/*
*/
class Person{
    constructor(name="",age=0,phone=0,gender=""){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.gender = gender;
    }
    GetDescription(){
        return "Me llamo " + this.name + " tengo " + this.age + " años. Mi numero de telefono es " + this.phone + " y soy " + this.gender;
    }
    SetPhone(newPhone){
        this.phone = newPhone;
    }
    GetPopulation(){
        return Person.length;
    }
}

class Student extends Person{
    constructor(name,age,phone,gender,university="",studentId=0){
        super(name,age,phone,gender);
        this.university = university;
        this.studentId = studentId;
        
    }
    GetDescription(){
        return super.GetDescription() + "Estudio en " + this.university + "y mi ID de estudiante es: " + this.studentId;
    }

}
// https://www.youtube.com/watch?v=kdicPwRzDVw&ab_channel=JohnOrtizOrdo%C3%B1ez
S = new Student("Aitor",28,66666,"H","Alovera",3232);
console.log(S.GetDescription());
