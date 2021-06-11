let name1= process.argv[2]
let X =Math.floor(name1/100)
let A =Math.floor(name1%100/10)
console.log("100円玉"+X+"枚"+"10円玉"+ A +"枚"+ "1円玉"+ (name1%100)%10+"枚" );