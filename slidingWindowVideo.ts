const ar:number[]=[1,2];
const wi:number=2;

type slidingwind1=(arr:number[],win:number)=>number|null

const slidingwind1:slidingwind1=(arr,win)=>{
    if(arr.length<win)return null

    let sum:number=0;
    let max:number= -Infinity;
    for(let i=0;i<win;i++){
        sum+=arr[i]
    }
    max=sum
    for(let i=win;i<arr.length;i++){
        sum = sum-arr[i-win]+arr[i]
        if(max<sum){
            max=sum
        }
    }

   return max
}
let ans2=slidingwind1(ar,wi)
console.log(ans2);