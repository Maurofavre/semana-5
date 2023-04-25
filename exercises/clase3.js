function main() {

    for(var i = 1; i <= 10; i++) {
        function imprimir(i) {  
             return function() { //closer, retorna un valor y queda guardado de una vez
                console.log(i);
              }
         }
        setTimeout(imprimir(i), 1000 * i)
        }    
     }
    
    main()