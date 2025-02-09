/* class Circulo{

    constructor(radio, nombre){
        this.radio = radio;  // es el que ingrese el usuario
        this.nombre =nombre;
    }

    getNombre(){
        return this.nombre ?? "Círculo sin nombre";
    }

    getDiametro(){
        return this.radio * 2;
    }

    getArea(){
        return Math.PI * this.radio **2;
    }
}
let radio = 5;
let cualEsRadio = radio;

let miCirculo = new Circulo(2, "Círculo de Nancy");
miCirculo =new Circulo(3)

console.log (`El ${miCirculo.getNombre()} tiene de radio: ${miCirculo.radio}`);
console.log (`El ${miCirculo.getNombre()} tiene de diámetro: ${miCirculo.getDiametro()}`);
console.log (`El ${miCirculo.getNombre()} tiene de área: ${miCirculo.getArea()}`);


//spread (...) me permite unir objetos
let persona = {nombre: "Nancy", edad: 51};
let direccion ={calle:"Independencia", numero: 9};
let participante ={ ...persona, ...direccion};
console.log (participante);

let grupo1 = {a:1, b:2, c:3};
let grupo2 = {c:3, d:4, e:5};
let total = { ...grupo1, ...grupo2};
console.log(total);


//Rest - me devuelve el resto de los elementos que yo no especifiqué

let flores ={rosa:5, clavel:3, crisantemo:2, magnolia:4};
let { rosa, magnolia, ...otrasFlores } = flores;
console.log (otrasFlores);

let colores = ["blanco", "negro", "rosa", "verde", "gris", "morado"];
let [ blanco, gris, ...otrosColores] = colores;
console.log (otrosColores); */

//  ::ACTIVIDAD DIAPO 26

const objetos = [
    { manzanas:3, peras:2, carne:1, jugos:5, dulces:2},
    { manzanas:1, sandias:1, huevos:6, jugos:1, panes:4},
];

const objetosConTodosLosProductos = { ...objetos[0], ...objetos[1]}; // el elemento 1 pisa el elemento 0
console.log(objetosConTodosLosProductos);
const nombreDeLosObjetos = Object.keys(objetosConTodosLosProductos);
console.log ("Array con los nombres de productos vendidos: "+nombreDeLosObjetos);

const sumaDeLosProductosVendidosDeCadaObjeto =
objetos.map(
    productosVendidos =>
        Object.values(productosVendidos).reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial)
);
console.log (sumaDeLosProductosVendidosDeCadaObjeto.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial));
