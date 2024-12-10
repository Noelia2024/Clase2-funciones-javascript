const saludar = function(nombre){
    //return "Hola,"+ " " + nombre +" " + "un gusto en conocerte" -------No era asi!------
    return `Hola ${nombre} un gusto conocerte` //------Asi era!-------
}
console.log(saludar( "Ada"))