export const longest = (s1:string, s2:string): string => {
    // your code
    let combine:string = s1+s2
    let ans=new Set(combine)
    return [...ans].sort().join("")
  }

 let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
longest(a, b) 