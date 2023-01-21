const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB = "mongodb://localhost:27017/Rnews";


mongoose.connect(mongoDB)
.then(() => console.log(' réussie !'))
.catch(() => console.log('échouée'))

// Définir un nouveau schéma
const Schema = mongoose.Schema;
const messsageSchema =new Schema(
{
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Message:{type: String, required: true}
}
)
module.exports = mongoose.model("message", messsageSchema);
