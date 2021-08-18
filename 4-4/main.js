const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 let numbers = NUMBERS.slice();
 let changedNumbers = [];
 for (let i = 0; i < NUMBERS.length; i++) {
   const r = Math.floor(Math.random() * numbers.length); 
   changedNumbers.push(numbers[r]);
   numbers.splice(r, 1);
 }

 console.log(changedNumbers);

const num = 10;
var array = [];