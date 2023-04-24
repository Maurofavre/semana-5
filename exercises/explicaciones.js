function helloGreating(greating) {
    
    function whitName(name) {
        console.log(`${greating}, ${name} `); //${greating} es el closer, trae informacion de otra funcion por el scope
    }

    return whitName;
}

const sayHello = helloGreating("hello")
const sayHola = helloGreating("hola")