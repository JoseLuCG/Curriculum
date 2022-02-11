function imprimeHola(){
    console.log("Hola");
}


function main() {
    const elements = Array.from(document.body.querySelectorAll("*"));
    console.log(elements)
    console.log("Starting...");
    const titulo = document.querySelector("h1");
    titulo.addEventListener("pointerenter", imprimeHola);
    for (let item of elements){
        console.log(item)
    }
    for (let item of elements){
        item.addEventListener("pointerenter", ()=>{console.log("Pop!")})
    }
}
window.addEventListener("load", main);

//Definimos una función "e" y le indicamos que se llene con un selector que busque el valor del primer h1 encontrado.
//const titulo = document.querySelector("h1");
// Añadimos un evento a la constante "e" que haga que en la consola se indique "Hola" las veces que el raton pase por encima del <h1>
//titulo.addEventListener("pointerenter", ()=>{console.log("Hola")})
