const salesService = require('../services/salesService');

const getSalesAll = async (_req, res) => {
  const allSalesData = await salesService.getSalesAll();
  return res.status(200).json(allSalesData);
};

module.exports = {
  getSalesAll,
};