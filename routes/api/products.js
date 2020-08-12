const express = require('express')
const router = express.Router()
const ProductService = require('../../services/products')
const e = require('express')
//const productMock = require('../../utils/mocks/products')

const productService = new ProductService()


router.get('/', async function(req, res, next ) {
  const { tags } = req.query
  try {
    const getProducts = await productService.getProducts({ tags })

    res.status(200).json({
      data: getProducts,
      mensaje:'product listed'
    })

  } catch (error) {
    next(error)
  }

})

router.get('/:productId', async function(req, res, next) {
  const { productId } = req.params
  try {  
    const getProduct = await productService.getProduct({ productId })

    res.status(200).json({
      data: getProduct,
      mensaje:'product retrived'
    })

  } catch (error) {
    next(error)
  }


})

router.post('/', async function(req, res, next) {
  const { body:product } = req
  
  try {
    const createProduct = await productService.createProducts({ product })

    res.status(201).json({
      data: createProduct,
      mensaje:'product inserted'
    })

  } catch (error) {
    next(error)
  }

})

router.put('/:productId', async function(req, res, next) {
  const { productId } = req.params
  const { body:product } = req
  
  try {
    const editProduct = await productService.updateProducts({ productId, product })
    
    res.status(200).json({
      data: editProduct,
      mensaje:'product updated'
    })

  } catch (error) {
    next(error)
  }

})

router.delete('/:productId', async function(req, res, next) {
  const { productId } = req.params
  
  try { 
    
    const deleteProduct = await productService.updateProducts({ productId })

    res.status(200).json({
      data: deleteProduct,
      mensaje:'product deleted'
    })

  } catch (error) {
    next(error)
  }

})


module.exports = router