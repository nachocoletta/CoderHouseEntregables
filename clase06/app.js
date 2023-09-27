const { ProductManager, getJSONFromFile } = require("./productManager");
const express = require("express");

const PORT = 8080;
const path = "./products.json";
// console.log("ProductManager: ", ProductManager);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get("/products", async (req, res) => {
  const { limit } = req.query;

  const products = await getJSONFromFile(path);
  if (!limit) {
    return res.status(200).send(products);
  }

  let limitProducts = products.slice(0, limit);
  res.json(limitProducts);
});

app.get("/products/:idProduct", async (req, res) => {
  const { idProduct } = req.params;

  const products = await getJSONFromFile(path);

  const product = products.filter((p) => p.id === parseInt(idProduct));

  if (product.length) {
    return res.json(product);
  } else {
    return res.send(`Product with id ${idProduct} doesn't exists.`);
  }
});

const productManager = new ProductManager(path);

const initiateFile = async () => {
  for (let i = 0; i < 10; i++) {
    await productManager.addProduct({
      title: `Producto ${i + 1}`,
      description: `Este es el producto ${i + 1}`,
      price: Math.floor(Math.random() * 1000),
      thumbnail: `Sin imagen`,
      code: `abc${i + 1}`,
      stock: Math.floor(Math.random() * 200),
    });
  }
};

initiateFile();
