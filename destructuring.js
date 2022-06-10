/* Aplicado a arraay */

let colores = ['Rojo','Azul','Amarillo']

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [rojo,azul,amarillo] = colores// No necesariamente tiene que tener el mismo nombre del componente las variables

/* Aplicado a objetos literales */

let auto = {
    marca: 'Volkswagen',
    modelo: 'Vento',
    precio: 6000000,
    km: 60000,
    color: 'Turquesa',
    anio: 2020,
    patente: 'COM017',
    vendido: true
}
let {marca,modelo,precio,km,color : pintura,anio,patente,vendido} = auto// No hace falte que este ordenado como en el objeto literario, solo importa que tengan el mismo nombre y para cambiar de nombre a una variable tengo que usar : 
console.log(pintura);