

/*---------Declaro la función------------*/
function sumar(a, b){
    const resultado = a + b 
    return resultado             
    /*------------o puedo hacer asi:-------*/
   // return a + b
}
console.log( sumar (2, 3));
console.log( sumar(1.2, 3.4));
console.log( sumar(3, -5));







/*------------Ejemplo 3 de clase--------*/
/*const edadPersona1 = 16;

function evaluarEdad() {
    const edadPermitidaMinima = 18;
    const edadMaximaPermitida = 150;
    const personaPermitida = 
        edadPersona1 >= 18 && edadPersona1 <= edadMaximaPermitida;

    return persona1Habilitada; = evaluarEdad();    
}
const persona1Habilitada = evaluarEdad();*/

/*-----------Ejemplo 4 de clase---------*/

/*const edadPersona1 = 16;
const edadPersona2 = 25;
const edadPersona3 = 160;

function evaluarEdad(edad) {
    const edadPermitidaMinima = 18;
    const edadMaximaPermitida = 150;
    const personaPermitida = 
        edadPersona1 >= 18 && edadPersona1 <= edadMaximaPermitida;

    return personaPermitida;    
}
const persona1Habilitada = evaluarEdad(edadPersona1);
const persona2Habilitada = evaluarEdad(edadPersona2);
const persona3Habilitada = evaluarEdad(edadPersona3);
-----Pueden haber varios parametros en una funcion , se separan con una coma*/