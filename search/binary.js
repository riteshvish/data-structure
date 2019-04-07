const { createRandomArray }= require("../helper")
let data = createRandomArray({sort:true})
const search=data[parseInt(Math.random()*10)]
let index=-1
let [first , last] =[ 0,data.length-1]
console.log(first , last ,search);
let i = 0
while (i < data.length) {
  let mid = parseInt((first + last) / 2)
  console.log(mid);
  if(data[mid]===search){
    index = i
  }else if(data[mid] > search){
    last = mid
  }
  else if(data[mid] < search){
    first = mid
  }
  i++
}


console.log("\n\n=======");
console.log("INPUT : ",data);
console.log("SEARCH : ",search);
console.log("SEARCH INDEX : ",index);
console.log("STATUS : ",data[index]===search?"PASS":"FAIL")
console.log("The time complexity of above algorithm is O(n).");
console.log("=======\n\n");
