function numb(busStops: [number, number][]): number {
    // Your Code
    let ans:number=0;
  
     for(let i=0;i<busStops.length-1;i++){
       let temp:number=0
       if(i===0){
         temp= busStops[i][0]-busStops[i][1]
         console.log("temp",temp);
         
       }
      ans=(temp+busStops[i+1][0])-busStops[i+1][1]
      console.log(temp+busStops[i+1][0],busStops[i+1][1],"ans",ans,);
      
     }
    return ans
  }
  let anss= numb([[10,0],[3,5],[5,8]])
  console.log(anss);
  