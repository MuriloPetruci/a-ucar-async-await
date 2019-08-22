//Async Await é um açucar sintatico em cima da promise, como ele é um açucar sintatico em cima de promises ele retonar uma promise como vemos no codigo abaixo e tambem podemos usar o await em uma promise para que o codigo pareça sincrono fazendo assim com que a manutenção desse codigo fique mais facil porem embaixo dos panos ele ainda é assincrono.
// uma boa forma de gerenciar o assincronismo 

// file system assincrono
const fs = require('fs')

console.log(1)

const readFile = file => new Promise((resolve, reject) => { 
    fs.readFile(file, (err, contents) => {
        if (err) {
          reject(err)
        } else {
            resolve(contents)
        }
    })
})

// async/await -- açucar sintático em cima da promise

const init = async() => {
//usando o await em uma promise para que o codigo pareça sincrono ficando assim mais facil de dar manutenção porem embaixo dos panos ele continua assincrono
  try{
    const contents = await readFile('./in1.txt')
    const contents2 = await readFile('./in2.txt')
    return String(contents) + '\n' + String(contents2)
  }catch(err){
    console.log(err)
  }
}
init()
  .then( contents => console.log(contents))

console.log(2)

console.log(3)