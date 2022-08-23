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

module.exports = {
  getAll,
  getProductById,
};
