class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(`Some data is missing, please check your input`);
      return;
    }

    let findedCode = this.products.find((element) => element.code === code);

    if (!findedCode) {
      this.products.push({
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
    } else {
      console.log(`The product with code '${code}' already exists`);
      return;
    }
    console.log("Product added");
    return product;
  }

  getProductById(id) {
    let product = this.products.find((product) => product.id === id);

    if (!product) {
      //   throw new Error(`Product doesn't exists`);
      let notFound = `Product with id ${id} doesn't exist`;
      return notFound;
    }
    return product;
  }
}

let product = new ProductManager();

console.log("Existing products:", product.getProducts());

product.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log("Existing products:", product.getProducts());

product.addProduct({
  title: "producto prueba 2",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log("Product with id 1", product.getProductById(1));
console.log("Product with id 2", product.getProductById(2));
