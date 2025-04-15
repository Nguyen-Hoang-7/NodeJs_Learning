const path = require('path')

console.log(path.sep)

// In tên đường dẫn từ file hiện tại tới file test.txt
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// In tên file test.txt
const base = path.basename(filePath)
console.log(base)

// In tên đường dẫn đầy đủ tới file test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)