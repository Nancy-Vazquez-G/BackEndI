//  FUNCIONES DEFINIDAS - llevan nombre y se invocan a partir del nombre

//   Funciones Tradicionales

function suma (a,b){
    return a+b
}
console.log (suma(1,2));

//  Funciones flecha
let resta = (c,d) => c - d;
console.log (resta(9,2));

//  ::  FUNCIONES ANÓNIMAS

(function (){   // abre parénntesis antes de function
       console.log ("Soy una función anónima")
})();

//  Funciones Callback - pasamos una función como argumento

function menuEnCasa (callback){
    // cualquier función

    callback();
}

menuEnCasa(() => console.log("Desayuno: Huevos + café"));
menuEnCasa(() => console.log("Comida: Alambre + refresco"));
menuEnCasa(() => console.log("Merienda: pan de zanahoria"));

// Ejemplo de mostrar nombres de un Array aplicando callback a cada elemento

let materias = ["matemáticas", "química", "español"];
materias.forEach(
    //callback con nunción flecha
    materia => console.log (materia)
);

materias.forEach(
    //callback con función tradicional
    function(materia) {console.log(materia);}
);

