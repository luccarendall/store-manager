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
})