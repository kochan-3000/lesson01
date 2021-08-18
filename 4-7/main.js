 const arg1 = process.argv["2"];
 const arg2 = process.argv["3"];
 const strings = arg1.split(",").map((string) => {
   return string.toLowerCase();
 });
 const searchingWord = arg2;
 console.log(strings);
 const result = strings.map((string) => { if(string.indexOf(searchingWord) != -1){
     return string;
 }else{
     return false;
  }});
 for (let i = 0; i < strings.length; i++) {
   console.log(strings[i].indexOf(searchingWord));
   if (strings[i].indexOf(searchingWord) > -1) {
     result.push(strings[i]);
   }
 }

 const sResult = result.join(" ");

 console.log(sResult);