//----------------------------------------------Actividad N.1----------------------------------------------------------
/*   // Inicializar un array vacío
let array = [];
//Se declara un array vacío llamado elementos. Este array se utilizará para almacenar los elementos que el usuario desee agregar.

// Función para mostrar el estado actual del array

function mostrarArray() {
    console.log("Estado actual del array:", array);
}
// esta función muestra el estado actual del array en la consola.
// Al llamar a esta función, se imprime en la consola el contenido del array


// Función para agregar un elemento al array
function agregarElemento(elemento) {
    array.push(elemento);
    console.log(`"${elemento}" ha sido agregado al array.`);
    mostrarArray();
}
// Esta función toma un argumento elemento, que representa el valor que el usuario desea agregar al array.
// Utiliza el método push() para añadir el elemento al final del array elementos.
// Después de agregar el elemento, se imprime un mensaje confirmando la adición.
// Finalmente, se llama a la función mostrarArray para mostrar el array actualizado en la consola.


// Función para eliminar el último elemento del array
function eliminarUltimoElemento() {
    if (array.length === 0) {
        console.log("El array está vacío, no hay elementos para eliminar.");
    } else {
        const elementoEliminado = array.pop();
        console.log(`"${elementoEliminado}" ha sido eliminado del array.`);
    }
    mostrarArray();
}
// Esta función se encarga de eliminar el último elemento del array elementos.
// Primero, verifica si el array está vacío (usando elementos.length === 0). Si está vacío, imprime un mensaje indicando que no hay elementos para eliminar y sale de la función.
// Si hay elementos en el array, utiliza pop() para eliminar y devolver el último elemento. Este elemento se almacena en la variable elementoEliminado.
// Luego, se imprime un mensaje que indica cuál elemento ha sido eliminado.
// Finalmente, se llama a mostrarArray para mostrar el array actualizado.


// Ejemplo de uso:
agregarElemento("Manzana");
agregarElemento("Banana");
agregarElemento("Naranja");

eliminarUltimoElemento();
eliminarUltimoElemento();

agregarElemento("Mango");

eliminarUltimoElemento();
eliminarUltimoElemento();
eliminarUltimoElemento();  // Intento de eliminar cuando el array está vacío    

// Se llama a agregarElemento para añadir "Manzana" y luego "Banana" al array.
// Después, se llama a eliminarUltimoElemento para quitar el último elemento, que sería "Banana".
// Se vuelve a llamar a eliminarUltimoElemento, eliminando "Manzana" en esta segunda llamada.  */


//--------------------------------------------------Actividad N.2-----------------------------------------------------------


/*   // Inicializar una lista vacía de tareas
let listaTareas = [];

// Se declara un array vacío llamado tareas que almacenará las tareas que el usuario desee agregar.


// Función para mostrar el estado actual de la lista de tareas
function mostrarListaTareas() {
    console.log("Lista actual de tareas:", listaTareas);
}
// Esta función imprime el estado actual del array tareas.
// Si el array está vacío, muestra un mensaje indicando que no hay tareas en la lista.
// Si hay tareas, utiliza forEach() para recorrer el array y mostrar cada tarea junto con su índice (empezando desde 1).


// Función para agregar una nueva tarea al principio de la lista
function agregarTarea(tarea) {
    listaTareas.unshift(tarea);
    console.log(`"${tarea}" ha sido agregada al principio de la lista.`);
    mostrarListaTareas();
}
// Esta función acepta un argumento tarea, que representa la tarea que se desea agregar.
// Utiliza unshift() para añadir la tarea al principio del array tareas.
// Después de agregar la tarea, imprime un mensaje confirmando la adición y llama a mostrarTareas() para mostrar la lista actualizada.


// Función para eliminar la tarea más antigua (primer elemento) de la lista
function eliminarTareaAntigua() {
    if (listaTareas.length === 0) {
        console.log("La lista de tareas está vacía, no hay tareas para eliminar.");
    } else {
        const tareaEliminada = listaTareas.shift();
        console.log(`"${tareaEliminada}" ha sido eliminada de la lista.`);
    }
    mostrarListaTareas();
}
// Esta función se encarga de eliminar la tarea más antigua (es decir, la primera tarea en la lista).
// Primero, verifica si el array está vacío. Si está vacío, imprime un mensaje que indica que no hay tareas para eliminar y sale de la función.
// Si hay tareas en la lista, utiliza shift() para eliminar y devolver la tarea más antigua, almacenándola en la variable tareaEliminada.
// Imprime un mensaje confirmando cuál tarea ha sido eliminada y luego llama a mostrarTareas() para mostrar la lista actualizada.


// Ejemplo de uso:
agregarTarea("Comprar leche");
agregarTarea("Hacer ejercicio");
agregarTarea("Leer un libro");

eliminarTareaAntigua();
eliminarTareaAntigua();

agregarTarea("Terminar proyecto");

eliminarTareaAntigua();
eliminarTareaAntigua();
eliminarTareaAntigua();  // Intento de eliminar cuando la lista está vacía

// Se llama a agregarTarea para añadir la tarea "Hacer la compra" y luego "Estudiar para el examen" al array.
// Después, se llama a eliminarTareaAntigua() para eliminar la tarea más antigua, que sería "Hacer la compra".
// Se llama nuevamente a eliminarTareaAntigua() para eliminar "Estudiar para el examen".   */




