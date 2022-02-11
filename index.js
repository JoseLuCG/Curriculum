function main() {
    console.log("Starting...");
    const titulo = document.querySelector("h1");
    titulo.addEventListener("pointerenter", imprimeHola);
}

function imprimeHola(){
    console.log("Hola");
}

window.addEventListener("load", main);

//Definimos una función "e" y le indicamos que se llene con un selector que busque el valor del primer h1 encontrado.
//const titulo = document.querySelector("h1");
// Añadimos un evento a la constante "e" que haga que en la consola se indique "Hola" las veces que el raton pase por encima del <h1>
//titulo.addEventListener("pointerenter", ()=>{console.log("Hola")})
