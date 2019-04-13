console.log("How to find duplicate number on Integer array?");
let n=100
const duplicate = parseInt(Math.random() * n)
let data = []
for (let i = 1; i <= n; i++) {
  if(duplicate===i){
    data.push(i)
  }
  data.push(i)
}

function sumOfNumber(params={}) {
  const { n = 10 } = params
  return n*(n+1)/2
}

const sumOfArray= data.reduce((acc,cur)=> acc+cur , 0)
const duplicateNumber = sumOfArray - sumOfNumber({ n })

console.log('\n\n=======')
console.log('INPUT : ', data)
console.log("System Duplicate Number : ",duplicate);
console.log("Fined Duplicate Number : ",duplicateNumber);
console.log('STATUS : ', duplicateNumber===duplicate? 'PASS' : 'FAIL')
console.log('=======\n\n')
