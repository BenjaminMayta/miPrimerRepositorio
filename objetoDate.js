let fechaHoy = new Date()

let fechaDeCumpleaños = new Date (1996,6,19)


console.log(fechaHoy.getDate());
console.log(fechaHoy.getMonth());
console.log(fechaHoy.getFullYear());
console.log(fechaHoy.getUTCHours());//Hora
console.log(fechaDeCumpleaños.toDateString());//La fecha como string
console.log(fechaDeCumpleaños.toLocaleDateString());//La fecha local
console.log(fechaHoy.toLocaleTimeString());//Hora local
