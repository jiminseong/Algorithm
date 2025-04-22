function solution(number, k) {
  const numberArray = [...number].map((e) => Number(e));
  let count = 0;
  const LENGTH = numberArray.length;
  const SELECTED_NEED = LENGTH - k;
  let answer = [];

  while (count > numberArray.length - k) {
    numberArray.forEach((num, index) => {
      //길이상 선택 가능할 때
      if (SELECTED_NEED < LENGTH - index - 1) {
        answer.push(num);
      }
    });
  }
}

solution("4177252841", 5);
