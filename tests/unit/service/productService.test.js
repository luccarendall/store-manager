const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productService = require('../../../services/productService')

describe('Verifica a camada de Serviços de Produtos', () => {
  describe('testa se getAll retorna todos os produtos', () => {

    it('verifica se a função getAll retorna algum dado', async () => {
      const productData = await productService.getAll();
      expect(productData).not.to.be.null;
    })

    it('verifica se os dados são retornados na forma de array', async () => {
      const productData = await productService.getAll()
      expect(productData).to.be.an('array')
    })
    
    it('verifica se o array está vazio', async () => {
      const productData = await productService.getAll()
      expect(productData).not.to.be.empty;
    })
  })
}) 