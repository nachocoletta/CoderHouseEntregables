let formato = `Hola {{nombre}} espero te encuetres muy bien
Queremos avisarte de nuestas nuevas ofertas de seguro de vida.`;

function contenedor(formato) {
  return function (nombre) {
    result = formato.replace('{{nombre}}', nombre)
    console.log(result);
  }
}

const contenedorV2 = (formato) => {
  return (nombre) => {
    return formato.replace('{{nombre}}', nombre);
  }
};

const crearBody = contenedorV2(formato)

const result = crearBody('María Jose');

console.log(result);

// Nombre
// Edad
// Telefono
// direccion

const onchange = (campo) => (evento) => {
  if (campo === 'name') {

  }
  if (campo === 'age') {
    
  }
  if (campo === 'address') {
    
  }

  if (campo === 'phone') {
    
  }
}

onchange('name')
onchange('age')
onchange('address')
onchange('phone')