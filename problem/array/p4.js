console.log("How to find largest and smallest number in unsorted array?");
const { createRandomArray } = require('../../helper')
let data = createRandomArray()
let largest=data[0]
let smallest=data[0]

for (let i = 0; i < data.length; i++) {

  if(smallest > data[i]){
    smallest = data[i]
  }

  if(largest < data[i]){
    largest = data[i]
  }
}


console.log('\n\n=======')
console.log('Input : ', data)
console.log("Smallest Number : ",smallest);
console.log("Largest  Number : ",largest);
console.log('Status : ', (Math.min(...data)===smallest && Math.max(...data)===largest)? 'PASS' : 'FAIL')
console.log('=======\n\n')
