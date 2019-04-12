const { createRandomArray } = require('../helper')
let n = 50

let data = createRandomArray({ sort: true, n })
const search = data[parseInt(Math.random() * n)]

function fibonacciSearch (data, search) {
  // NOTE: Wip
  return -1
}

const index = fibonacciSearch(data, search)

console.log('\n\n=======')
// console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)
console.log('STATUS : ', (data[index] === search || !data.includes(search)) ? 'PASS' : 'FAIL')

console.log('=======\n\n')
