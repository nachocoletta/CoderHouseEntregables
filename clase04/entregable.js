const { promises: fs } = require("fs");
const { parse } = require("path");
class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./products.txt";
  }

  async initiate() {
    await fs.writeFile(this.path, []);
  }
  async addProduct({ title, description, price, thumbnail, code, stock }) {
    try {
      if (!(title && description && price && thumbnail && code && stock)) {
        console.log(`Some data is missing, please check your input`);
        return;
      }

      const data = await fs.readFile(this.path, "utf-8");

      if (data.length) {
        this.products = JSON.parse(data);
        let newId = this.products[this.products.length - 1].id; // obtengo el ultimo id
        let findedCode = this.products.find((element) => element.code === code);
        if (findedCode) {
          console.log(`The product with code '${code}' already exists`);
        } else {
          // console.log(this.products.length);

          this.products.push({
            id: ++newId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
          });
          // console.log(this.products);
          await fs.writeFile(this.path, JSON.stringify(this.products), "utf-8");
          return `Product with code "${code}" added`;
        }
      } else {
        this.products.push({
          id: 1, // pusheo 1 porque el archivo esta vacio
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        });
        // console.log(this.products);
        await fs.writeFile(this.path, JSON.stringify(this.products), "utf-8");
        return `Product with code "${code}" added`;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  async getProducts() {
    const data = await fs.readFile(this.path, "utf-8");
    if (data.length) {
      const dataJSON = JSON.parse(data);
      return dataJSON;
    }
    return this.products;
  }
  async getProductById(id) {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      if (data.length) {
        const dataJSON = JSON.parse(data);
        let product = dataJSON.find((element) => element.id === id);
        if (product) {
          return product;
        } else {
          //   throw new Error(`Product with id "${id}" doesn't exists`);
          return `Product with id "${id}" doesn't exists`;
        }
      } else {
        return `File is empty`;
      }
    } catch (fileError) {
      console.log("File error", fileError.message);
    }
  }
  async updateProduct({
    id,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  }) {
    try {
      let product = await this.getProductById(id);
      console.log("...product", product);

      if (typeof product !== "string") {
        // console.log("existe");
        product.title = title;
        product.description = description;
        product.price = price;
        product.thumbnail = thumbnail;
        product.code = code;
        product.stock = stock;

        // console.log("product", product);
        const data = await fs.readFile(this.path, "utf-8");
        const dataJSON = JSON.parse(data);
        // console.log("dataJSON", dataJSON);
        const productIndex = dataJSON.findIndex((element) => element.id === id);
        // console.log("productIndex", productIndex);
        dataJSON[productIndex] = product;
        const newData = JSON.stringify(dataJSON);
        await fs.writeFile(this.path, newData, "utf-8");

        return product;
      } else {
        console.log("no existe");
        return product;
      }
    } catch (fileError) {
      console.log("File error", fileError.message);
    }
  }

  async deleteProduct(id) {
    try {
      let product = await this.getProductById(id);

      if (typeof product !== "string") {
        const data = await fs.readFile(this.path, "utf-8");
        let dataJSON = JSON.parse(data);
        dataJSON = dataJSON.filter((element) => element.id !== id);
        // console.log("dataJSON", dataJSON);
        const newData = JSON.stringify(dataJSON);
        await fs.writeFile(this.path, newData, "utf-8");
        return `Product with id "${id}" deleted`;
      } else {
        return `Product with id "${id}" doesn't exists can't be deleted`;
      }
    } catch (fileError) {
      console.log("File error", fileError.message);
    }
  }
}

(async () => {
  let product = new ProductManager();
  await product.initiate(); // Llama al método initiate para crear el archivo si no existe
  console.log("Products...", await product.getProducts());
  console.log(
    await product.addProduct({
      title: "producto prueba",
      description: "Este es un producto prueba",
      price: 200,
      thumbnail: "Sin imagne",
      code: "abc123",
      stock: 25,
    })
  );
  console.log("Products... ", await product.getProducts());

  console.log('Product by id "1"...', await product.getProductById(1));
  console.log('Product by id "2"...', await product.getProductById(2));

  console.log(
    await product.addProduct({
      title: "producto prueba2",
      description: "Este es un otro producto de prueba",
      price: 400,
      thumbnail: "Sin imagne",
      code: "def123",
      stock: 12,
    })
  );
  console.log(
    "update",
    await product.updateProduct({
      id: 2,
      title: "nuevo titulo",
      description: "nueva descripcion",
      price: 200,
      thumbnail: "nueva imagen",
      code: "code 2",
      stock: 12,
    })
  );
  console.log("delete", await product.deleteProduct(18));
  console.log("delete", await product.deleteProduct(1));
})();
