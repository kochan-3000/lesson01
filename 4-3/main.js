const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

   const errorMessages = errorLogs.map((log) => {
     return log.slice(log.indexOf(":") + 1, log.indexOf("-") - 1);
   });
  
   console.log(errorMessages);