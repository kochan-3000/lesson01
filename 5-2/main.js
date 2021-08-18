const JSON = require("./users.json");
console.log(JSON);

let aUsersNameAndIncome = [];
//JSONのデータを元に収入計算sてaUsersNameAndIncomeにArray内にオブジェクト型で記載
JSON.users.forEach((user) => {
  let income = 0;
  let userNameAndIncome = {};
  switch (user.rank) {
    case "A":
      if (user.years >= 5) {
        income = 3000 * user.years + 120000;
      } else {
        income = 3000 * user.years + 100000;
      }
      break;
    case "B":
      income = 4000 * user.years + 140000;
      break;
    case "C":
      income = 5000 * user.years + 160000;
      break;
    default:
      console.log("error");
  }
  userNameAndIncome["name"] = user.name;
  userNameAndIncome["income"] = income;
  aUsersNameAndIncome.push(userNameAndIncome);
});