const {readFileSync, writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// console.log(first)
// console.log(second)

// Tạo file result-sync.txt và viết nội dung trong đó (flag: 'a' - thêm nội dung khác vào trong file đã tạo có nội dung trc đó)
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one')