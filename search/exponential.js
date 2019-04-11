const { createRandomArray } = require('../helper')
let n = 10

let data = createRandomArray({ sort: true, n })
const search = data[parseInt(Math.random() * n)]

function exponentialSearch (data, search) {
  let [ first, last] = [ 0, data.length - 1]
  // NOTE: WIP
  return -1
}

const index = exponentialSearch(data, search)

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)
console.log('STATUS : ', (data[index] === search || !data.includes(search)) ? 'PASS' : 'FAIL')
console.log(`TIME COMPLEXITY: If elements are uniformly distributed, then O (log log n)). In worst case it can take upto O(n).
AUXILIARY SPACE: O(1)
`)
console.log('=======\n\n')
