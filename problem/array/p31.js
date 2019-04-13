console.log("Check Infinity Array Join is dividiby by 7 or not");

// NOTE: WIP

let reminder = 0
let data=[]
let outdata=[]
let testdata=[]

setInterval(()=>{
  let val = parseInt(Math.random() * 10)
  reminder = (( reminder * 10 )+ val) % 7
  data.push(val)
  outdata.push((reminder===0).toString()[0])
},50)

setTimeout(function () {

  for (var i = 0; i < outdata.length; i++) {
    if(outdata[i]==='f'){
      testdata.push("-")
      continue
    }
    const subArray=data.slice(0,i+1)
    const sumOfArray= parseInt(subArray.toString().replace(/,/g,''))
    testdata.push((sumOfArray%7===0)? 'P' : 'F')
  }
  console.log('\n\n=======')
  console.log(data.toString());
  console.log(outdata.toString());
  console.log(testdata.toString());
  console.log('FINAL STATUS : ', testdata.includes("F")? 'FAIL' : 'PASS')


  // NOTE: For Test case
  // parseInt([7,6,5,5,4,5,1,2,3,5,1,9,2,2,2,4,8].toString().replace(/,/g,''))%7
  process.exit(1)
}, 1000);
