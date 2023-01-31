const express = require('express')
const bodyParser = require('body-parser')

//imports
const connectDb = require('./db.js')
const tenisRoutes = require('./controllers/tenis.controllers')
const { errorHandler } = require('./middlewares')

const app = express()


app.use(bodyParser.json())
app.use('/api/tenis', tenisRoutes)
app.use(errorHandler)


connectDb()
    .then(()=> {console.log('db connection suceed')
    app.listen(3000, () =>console.log('server started at 3000'))
})
