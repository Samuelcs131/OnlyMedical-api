import fs from 'fs'
const file = require('fs').promises

export default async function convertFiles(diretorio){

let fileDates = await file.readdir(diretorio)
const resultado = []

for(let index = 0; index < fileDates.length; index++){

let [header, ...dataIndice] = fs.readFileSync(diretorio+'/'+fileDates[index]).toString().split(/\r?\n/)
let atribute = header.split(' ').filter( res => res !== '')

let dadosValue = []

for(let valueInd of dataIndice){
    const result = valueInd.split(' ')
    dadosValue.push({[atribute[0]]: result[0], [atribute[1]]: Number(result[1]), [atribute[2]]: Number(result[2])})
}

resultado.push({data: fileDates[index], dados: dadosValue})
}

return resultado
}