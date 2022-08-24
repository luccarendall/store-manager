const validateID = async (req, res, next) => {
  const { id: productID } = req.params;
  if (productID === undefined) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  
  if (!name || name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
     next();
};

module.exports = {
  validateID,
  validateName,
};