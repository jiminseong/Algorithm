function solution(bridge_length, weight, truck_weights) {
  const bridge = [...Array(bridge_length).fill(0), ...truck_weights];
  let time = 0;
  let weight = 0;

  while (bridge.length >= bridge_length) {
    bridge.shift();

    const sum = bridge.sice(0, bridge_length + 1).reduce((a, b) => a + b, 0);
    if (sum >= weight) {
      bridge.shift();
      bridge.unshift(0);
      time += 2;
    }
  }
}

solution(2, 10, [7, 4, 5, 6]);
