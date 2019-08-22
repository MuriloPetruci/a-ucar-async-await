// Resumo de Callback > promise > async/await açúcar sintático
//callback caracteristica do javascript de colocar funçõesque demora mu

// file system assincrono
const fs = require('fs')

console.log(1)

const readFile = file => new promise ((resolve, reject) => { 
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        }   else {
            resolve(contents)
        }
    })
})

// async/await -- açucar sintático em cima da promise

const init = async() => {
    const contents = await readFile('./in1.txt')
    const contents2 = await readFile('./in2.txt')
}
console.log('init', init())

console.log(2)

console.log(3)