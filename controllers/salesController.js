const salesService = require('../services/salesService');

const getSalesAll = async (_req, res) => {
  const allSalesData = await salesService.getSalesAll();
  return res.status(200).json(allSalesData);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const saleID = await salesService.getSalesById(id);
  if (!saleID || saleID === undefined) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(saleID);
};

module.exports = {
  getSalesAll,
  getSalesById,
};