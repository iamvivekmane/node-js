const fs = require('fs')

// // err will print if any error occurs otherwise the data will print
// // It returns the callback function which will run when the data is available 
// fs.readFile('this.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// console.log('executing');



// // It returns the stream of the file and it intentionally blocks the executing thread unlike readFile
// const a = fs.readFileSync('this.txt')
// // We need to convert the stream into the string to get the actual content
// console.log(a.toString());
// console.log('executing');



// Works in a similiar way of readFile
// fs.writeFile('file.txt', 'The content', () => {
//     console.log('Finished writing to the file')
// })
// console.log('Writing to the file');


// Works in a similiar way of readFileSync
const b = fs.writeFileSync('file2.txt', 'The content of the second file')
console.log('Writing to the file');