// peach n발쏘고 -> lion n발쏨
// 점수는 const TARGET = [0,1,2,3,4,5,6,7,8,9,10];
// peach : k점 a발, lion : k점 b발
// a >= b -> peach k점
// b > a -> lion k점
// a === b === 0 -> peach, lion 모두 0점
// 최종 점수가 높은 사람이 우승자
// peachTotal >= lionTotal -> peach 우승ㅂ
// peachTotal < lionTotal -> lion 우승

// lion : 가장 큰 점수차이로 peach를 이기기 위해
// n발의 화살을 어떤 과녁 점수에 맞춰야 하는지
// 화살 개수 : n, peach 결과 배열 : info , (참고: info는 어피치가 맞훈 과녁판이라 생각하면됨)
// ex) peach: [2,1,1,1,0,0,0,0,0,0,0] 앞에서 부터 십점

// n발의 화살을 어떤 과녁 점수에 맞혀야 하는지를
// 10점부터 0점까지 순서대로 정수 배열에 담아 return

// 같은 점수라면 더 적은것 맞춘것 기준 -> 중요
