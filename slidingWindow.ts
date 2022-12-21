const arr:number[]=[1,2,5,2,8,8,9];
const win:number=5;

type slidingwind=(arr:number[],win:number)=>number|null

const slidingwind:slidingwind=(arr,win)=>{
    if(arr.length===0)return null;
    let min= -Infinity;
    for(let i=0;i<arr.length-win+1;i++){
        let sum=0;
        for(let k=0;k<win;k++){
          sum+=arr[i+k]
        }
        console.log("sum",sum,"min",min);
        
        min=Math.max(min,sum)
    }
return min
}
let ans=slidingwind(arr,win)
console.log(ans);
