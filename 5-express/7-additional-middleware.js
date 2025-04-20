const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

// app.use([authorize, logger])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    // console.log(req.user)
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})