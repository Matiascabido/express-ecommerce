const express = require('express')
const router = express.Router()
const productMocks = require('../utils/mocks/products')

router.get('/', function(req, res){
  res.render("products",{ productMocks })
})

module.exports = router