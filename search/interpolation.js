const { createRandomArray } = require('../helper')
let n = 10

let data = createRandomArray({ sort: true, n })
const search = data[parseInt(Math.random() * n)]

function interpolationSearch (data, search) {
  let [ first, last] = [ 0, data.length - 1]
  while (first <= last && search >= data[first] && search <= data[last]) {
    let pos = parseInt(first + [ (search - data[first]) * (last - first) / (data[last] - data[first]) ])

    if (data[ pos ] === search) {
      return pos
    }

    if (data[pos] < search) {
      first = pos + 1
    } else {
      last = pos - 1
    }
  }
  return -1
}

const index = interpolationSearch(data, search)

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)
console.log('STATUS : ', (data[index] === search || !data.includes(search)) ? 'PASS' : 'FAIL')
console.log(`TIME COMPLEXITY: If elements are uniformly distributed, then O (log log n)). In worst case it can take upto O(n).
AUXILIARY SPACE: O(1)
`)
console.log('=======\n\n')
