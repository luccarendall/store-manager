const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection')

const productModel = require('../../../models/productModel')


describe('Verifica a camada modelo de Produtos', () => {
  describe('Verifica se a função getAll retorna um array com todos os produtos', () => {
     
    it('verifica se a função getAll retorna algum dado', async () => {
      const productData = await productModel.getAll();
      expect(productData).not.to.be.null;
    })
   
    it('verifica se os dados são retornados na forma de array', async () => {
      const productData = await productModel.getAll()
      expect(productData).to.be.an('array')
    })

    it('verifica se o array está vazio', async () => {
      const productData = await productModel.getAll();
      expect(productData).not.to.be.empty;
    })
  })
})

