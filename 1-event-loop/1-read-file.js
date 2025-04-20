const {readFile, writeFile} = require('fs')
console.log('start the first task')
readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err)
    {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('complete the first task')
})
console.log('start the next task')
console.log('complete the next task')