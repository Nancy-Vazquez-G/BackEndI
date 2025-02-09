//   ::MEJORAS DEL ES6::

const sumar = (a,b) => a+b;
const resultado = sumar(3,5);
console.log (resultado);

const potencia = 2 ** 4;
console.log (potencia);

let valoresBase= [1,2,3,4,5,6];
let nuevosValoresAlCuadrado = valoresBase.map(
    (unNumero) => unNumero**2
);

console.log (valoresBase);
console.log(nuevosValoresAlCuadrado);

//Includes: corrobora si algún elemento existe en el array o arreglo

let nombres = ['Karina', 'Nancy', 'Sharon', 'Noemi'];

const validarSiEsta = nombre => {
    if(nombres.includes(nombre)){ //includes devuelñve solo true o false
        console.log (nombre+" sí aparece dentro del arrego"); //TEMPLATE-1
    }else{
        console.log(`${nombre} no aparece en el arreglo`); //TEMPLATE-2
    }
};

validarSiEsta('Nancy');
validarSiEsta('Araceli');

let hijas={
    hija1: 1971,
    hija2:1973,
    hija3:1977,
    hija4:1981
};

let hijasNacimientos = Object.entries(hijas);
console.log(hijasNacimientos);

let hijasNumero = Object.keys(hijas);
console.log(hijasNumero);

let nacimientos = Object.values(hijas);
console.log (nacimientos);

let sumaNacimientos = nacimientos.reduce((valorInicial, valorAcumulado) => valorAcumulado+valorInicial);
console.log(sumaNacimientos);

//forma reducida de la función anterior

console.log(Object.values(nacimientos).reduce((valorInicial, valorAcumulado) => valorAcumulado+valorInicial));

//Operador nullish - da una forma más concisa y segura de asignar valores por defecto
//cuando una variable podría ser null o undefined

let var1 = null;
let var2 = var1 ?? 'Concéntrate y termina tu proyecto';
console.log (var2);


let varA = null;
let varB = varA ?? '31081973';
console.log (varB);



