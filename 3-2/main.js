const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
for (let n = 1; n <= a; n++) {
  let wei = "";
  if (n % 2 == 0) {
    for (let m = 1; m <= b; m++) {
      if (m % 2 == 0) {
        wei += "*";
      } else {
        wei += "-";
      }
    }
  } else {
    for (let m = 1; m <= b; m++) {
      if (m % 2 == 0) {
        wei += "-";
      } else {
        wei += "*";
      }
    }
  }
  console.log(wei);
}
© 2021 GitHub, Inc.
    
    
    