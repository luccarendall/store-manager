const connection = require('./connection');

// getAll para receber os dados de todos os produtos https://bit.ly/3pDlXqQ
const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return products;
};

// getProductById para receber os dados específicos de um produto mediante seu ID https://bit.ly/3CGljRp
const getProductById = async (id) => {
  // tabnine.com/code/javascript/functions/mysql/Connection/execute
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [productsData] = await connection.execute(query, [id]);
  // if (productsData.length === 0) return console.log('productsData vazio');
  return productsData;
};

// https://bit.ly/3TqPLF5
const createProduct = async (name) => {
  const [newProduct] = await connection.execute(
    'INSERT INTO products (name) VALUES (?);',
    [name],
  );

  return newProduct;
};

const updateProductInfo = async (name, id) => {
  const [newProduct] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?;',
    [name, id],
  );
  
  return newProduct;
};

// https://mzl.la/3pK19OE
const deleteProduct = async (id) => {
  const [productDeleted] = await connection.execute('DELETE FROM products WHERE id = ?',
    [id]);
  
  return productDeleted;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProductInfo,
  deleteProduct,
};
