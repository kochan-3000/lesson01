let array=[process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6]]
const found = array.find(element => element > 10);

console.log(found);