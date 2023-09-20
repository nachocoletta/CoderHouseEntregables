let usuario = { nombre: 'Pedro López', edad: 34 };
let body = 'Hola ' + usuario.nombre + 'espero te encuetres muy bien.\n' +
  'Queremos avisarte de nuestas nuevas ofertas de seguro de vida.';
const edadFutura = usuario => usuario.edad + 1; 
let bodyV2 = `Hola ${usuario.nombre} espero te encuetres muy bien
Queremos avisarte de nuestas nuevas ofertas de seguro de vida.
Hemos visto que cumpliras ${edadFutura(usuario)} muy pronto, y queremos darte un obsequio.`;


const lista = ['Tomates', 'Atun', 'Pollo', 'Harina de trigo']

function mostrarList(lista) {
  if (!lista.length) {
    console.log('La lista esta vacia');
  } else {
    let resultado = ``
    lista.map(function(producto) {
      resultado = `${resultado}
      * ${producto}`;
    })
    console.log(resultado)
  }
  
}

mostrarList(lista)