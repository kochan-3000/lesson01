let Z=process.argv[2]
let A =Math.floor(Z/10000)
let B =Math.floor(Z/1000)%10
let C =Math.floor(Z/100)%10
let D =Math.floor(Z/10)%10
let E = Z%10
let z=process.argv[3]
let a =Math.floor(z/10000)
let b =Math.floor(z/1000)%10
let c =Math.floor(z/100)%10
let d =Math.floor(z/10)%10
let e = z%10
console.log(10000*E+1000*D+100*C+10*B+A+10000*e+1000*d+100*c+10*b+a)
//5桁以下の計算の際に０を末尾に足して5桁にそろえてください