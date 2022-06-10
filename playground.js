function callback(url){
    return 'http://' + url
}

function procesarMap(array,callback){
    return array.map(arr=>callback(arr))
}

function procesar(array,callback){
    let arrayNuevo = [] 
    for (let i = 0;i < array.length; i++) {
            arrayNuevo.push(callback(array[i]))
            
        }
    return arrayNuevo
}