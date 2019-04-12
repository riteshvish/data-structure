const { createRandomArray } = require('../helper')
let n = 50

let data = createRandomArray({ sort: true, n })
const search = data[parseInt(Math.random() * n)]

function exponentialSearch (data, search) {
  let [first, last] = [0, data.length - 1]
  if (data[first] === search) {
    return first
  }

  let i = 1

  while (i < last && data[i] <= search) {
    i = i * 2
  }

  if (data[i / 2] === search) {
    return i
  }
  // with had multiplied by 2 so search element is between
  const subArray = data.slice(i / 2, Math.min(i, last))
  let [subsetFirst, subsetLast] = [0, subArray.length - 1]
  let previousMid = -1

  // NOTE: Performing Binary Search
  while (true) {
    let mid = parseInt((subsetFirst + subsetLast) / 2)
    // NOTE:  previousMid and mid matches then break the loop
    if (previousMid === mid) {
      break
    }
    if (subArray[mid] === search) {
      return (i / 2) + mid
    }
    if (subArray[mid] > search) {
      subsetLast = mid - 1
    } else {
      subsetFirst = mid + 1
    }
    previousMid = mid
  }

  return -1
}

const index = exponentialSearch(data, search)

console.log('\n\n=======')
// console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)
console.log('STATUS : ', (data[index] === search || !data.includes(search)) ? 'PASS' : 'FAIL')
console.log(`The time complexity of above algorithm is  O(Log n)
AUXILIARY SPACE: O(1)
`)
console.log('=======\n\n')
