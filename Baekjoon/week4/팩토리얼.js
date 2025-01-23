{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline
    .on("line", function (line) {
      const input = parseInt(line);

      const result = factorial(input);
      console.log(result);

      readline.close();
    })
    .on("close", function () {
      process.exit();
    });

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
