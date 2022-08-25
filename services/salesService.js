const salesModel = require('../models/salesModel');

const getSalesAll = async () => {
  const allSalesData = await salesModel.getSalesAll();
  return allSalesData;
};

const getSalesById = async (id) => {
  const saleID = await salesModel.getSalesById(id);
  if (saleID.length === 0 || !saleID) return false;
  return saleID;
};

module.exports = {
  getSalesAll,
  getSalesById,
};
