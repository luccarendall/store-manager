const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productController = require('../../../controllers/productController')

// https://sinonjs.org/
// https://bit.ly/3chbRJc
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

  describe('Verifica o controller do getProductById com um parâmetro invalido', () => {
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

  describe('verifica o controller getProductById com um parâmetro válido', () => {
    const res = {};
    const req = {};
    const dataCorrect = {
      id: 3,
      name: "Martelo do Thor",
    };

    const SUCESS_HTTP_STATUS_CODE = 200;

    before(() => {
      req.params = { id: 3 }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(dataCorrect);
    })

    it('Verifica se a função retorna o status de sucesso', async () => {
      await productController.getProductById(req, res)
      expect(res.status.calledWith(SUCESS_HTTP_STATUS_CODE)).to.be.equal(true)
    })

    it('Verifica se a função retorna o objeto esperado', async () => {
      await productController.getProductById(req, res)
      expect(res.json.calledWith(dataCorrect)).to.be.equal(true)
    })
  })
})