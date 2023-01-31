const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://student:student@cluster0.f5snuwo.mongodb.net/tenis_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
    }