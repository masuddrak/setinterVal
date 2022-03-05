console.log('frist')
// setInterval(()=>{
//     console.log('third')
// },1000)
let second=0
const timeID=setInterval(()=>{
    second++
    console.log(second)
    if(second>10){
        clearInterval(timeID)
    }
},1000)
console.log('seecond')