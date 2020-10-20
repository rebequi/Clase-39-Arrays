// Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 5).
// Guardar en variables el valor del primero, tercero y sexto elemento del array.
// Mostrar por consola los siguientes 3 mensajes: La banda en primer lugar es:
//  [NOMBRE_DE_LA_PRIMERA_BANDA] La banda en tercer lugar es: [NOMBRE_DE_LA_TERCERA_BANDA] La banda en sexto lugar es:
//   [NOMBRE_DE_LA_QUINTA_BANDA]


const bandas = ["the beatles", "red hot chili peppers", "radiohead", "AC/DC", "Soda Stereo", "queen", "Shakira"]
const primerElemento = bandas[0]
const tercerElemento = bandas[2]
const sextoElemento = bandas[5]

console.log (`La banda en primer lugar es ${primerElemento}. La banda en tercer lugar es ${tercerElemento}. 

La banda en el sexto lugar es ${sextoElemento}`)


// Crear un array con el nombre notas y asignar un array con 10 valores numéricos de 1 a 10.
// Hacer una funcion sumarNotas() que reciba el array como argumento y retorne la suma de todas.
// Hacer una funcion calcularPromedio() que reciba el array como argumento y retorne el promedio 
// de notas (podes utilizar sumarNotas() para reutilizar codigo).


const arrayDeNotas = [1,2,3,4,5,6,7,8,9,10]

const sumarNotas = (array) => {
let contador = 0

    for (let posicion of array ) {

        contador= contador + posicion
    } 
return contador
}

const calcularPromedio = (notas)=> {
  let promedio =  sumarNotas(notas) / notas.length
  return promedio
    
}

console.log ( calcularPromedio(arrayDeNotas))


// Declarar el array playlist
// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", 
// "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// Recorrer la lista de canciones con un ciclo for y mostrarlas en consola
// De inicio a fin
// De fin a inicio

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", 
"Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

for (let i = 0; i < playlist.length; i++) {
    const cancion = playlist[i];
    console.log (cancion)
    
}

for (let i = playlist.length - 1; i >= 0; i--){
    const cancion = playlist[i];
    console.log (cancion)
}


// Crear una funcion obtenerNumeroAlAzar() que retorne un numero del 0 al 5 al azar.
// Declarar el array items con los siguientes valores: '🍉', '🍐', '🍌', '🍇', '🍎', '🍊'
// Crear la funcion obtenerFrutaAlAzar() que reciba como argumento items y retorne una fruta del array, 
// usando la funcion obtenerNumeroAlAzar.

const obtenerNumeroAlAzar = () => {
   const number = Math.floor(Math.random() * 5);
   console.log (number)
   return number
   
}
const arrayDeFrutas = [ '🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const obtenerFrutaAlAzar = (items) => {
        return items[obtenerNumeroAlAzar()]
 }
    
console.log (obtenerFrutaAlAzar(arrayDeFrutas))
console.log (obtenerFrutaAlAzar(playlist))