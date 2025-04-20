const express = require('express')
// const path = require('path')
const {products} = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
    console.log(req)
    console.log(req.params)
    const {productId} = req.params
    const singleProduct = products.find((product) => product.id == Number(productId))
    if (!singleProduct)
    {
        return res.status(404).send("Product Not Found")
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(res.params)
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if (search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit)
    {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1)
    {
        res.status(200).send('No product matches your search')
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})