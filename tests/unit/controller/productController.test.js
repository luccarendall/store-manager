const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productController = require('../../../controllers/productController')

describe('Verifica a camada de Controladores de Produtos', () => {
  describe('testa o controller de getAll ', () => {
    const res = {}
    const req = {}

    before(
      () => {
        res.status = sinon
          .stub().returns(res)
        
        res.json = sinon
          .stub().returns()
    })
    
    it('Espera que o status seja OK', async () => {
      await productController.getAll(req, res)

      expect(res.status.calledWith(200)).to.be.equal(true)
    })
  })

  describe('Testa o controller do getProductById em caso de erro', () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { id: 1414 }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ message: "Product not found" });
    });

    it('Verifica se retorna o status 404 (Not Found) ao realizar requisição em com um parâmetro inválido', async () => {
      await productController.getProductById(req, res)
      expect(res.status.calledWith(404)).to.be.equal(true)
    })

    it('Retorna a mensagem de erro "product not found" ao realizar requisição em com um parâmetro inválido', async () => {
      await productController.getProductById(req, res)
      expect(
        res.json.calledWith(
          { message: "Product not found" }
        )
      ).to.be.equal(true);
    })
  })
})