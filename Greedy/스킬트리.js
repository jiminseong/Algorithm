// 1. skill을 배열화 array
// 2. let isvalid로 true, false 관리
// 3. 각 skill_tree를 tree로 forEach ,tree의 요소는 s
// 4. 내부 for 문으로 array.indclude(s)을 이용해서 판단
// 5. s !== array.shift();
// 	 'C' === 'C','B','D'
//   'D' !== 'B','D' -> 여기서 'B'  -> 이게 다르면 isValid false;

function solution(skill, skill_trees) {
  let count = 0;

  skill_trees.forEach((tree) => {
    let isValid = true;
    const array = [...skill];

    for (let s of tree) {
      if (array.includes(s)) {
        if (s !== array.shift()) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) count++;
  });

  return count;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
