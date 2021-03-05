let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    title: String,
    author: String,
    year: String,
    description: String,
    price: String
},
{
  collection: "books"  
});

module.exports = mongoose.model('Book', bookModel);