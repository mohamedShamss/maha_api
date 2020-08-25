const express =require('express');
const app = express();
// const port = 3000;
var port = process.env.PORT || 8080 ;

const bodyParser =require('body-parser');
app.use([
    bodyParser.urlencoded({extended:true}),
    express.json()
]);
//database
const mongoose =require('mongoose');

mongoose.connect(
    'mongodb+srv://admin:123@cluster0.83qlk.mongodb.net/store?retryWrites=true&w=majority',
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
  ); //connect

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('connected with Database');
})

connection.on('error',()=>{
    console.log('Error  with Database');
})

const productRoute = require('./routes/products');

app.use('/products',productRoute);

app.listen(port,()=>{
    console.log('it is OK');
})

module.exports = app ;