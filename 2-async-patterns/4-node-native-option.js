// const {readFile, writeFile} = require('fs');
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const {readFile, writeFile} = require('fs').promises;

const start = async() => {
    try {
        // const first = await readFilePromise('../content/first.txt', 'utf8')
        // const second = await readFilePromise('../content/second.txt', 'utf8')
        const first = await readFile('../content/first.txt', 'utf8')
        const second = await readFile('../content/second.txt', 'utf8')
        // await writeFilePromise('../content/result-mind-grenade.txt', 
        //     `This is awesome: ${first}, ${second}`
        // )
        await writeFile('../content/result-mind-grenade.txt', 
            `This is awesome: ${first}, ${second}`
        )
        console.log(first)
        console.log(second)
    }
    catch (error) {
        console.log(error)
    }
}

start()