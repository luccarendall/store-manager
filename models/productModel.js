const connection = require('./connection');

// getAll para receber os dados de todos os produtos https://bit.ly/3pDlXqQ
const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  return products;
};

module.exports = {
  getAll,
};