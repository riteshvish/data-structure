const { createRandomArray }= require("../helper")
let data = createRandomArray({sort:true})
const search=data[parseInt(Math.random()*10)]


function jumpSearch(data,search) {
  let index=-1
  // NOTE: Wip
  return index

}

const index=jumpSearch(data,search)

console.log("\n\n=======");
console.log("INPUT : ",data);
console.log("SEARCH : ",search);
console.log("SEARCH INDEX : ",index);

console.log("STATUS : ",(data[index]===search || !data.includes(search))?"PASS":"FAIL")
console.log("The time complexity of above algorithm is O(√n).)");
console.log("=======\n\n");
