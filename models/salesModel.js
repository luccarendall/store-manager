const connection = require('./connection');

const getSalesAll = async () => {
  const [sales] = await connection.execute(
 `SELECT 
    s.id AS saleId, 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity

  FROM 
    sales AS s

  INNER JOIN
    sales_products AS sp

  WHERE 
    s.id = sp.sale_id

  ORDER BY
    s.id ASC, 
    sp.product_Id ASC;`,
  );
  
  return sales;
};

const getSalesById = async (id) => {
  const [sales] = await connection.execute(
  `SELECT 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity

  FROM 
    sales AS s

  INNER JOIN
    sales_products AS sp 
    ON s.id = sp.sale_id 
    WHERE sp.sale_id = ? 

  ORDER BY 
    s.id, sp.product_id;
`,
    [id],
);

  return sales;
};

module.exports = {
  getSalesAll,
  getSalesById, 
};
