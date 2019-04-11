
let data = []
for (let i = 0; i < 10; i++) {
  data.push(parseInt(Math.random() * 1000))
}
const search = data[parseInt(Math.random() * 10)]

function functionName (data, search) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === search) {
      return i
    }
  }
  return -1
}

const index = functionName(data, search)

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log('SEARCH : ', search)
console.log('SEARCH INDEX : ', index)
console.log('STATUS : ', data[index] === search ? 'PASS' : 'FAIL')
console.log('The time complexity of above algorithm is O(n).')
console.log('=======\n\n')
