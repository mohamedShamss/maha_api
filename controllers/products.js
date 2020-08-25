const PRODUCTS = require('../models/products');

module.exports={
    
    getProducts:async(req,res,next)=>{
      const products = await PRODUCTS.find();
             res.json({
                result:products.map(res=>{
                  return{
                    id:res.id,
                    name:res.name,
                    price:res.price,
                    desc:res.desc,
                  }
                })
                 });
         }//getProducts
    ,
    insertProduct: async (req , res)=>{
      const product = await new PRODUCTS({
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
      }).save()
      
      res.json({
        "message" : "Inserted Data",
        id:product.id, name:product.name
      })
    }// insert
    
    ,
    deleteProduct: async (req , res)=>{
      const id = req.params.id;
      const del = await PRODUCTS.findByIdAndRemove(id);
      res.json({
        "delete" : "Deleted Data",
      });
    }// deleteProduct
}//