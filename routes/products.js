 const express = require('express');
 const router = express.Router();
 
 const{getProducts , insertProduct , deleteProduct} = require('../controllers/products');   //import
 
 router.get('/',getProducts);
 router.post('/',insertProduct);
 router.delete('/:id',deleteProduct);
 
 module.exports = router ;