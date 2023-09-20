const productos = [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];
let AllKeys = productos.reduce((keys, producto) => {
  Object.keys(producto).forEach(key => {
    if (!keys.includes(key)) {
      keys.push(key);
    }
  });
  return keys;
}, []);

let totalProducts = productos.reduce((total, producto) => {
  Object.values(producto).forEach(value => total += value);
  return total;
}, 0);

console.log('AllKeys', AllKeys);
console.log('totalProducts', totalProducts);
