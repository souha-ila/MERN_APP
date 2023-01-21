const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB = "mongodb://127.0.0.1:27017/news";
mongoose.connect(mongoDB)
.then((result) => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée'))
// Définir un nouveau schéma
const Schema = mongoose.Schema;
const newsSchema =new Schema(
{
  title: {type: String, required: true},
  summarized: {type: String, required: true},
  Detail:{type: String, required: true},
  dateofnews:{type: String, required: true},
  category:{type: String, required: true},
  website:{type: String},
img: {type: String, required: true},
}
)
const Product= new mongoose.model("news", newsSchema)
module.exports =Product