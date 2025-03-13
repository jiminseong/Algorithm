const { copyFileSync } = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [SWITCH_COUNT, LAMPS_COUNT] = input[0].split(" ").map(Number);
  let switches = [];

  for (let i = 1; i <= SWITCH_COUNT; i++) {
    switches.push(new Set(input[i].split(" ").slice(1).map(Number)));
  }

  // 모든 램프가 켜지는 상태를 기준으로 비교
  for (let i = 0; i < SWITCH_COUNT; i++) {
    let activeLamp = new Set();

    // 제외할 스위치를 제외한 나머지 스위치로 켜지는 램프를 저장
    for (let j = 0; j < SWITCH_COUNT; j++) {
      if (i === j) continue;
      switches[j].forEach((lamp) => activeLamp.add(lamp));
    }
    if (activeLamp.size === LAMPS_COUNT) {
      console.log(1);
      process.exit();
    }
  }

  console.log(0);
  process.exit();
});
