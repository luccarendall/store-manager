const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productController = require('../../../controllers/productController')

describe('Verifica a camada de Controladores de Produtos', () => {
  describe('testa o controller de getAll ', () => {
    const response = {}
    const request = {}

    before(
      () => {
        response.status = sinon
          .stub().returns(response)
        
        response.json = sinon
          .stub().returns()
    })
    
    it('Espera que o status seja OK', async () => {
      await productController.getAll(request, response)

      expect(response.status.calledWith(200)).to.be.equal(true)
    })

  })

  describe('Verifica se é possível adicionar um novo produto', () => {
    const newProduct = 'Harry Potter e o prisioneiro de Azkaban'

    it('verifica se retorna algum dado', async () => {
      const data = await productController.createProduct(newProduct)
      expect(data).not.to.be.null;
    })

    it('verifica se retorna um objeto', async () => {
      const data = await productController.createProduct(newProduct)
      expect(data).to.be.a('object')
    })
  })
})