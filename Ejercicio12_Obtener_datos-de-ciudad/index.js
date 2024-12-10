function obtenerDatosDeCiudad(nombre,poblacion,pais){
   // const nombre = "Santa Fe"; ----------Si coloco estas constantes no me devuelve nada console.log--------
   // const poblacion = 545606 ; 
   // const pais = "Argentina" ;
    return `La ciudad de ${nombre} tiene una población de ${poblacion} y está ubicada en ${pais}`;
}
console.log(obtenerDatosDeCiudad("Santa Fe", 545606, "Argentina" ));