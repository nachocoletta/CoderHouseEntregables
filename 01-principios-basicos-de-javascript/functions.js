this.variable = 'mensaje desde scope global';

var self = this;

function sumar(a, b) {
  this.variable = 'Hola coder house';
  console.log('suma', self.variable)
  return a + b;
}

let resta = (a, b) => {
  console.log(this.variable)
  return a - b;
}

const restav2 = (a, b) => (a - b);

function padre() {
  this.llave = 'ssssss';
  const hija = () => {
    console.log('hija => llave', this.llave);
  }
  hija();
  console.log('padre => llave', this.llave)
}

console.log(restav2(5, 4))