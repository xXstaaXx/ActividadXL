/*let persona = {nombre: 'juan', edad: 30};
console.log(persona.nombre);
console.log(persona['edad']);*/

/*let persona = {nombre: 'juan', edad: 30};
let claves = Object.keys(persona);*/

/*let persona = {nombre: 'juan', edad: 30};
let entradas = Object.entries(persona);*/

/*let obj1 = { a: 1};
let obj2 = { b: 2};
let copia = Object.assign({}, obj1, obj2);*/

/*let persona = {nombre: 'juan'};
Object.freeze(persona);
persona.nombre = 'carlos';
console.log(persona.nombre);*/

/*let persona = {nombre: 'juan'};
Object.seal(persona);
persona.nombre = 'carlos';
delete persona.nombre;*/

/*let persona = { nombre: 'juan'};
'nombre' in persona;
'edad' in persona;*/

/*let obj1 = {a: 1};
let obj2 = {b: 2};
let copia = Object.assign({}, obj1, obj2);*/

/*let persona = { nombre: 'juan'};
persona.hasOwnProperty('nombre');
persona.hasOwnProperty('edad');*/

/*let persona = { nombre: 'juan', edad: 30 };
delete persona.edad;
console.log(persona);*/

let proto = { saludo: 'hola' };
let obj = Object.create(proto);
console.log(obj.saludo);
