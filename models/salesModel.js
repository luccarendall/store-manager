const connection = require('./connection');

const getSalesAll = async () => {
  const [result] = await connection.execute(
 `SELECT 
    s.id AS sale_id, 
    s.date AS sale_date, 
    sp.product_id AS product_id, 
    sp.quantity AS sales_quantity,
  FROM 
    sales AS s
  INNER JOIN
    sales_products AS sp
  WHERE
    sale_id = sp.sale_id
  ORDER BY
    sale_id ASC,
    product_id ASC;`,
);
  return result;
};

module.exports = {
  getSalesAll,
};