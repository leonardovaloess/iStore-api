import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await Product.create(product);
  return res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const productToDelete = await Product.findByIdAndDelete(productId);

  if (!productToDelete) {
    return res.status(404).json({ message: "produto não existe!" });
  }
  return res.status(200).json({ message: "Produto removido com sucesso" });
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, stock, type } = req.body;

  const productToEdit = await Product.findByIdAndUpdate(
    productId,
    { name, price, stock, type },
    { new: true }
  );

  if (!productToEdit) {
    res.status(404).json({ message: "produto não existe!" });
  } else {
    return res.status(200).json({ message: "Produto editado com sucesso" });
  }
};

export { getProducts, createProduct, deleteProduct, editProduct };
