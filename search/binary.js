const { createRandomArray }= require("../helper")
let data = createRandomArray({sort:true})
const search=data[parseInt(Math.random()*10)]
function binarySearch(data,search) {
  let index=-1
  let previousMid=-1
  let [first , last] =[ 0,data.length-1]

  for (variable of data) {
    // NOTE:  search value is there in data or not
    if(search < data[first] || search > data[last] ){
      break
    }

    let mid = parseInt((first + last) / 2)
    // NOTE:  previousMid and mid matches then break the loop
    if(previousMid===mid){
      break
    }

    if(data[mid]===search){
      index = mid
      break
    }

    if(data[mid] > search){
      last = mid - 1
    }
    else {
      first = mid + 1
    }
    previousMid = mid
  }
  return index

}

const index = binarySearch(data,search)

console.log("\n\n=======");
console.log("INPUT : ",data);
console.log("SEARCH : ",search);
console.log("SEARCH INDEX : ",index);

console.log("STATUS : ",(data[index]===search || !data.includes(search))?"PASS":"FAIL")
console.log("The time complexity of above algorithm is O(log n). (base 2)");
console.log("=======\n\n");
