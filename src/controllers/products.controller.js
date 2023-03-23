import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM products");
  res.json(result);
};

export const postProducts = async(req, res) => {

    const {name, category, material, price, stock} = req.body
    await pool.query(
      'INSERT INTO products (name_product,category_product,material_product,price_product,stock_product) VALUES (?,?,?,?,?)', [name, category, material, price, stock]
    );
    
    res.send('Post success');
};

export const putProducts = (req, res) => {
  res.send("add product");
};

export const deleteProducts = (req, res) => {
  res.send("add product");
};