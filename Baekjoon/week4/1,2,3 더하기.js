{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline
    .on("line", function (line) {
      const input = parseInt(line);

      const result = solution(input);
      console.log(result);

      readline.close();
    })
    .on("close", function () {
      process.exit();
    });

  const solution = (n) => {};
}
