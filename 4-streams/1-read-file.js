const {createReadStream, writeFileSync} = require('fs')


// for (let i = 1000; i < 10000; i++)
// {
//     writeFileSync('../content/big.txt', `Hello World ${i}\n`, {flag: 'a'})
// }

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8'
})
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})
