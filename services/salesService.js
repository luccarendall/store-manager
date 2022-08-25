const salesModel = require('../models/salesModel');

const getSalesAll = async () => {
  const allSalesData = await salesModel.getSalesAll();
  return allSalesData;
};

module.exports = {
  getSalesAll,
  getSalesById,
};
