const { createRandomArray } = require('../helper')
let data = createRandomArray({ sort: true })
const search = data[parseInt(Math.random() * 10)]
function jumpSearch (data, search) {
  let index = -1
  let n = data.length
  let first = 0
  const STEP = parseInt(Math.sqrt(n))
  let step = STEP
  // NOTE: Check search is in range or not
  if (search < data[first] || search > data[n - 1]) {
    return index
  }

  while (search > data[step]) {
    first = step
    step += STEP
  }

  // linear search
  for (let i = first; i < step; i++) {
    if (data[i] === search) {
      index = i
      break
    }
  }

  return index
}

const index = jumpSearch(data, search)

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)

console.log('STATUS : ', (data[index] === search || !data.includes(search)) ? 'PASS' : 'FAIL')
console.log('The time complexity of above algorithm is O(√n).)')
console.log('=======\n\n')
