// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 제한사항 : s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  var array = s.split("");

  if (s.length % 2 === 0) {
    const a = s.length / 2 - 1;
    const b = s.length / 2;
    return array[a] + array[b];
  }

  return array[(s.length - 1) / 2];
}
