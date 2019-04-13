console.log("How to find the missing number in integer array of 1 to 100?");
let n=100
const missing = parseInt(Math.random() * n)
let data = []
for (let i = 1; i <= n; i++) {
  if(missing===i){
    continue
  }
  data.push(i)
}

function sumOfNumber(params={}) {
  const {n = 10} = params
  return n*(n+1)/2
}

const sumOfArray= data.reduce((acc,cur)=> acc+cur , 0)
const missingNumber = sumOfNumber({ n }) - sumOfArray

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log("System Missing Number : ",missing);
console.log("Fined Missing Number : ",missingNumber);
console.log('STATUS : ', missingNumber===missing? 'PASS' : 'FAIL')
console.log('=======\n\n')
