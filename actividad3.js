let libros = [];
// qué es: Una variable global que es un arreglo (array) donde se almacenan los
// libros. Cada libro es representado por un objeto con propiedades titulo, autor y anio.

// Función para agregar un libro
// Qué hace:

// Recibe tres parámetros (titulo, autor, anio) para crear un nuevo libro.
// Primero verifica que los tres campos sean provistos. Si falta alguno, muestra un mensaje y no agrega nada.
// Si los datos son válidos, el libro (objeto) es agregado al arreglo libros usando push.
// Finalmente, imprime un mensaje confirmando que el libro fue añadido.

function agregarLibro(titulo, autor, anio) {
    if (!titulo || !autor || !anio) {
        console.log("Completa todos los campos.");
        return;
    }
    libros.push({ titulo, autor, anio });
    console.log(`Libro "${titulo}" agregado.`);
}

// Función para eliminar un libro
// Qué hace:

// Busca un libro en la colección que coincida con el titulo proporcionado.
// Si lo encuentra, elimina el libro del arreglo usando splice en el índice correspondiente.
// Si no lo encuentra, imprime un mensaje diciendo que el libro no existe.

function eliminarLibro(titulo) {
    const indice = libros.findIndex(libro => libro.titulo === titulo);
    if (indice !== -1) {
        libros.splice(indice, 1);
        console.log(`Libro "${titulo}" eliminado.`);
    } else {
        console.log(`Libro "${titulo}" no encontrado.`);
    }
}

// Función para listar todos los libros
// Qué hace:

// Si no hay libros en la colección, muestra un mensaje diciendo que no hay libros.
// Si hay libros, los imprime en formato sencillo, mostrando el título, el autor y el año de cada libro.

function listarLibros() {
    if (libros.length === 0) {
        console.log("No hay libros en la colección.");
    } else {
        libros.forEach(libro => console.log(`lista de libros\n\n${libro.titulo} - ${libro.autor} (${libro.anio})\n\n`));
    }
}

// Función para buscar un libro
// Qué hace:

// Busca un libro por su título en el arreglo.
// Si lo encuentra, imprime los detalles del libro (título, autor, año).
// Si no lo encuentra, imprime un mensaje indicando que no existe.

function buscarLibro(titulo) {
    const libro = libros.find(libro => libro.titulo === titulo);
    libro
        ? console.log(`${libro.titulo} libro encontrado`)
        : console.log(`Libro "${titulo}" no encontrado.`);
}

// Función para actualizar un libro
// Qué hace:

// Busca un libro en la colección por su título.
// Si lo encuentra, actualiza los datos del libro con los nuevos valores proporcionados. Si algún campo no se proporciona, conserva el valor original.
// Si no encuentra el libro, imprime un mensaje indicando que no existe.

function actualizarLibro(titulo, nuevoTitulo, nuevoAutor, nuevoAnio) {
    const libro = libros.find(libro => libro.titulo === titulo);
    if (libro) {
        libro.titulo = nuevoTitulo || libro.titulo;
        libro.autor = nuevoAutor || libro.autor;
        libro.anio = nuevoAnio || libro.anio;
        console.log(`Libro "${titulo}" actualizado.`);
    } else {
        console.log(`Libro "${titulo}" no encontrado.`);
    }
}

agregarLibro("El principito", "Antoine de Saint-Exupéry", 1944);
agregarLibro("Escuela de negocios", "Robert Toru Kiyosaki", 1947);
listarLibros();
buscarLibro("El principito");
// eliminarLibro("Escuela de negocios");
actualizarLibro("El principito", "el vago", "elmo");
listarLibros();
