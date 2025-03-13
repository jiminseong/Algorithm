function solution(bridge_length, weight, truck_weights) {
  // 1. bridge 배열을 정의, 시간을 0으로 정의
  const bridge = [];
  let time = 1;

  // 2. truck_weights를 순회하면서 진행
  while (truck_weights.length > 0) {
    // 	3-1. push할때에, 만약 brdige.length === bridge_length 이면 못넣음
    // 	3-3. 못넣을때는 공통적으로 brdige에서 shift(), 진행 시간 += 1;
    if (bridge.length === 0) {
      let truck = truck_weights.shift();
      bridge.push(truck);
      time += 1;
    }

    if (bridge.length === 1 && weight - bridge[0] < truck_weights[1]) {
      bridge.shift();
      bridge.push(0);
      time += 1;
    }

    if (bridge.length === bridge_length) {
      bridge.shift();
      bridge.push(0);
      time += 1;
    }

    if (bridge.length >= 1) {
      let sum = bridge.reduce((a, b) => {
        return a + b;
      }, 0);

      // 	3-2. push할때에, brdige안의 마지막 요소를 제외의 현재 요소의 합 + push할값 >= weight 이라면
      // 	3-3. 못넣을때는 공통적으로 brdige에서 shift(), 진행 시간 += 1;
      let truck = truck_weights.shift();
      if (sum + truck >= weight) {
        bridge.shift();
        bridge.push(0);
        time += 1;
      }

      if (sum === 0) {
        bridge.push(truck);
        time += 1;
      }
    }
    // 3. truck을 shift해서 bridge 배열에 push
    // 	3-4. 넣을때에는 truck_weights에, shft(),brdige에  push() 진행, 진행 시간 += 1;
    let truck = truck_weights.shift();
    bridge.push(truck);
    bridge.shift();
    time += 1;
  }
  return time;
}

solution(100, 100, [10]);
