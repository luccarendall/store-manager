const connection = require('./connection');

const getSalesAll = async () => {
  const [sales] = await connection.execute(
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
  
  return sales;
};

const getSalesById = async (id) => {
  const [sales] = await connection.execute(
  `SELECT 
    s.id AS sale_id,  
    s.date AS sale_date, 
    sp.product_id AS AS product_id, 
    sp.quantity AS sales_quantity,
  FROM
    sales AS s
  INNER JOIN
    sales_products AS sp 
  ON sale_id = sp.sale_id 
  WHERE 
    sp.sale_id = ? 
  ORDER BY 
    sale_id , product_id;
`, [id],
);

  return sales;
};

module.exports = {
  getSalesAll,
  getSalesById,
};