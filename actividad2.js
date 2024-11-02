const estudiantes = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "María", calificacion: 97 },
    { nombre: "Luis", calificacion: 76 },
    { nombre: "Ana", calificacion: 64 },
    { nombre: "Pedro", calificacion: 32 }
];
estudiantes.forEach(estudiante => {
    const calificacion = parseFloat(prompt(`Ingresa la calificación de ${estudiante.nombre}:`));
    estudiante.calificacion = isNaN(calificacion) ? 0 : calificacion;
});

estudiantes.forEach(estudiante => {
    let estado;

    if (estudiante.calificacion >= 95) {
        estado = "A+";
    } else if (estudiante.calificacion >= 85) {
        estado = "A";
    } else if (estudiante.calificacion >= 70) {
        estado = "B";
    } else if (estudiante.calificacion >= 55) {
        estado = "C";
    }else if (estudiante.calificacion >= 40) {
            estado = "D";
    } else {
        estado = "F";
    }

    console.log(`${estudiante.nombre}: ${estudiante.calificacion} = ${estado}`);
});