//----------------------------------------------------------Actividad N.3-------------------------------------------



/*    // Inicializar un array con algunos elementos
let elementos = ["Manzana", "Banana", "Naranja", "Uva", "Melón"];

// Se declara un array llamado elementos, que contiene una lista inicial de frutas.
//  Este array se utilizará para demostrar las operaciones de eliminación y adición.


// Función para mostrar el estado actual del array
function mostrarArray() {
    console.log("Array actual:", elementos);
}
// Esta función imprime el estado actual del array elementos.
// Es una forma útil de ver cómo el array cambia después de cada operación de modificación.


// Función para eliminar elementos y opcionalmente agregar nuevos en una posición específica
function modificarArray(posicion, cantidadEliminar, ...nuevosElementos) {
    if (posicion < 0 || posicion >= elementos.length) {
        console.log("Posición inválida.");
        return;
    }
    // posicion: La posición en el array desde la cual se realizarán las modificaciones.
    // cantidadEliminar: El número de elementos que se desean eliminar a partir de la posicion.
    // nuevosElementos: Un operador de propagación que permite pasar múltiples argumentos que se agregarán al array.


    const elementosEliminados = elementos.splice(posicion, cantidadEliminar, ...nuevosElementos);
    console.log(`${cantidadEliminar} elemento(s) eliminado(s):`, elementosEliminados);

    // Se verifica que la posicion esté dentro de los límites del array.
    //  Si no lo está, se imprime un mensaje de error y se sale de la función.

    
    if (nuevosElementos.length > 0) {
        console.log(`Nuevo(s) elemento(s) agregado(s) en la posición ${posicion}:`, nuevosElementos);
    }
    // elementos.splice(posicion, cantidadEliminar, ...nuevosElementos) realiza las modificaciones.
    // El método splice() toma tres argumentos en este caso:
    // posicion: el índice desde donde se comenzarán las eliminaciones o adiciones.
    // cantidadEliminar: el número de elementos a eliminar desde esa posición.
    // nuevosElementos: elementos que se agregarán en la misma posición.
    // splice() devuelve un array que contiene los elementos eliminados, los cuales se almacenan en elementosEliminados.


    mostrarArray();
}

// Ejemplo de uso:
mostrarArray();

// Eliminar 2 elementos desde la posición 1
modificarArray(1, 2);

// Eliminar 1 elemento desde la posición 2 y agregar nuevos elementos
modificarArray(2, 1, "Pera", "Durazno");

// Agregar 2 nuevos elementos sin eliminar (cantidadEliminar es 0)
modificarArray(1, 0, "Kiwi", "Cereza");

// Se llama a mostrarArray() para mostrar el array inicial: ["Manzana", "Banana", "Naranja", "Uva", "Melón"].
// Primera modificación: modificarArray(1, 2):
// Elimina 2 elementos desde la posición 1 (que son "Banana" y "Naranja").
// El array se convierte en ["Manzana", "Uva", "Melón"].
// Segunda modificación: modificarArray(2, 1, "Pera", "Durazno"):
// Elimina 1 elemento desde la posición 2 (que es "Melón") y agrega "Pera" y "Durazno" en esa misma posición.
// El array se convierte en ["Manzana", "Uva", "Pera", "Durazno"].
// Tercera modificación: modificarArray(1, 0, "Kiwi", "Cereza"):
// No elimina elementos (0 elementos a eliminar) y agrega "Kiwi" y "Cereza" en la posición 1.
// El array final es ["Manzana", "Kiwi", "Cereza", "Uva", "Pera", "Durazno"].  */

//---------------------------------------------------------Actividad N.4----------------------------------------------



