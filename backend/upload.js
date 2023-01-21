const products= require('./data/products')
const  Product = require("./model/News");
const importData = async () => {
//----------------------------------------
await Product.insertMany(products)

console.log('Data Imported!')
process.exit()

}
importData().then(() => {
    console.log('2');
 });
//-------------------------------------
