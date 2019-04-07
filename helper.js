module.exports.createRandomArray = function (params={}) {
  let data = []
  const {sort = false,sortType='aesc',n=10}=params
  for (let i = 0; i < n; i++) {
    let value = parseInt(Math.random()*10000)
    if(sort){
      if(sortType==="aesc")
        value = (i===0)?value:(data[i-1] < value ) ? value : (data[i-1] + Math.random()*100)
      if(sortType==="desc")
        value = (i===0)?value:(data[i-1] > value ) ? value : (data[i-1] - Math.random()*100)
    }
    data.push(parseInt(value))
  }
  return data
}
