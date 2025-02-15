class Cola {
    constructor(tamano) {
        this.items = [];
        this.tamano = tamano; // Se agrega el tamaño de la cola
    }

    enqueue(elemento) {
        if (this.colaLlena()) { // Verifica si la cola está llena
            console.log("La cola está llena");
            return "La cola está llena";
        }
        this.items.push(elemento);
    }

    dequeue() {
        if (this.colaVacia()) { // Verifica si la cola está vacía
            console.log("La cola está vacía");
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    insertar(elemento, posicion) {
        if (this.colaLlena()) { // Verifica si la cola está llena
            console.log("La cola está llena");
            return "La cola está llena";
        }
        if (posicion < 0 || posicion > this.items.length) { // Verifica si la posición es válida
            console.log("Posición inválida");
            return "Posición inválida";
        }
        this.items.splice(posicion, 0, elemento); // Inserta el elemento en la posición especificada
        console.log(`Elemento ${elemento} insertado en la posición ${posicion}`);
    }

    frente() {
        if (this.colaVacia()) { // Verifica si la cola está vacía
            console.log("La cola está vacía");
            return "La cola está vacía";
        }
        return this.items[0]; // Devuelve el primer elemento de la cola
    }

    quitarFrente() {
        if (this.colaVacia()) { // Verifica si la cola está vacía
            console.log("La cola está vacía");
            return "La cola está vacía";
        }
        const elementoFrente = this.items.shift(); // Retira y extrae el elemento al frente de la cola
        console.log(`Elemento ${elementoFrente} retirado del frente de la cola`);
        return elementoFrente;
    }

    colaVacia() {
        return this.items.length === 0; // Comprueba si la cola está vacía
    }

    colaLlena() {
        return this.items.length >= this.tamano; // Comprueba si la cola está llena
    }

    tamanoCola() {
        return this.items.length; // Devuelve el tamaño actual de la cola
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola

let cola = new Cola(5); // Se especifica el tamaño de la cola a 5 elementos

cola.enqueue('Cliente 1');
cola.enqueue('Cliente 2');
cola.enqueue('Cliente 3');
cola.enqueue('Cliente 4');
cola.enqueue('Cliente 5');
cola.mostrar();
console.log("Atendiendo:", cola.dequeue());
console.log("Siguiente en la fila:", cola.frente());
cola.enqueue('Cliente 6');
cola.mostrar();
console.log("Intentando agregar otro cliente:", cola.enqueue('Cliente 7'));

// Prueba del método insertar
cola.insertar('Cliente 8', 2); // Inserta 'Cliente 8' en la posición 2
cola.mostrar();

// Prueba del método quitarFrente
console.log("Retirando el elemento al frente:", cola.quitarFrente());
cola.mostrar();

// Prueba de los métodos colaLlena y colaVacia
console.log("¿La cola está llena?", cola.colaLlena());
console.log("¿La cola está vacía?", cola.colaVacia());

// Prueba de los métodos frente y tamanoCola
console.log("Elemento al frente de la cola:", cola.frente());
console.log("Tamaño actual de la cola:", cola.tamanoCola());