/*   // Inicializar un array con nombres de frutas
let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Melón", "Pera", "Durazno"];

// Se declara un array llamado frutas, que contiene una lista de diferentes tipos de frutas.
//  Este array será el base para demostrar cómo utilizar slice().


// Función para mostrar el estado actual del array
function mostrarArray(array, nombre) {
    console.log(`Array ${nombre}:`, array);
}
// Esta función toma dos parámetros:
// array: el array que se desea mostrar.
// nombre: una etiqueta para identificar el array en la salida (por ejemplo, "Original" o "Subconjunto").
// La función utiliza console.log() para imprimir el nombre del array y su contenido en la consola.
//  Esto ayuda a visualizar el estado del array original y del subconjunto creado.


// Función para crear un nuevo array con un subconjunto usando slice()
function crearSubconjunto(inicio, fin) {
    if (inicio < 0 || fin > frutas.length || inicio >= fin) {
        console.log("El rango de índices es inválido.");
        return;
    }
    // Parámetros:
    // inicio: el índice desde el cual se comenzará a seleccionar elementos.
    // fin: el índice hasta el cual se seleccionarán los elementos (no inclusivo).


    const nuevoArray = frutas.slice(inicio, fin); // Crea un nuevo array desde el índice 'inicio' hasta 'fin'
    mostrarArray(frutas, "Original");
    mostrarArray(nuevoArray, "Subconjunto");
}
// El método slice() toma los dos argumentos inicio y fin, y crea un nuevo array que contiene
//  los elementos desde el índice inicio hasta fin - 1.
//  Es importante recordar que slice() no modifica el array original.
// Se llama a mostrarArray(frutas, "Original") para mostrar el array original y a mostrarArray(nuevoArray, "Subconjunto")
//  para mostrar el nuevo array creado.

// Ejemplo de uso:
crearSubconjunto(1, 4);  // Crea un subconjunto desde el índice 1 hasta el 4 (excluyendo el 4)
crearSubconjunto(0, 3);  // Crea un subconjunto desde el índice 0 hasta el 3 (excluyendo el 3)
crearSubconjunto(2, 5);  // Crea un subconjunto desde el índice 2 hasta el 5 (excluyendo el 5)
// Primera llamada: crearSubconjunto(1, 4):
// Selecciona elementos desde el índice 1 hasta el 3 (el índice 4 no se incluye).
// Los elementos seleccionados son ["Banana", "Naranja", "Uva"].
// Segunda llamada: crearSubconjunto(0, 3):
// Selecciona elementos desde el índice 0 hasta el 2.
// Los elementos seleccionados son ["Manzana", "Banana", "Naranja"].
// Tercera llamada: crearSubconjunto(2, 5):
// Selecciona elementos desde el índice 2 hasta el 4.
// Los elementos seleccionados son ["Naranja", "Uva", "Melón"]. */


//-------------------------------------------------Actividad N.5--------------------------------------------------------




     // Inicializar una lista vacía de contactos
let contactos = [];

// Función para mostrar la lista de contactos
function mostrarContactos() {
    if (contactos.length === 0) {
        console.log("No hay contactos en la lista.");
    } else {
        console.log("Lista de Contactos:");
        contactos.forEach((contacto, index) => {
            console.log(`${index + 1}: ${contacto}`);
        });
    }
}

// Función para agregar un contacto al final de la lista
function agregarContacto(contacto) {
    contactos.push(contacto);
    console.log(`"${contacto}" ha sido agregado a la lista.`);
    mostrarContactos();
}

// Función para eliminar el último contacto
function eliminarUltimoContacto() {
    if (contactos.length === 0) {
        console.log("No hay contactos para eliminar.");
    } else {
        const contactoEliminado = contactos.pop();
        console.log(`"${contactoEliminado}" ha sido eliminado de la lista.`);
        mostrarContactos();
    }
}

// Función para eliminar el primer contacto
function eliminarPrimerContacto() {
    if (contactos.length === 0) {
        console.log("No hay contactos para eliminar.");
    } else {
        const contactoEliminado = contactos.shift();
        console.log(`"${contactoEliminado}" ha sido eliminado de la lista.`);
        mostrarContactos();
    }
}

// Función para agregar un contacto al principio de la lista
function agregarContactoAlPrincipio(contacto) {
    contactos.unshift(contacto);
    console.log(`"${contacto}" ha sido agregado al principio de la lista.`);
    mostrarContactos();
}

// Función para eliminar un contacto en una posición específica
function eliminarContactoPorPosicion(posicion) {
    if (posicion < 1 || posicion > contactos.length) {
        console.log("Posición inválida.");
    } else {
        const contactoEliminado = contactos.splice(posicion - 1, 1);
        console.log(`"${contactoEliminado}" ha sido eliminado de la lista.`);
        mostrarContactos();
    }
}

// Función para obtener un subconjunto de contactos
function obtenerSubconjuntoContactos(inicio, fin) {
    const subconjunto = contactos.slice(inicio - 1, fin); // Ajustar índices para que sean 1-basados
    console.log("Subconjunto de Contactos:");
    mostrarContactos();
    console.log("Subconjunto:", subconjunto);
}

// Ejemplo de uso:
agregarContacto("Juan Pérez");
agregarContacto("María López");
agregarContacto("Carlos García");

eliminarUltimoContacto();
eliminarPrimerContacto();

agregarContactoAlPrincipio("Ana Torres");

eliminarContactoPorPosicion(1); // Eliminar el primer contacto

obtenerSubconjuntoContactos(1, 2); // Obtener un subconjunto de los primeros 2 contactos

