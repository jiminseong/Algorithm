{
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  readline
    .on("line", function (line) {
      input.push(line);
    })
    .on("close", function () {
      const workTable = [];
      const N = parseInt(input[0]);

      for (let i = 1; i <= N; i++) {
        workTable.push(input[i].split(" ").map(Number));
      }

      let dp = new Array(N + 1).fill(0);

      for (let i = 0; i < N; i++) {
        //i : 현재 상담을 시작하는 날짜
        //time : 해당 상담을 완료하는 데 필요한 기간
        //profit : 해당 상담을 완료하면 얻는 이익
        let [time, profit] = workTable[i];
        let nextDay = i + time;

        //현재까지 최대 수익을 다음날로 전달
        if (i + 1 <= N) {
          dp[i + 1] = Math.max(dp[i + 1], dp[i]);
        }

        //상담 가능 경우
        if (nextDay <= N) {
          dp[nextDay] = Math.max(dp[nextDay], dp[i] + profit);
        }
      }

      console.log(dp[N]);
      process.exit();
    });
}
