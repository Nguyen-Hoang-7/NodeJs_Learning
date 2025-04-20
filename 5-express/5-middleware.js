const express = require('express')
const app = express()
const Logger = require('./logger')

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing')
    next()
}

app.use('/api', logger)

app.get('/', logger, (req, res) => {
    
    res.status(200).send('Home Page')
})

app.get('/about', Logger, (req, res) => {
    res.status(200).send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})