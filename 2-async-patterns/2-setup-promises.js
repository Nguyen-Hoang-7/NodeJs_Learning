const {readFile, writeFile} = require('fs');
// const { reject } = require('lodash');

const getText = (path) =>{
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, result) => {
            if (err)
            {
                // console.log(err);
                reject(err);
                // return;
            }
            else {
                // console.log(result);
                resolve(result);
            }
        })
    })
}

getText('../content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))