// 1. 전체에서 x라는 변수를 관리한다.
// 2. stack을 정의한다.
// 3. s를 배열화 한후에 순회한다.
// 4. 처음에는 가장 마지막 요소 stack에 push 그리고 다음은, stack에서 pop하고 다르면, 4-2 , 올바라 4-1
// 4-1 3번 계속 반복, 마지막 만약 s가 그대로 종료되면 x += 1;
// 4-2 틀린다면, 가장 첫번째 요소를 shift한다 그리고 뒤에 push 한다. 그리고 4번 진행
