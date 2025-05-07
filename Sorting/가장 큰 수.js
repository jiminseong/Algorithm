// - numbers의 정수 중에서 1 ~ 9 의 범위에서 가장 큰수 순서대로 정렬한다
//     - ex) 10,6,2가 아닌 6,2,10 → 이걸 조합하면 6210
//     - ex) 34, 30, 9, 5, 3이 아닌 9,5,34,3,30, → 이걸 조합하면 9534393
// - 각 수의 첫째 자리수(일의 자리수가 아님)를 비교하자
// - 0은 없는 것 보다 작다?

// - number.sort((a,b) ⇒ { return “여기에 함수를 지정한다”}
// - 저 위치에 b - a(내림 차순이 아닌) ..

function solution(numbers) {
  const bigSort = (a, b) => {
    let aString = String(a) + String(b);
    let bString = String(b) + String(a);

    return Number(aString) > Number(bString) ? -1 : 1;
  };

  const result = numbers.sort(bigSort);

  return result[0] == 0 ? "0" : result.join("");
}

// solution([3, 30, 34, 5, 9]);
// solution([1000, 98, 2, 45, 10]); //98452101000
// solution([979, 97, 978, 81, 818, 817]);
solution([0, 0, 0]);
