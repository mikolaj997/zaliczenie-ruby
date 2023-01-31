const mongoose = require('mongoose')
module.exports = mongoose.model('Tenis', 
{
    
    Name: {type: String},
    country: {type: String},
    age: {type: Number},
    rank: {type: Number}, 
})