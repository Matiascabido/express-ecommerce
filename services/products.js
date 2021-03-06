const productsMocks = require('../utils/mocks/products')
const MongoLib = require('../lib/mongo')

class ProductService {

  constructor(){
    this.collection = 'products'
    this.mongoDB = new MongoLib()
  }

  async getProducts( { tags } ){
    const query = tags && { tags: {$in: tags } }
    const products = await this.mongoDB.getAll(this.collection, query)
    return products || []
  }

  getProduct( { productId } ){
    return Promise.resolve(productsMocks[0])
  }
  
  createProducts( { productId } ){
    return Promise.resolve(productsMocks[0])
  }

  updateProducts( { productId, product } ){
    return Promise.resolve(productsMocks[0])
  }

  deketeProducts( { productId } ){
    return Promise.resolve(productsMocks[0])
  }

}

module.exports = ProductService