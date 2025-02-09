//   ::flat remueve anidaciones internas en arrays para dejar un arreglo plano

let arrayAnidado = [
    1,
    2,
    3,
    [4, 5, 6,],
    [7, 8, 9]
];

console.log (arrayAnidado.flat());


//   :: Operador Nullish (??) vs. Operador OR (||)
//  Or || trabaja con valore falsy: false, 0, "", null, undefined y NaN
//  Nullish ?? trabaja solo con : null y undefined

let variable = 0;
console.log (variable || "Sin valor"); // imprime sin valor porque 0 es falsy
console.log (variable ?? "Sin valor"); // imprime 0 porque 0 no es null ni undefined