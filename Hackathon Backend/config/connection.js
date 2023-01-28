const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

const connection = () =>{
    mongoose.connect(process.env.mongourl).then(() =>{
        console.log({msg : "Connection Successfully!"});
    }).catch((error) =>{
        console.log({msg : "Connection Failed!", error});
    })
}
module.exports = { connection };