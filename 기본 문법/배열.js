/**
 * 객체 중 하나로 다양한 값을 한번에 담을 수 있다.
 *
 * - 배열의 시작은 0부터 시작하며 각 자리를 인덱스(index)라고 부른다.
 * - 배열 내부의 값은 요소(element)라고 한다.
 */
const team= ['T1', '한화', 'KT', '젠지'];
let length = team.length;

/**
 * 값 추가, 수정, 삭제
 */
//값 추가하기
team.push('DRX')
team[length] = 'DRX'

//배열 맨 앞에 값 추가하기
team.unshift('농심')

//값 수정하기
team[0] = 'T1'

//배열의 마지막 요소 제거하기
team.pop()

//배열의 첫번째 요소 제거하기
team.shift()

//중간 요소 제거하기
team.splice(1) //한개 삭제 splice(삭제할 index)

team.splice(1, 2) //시작 ~ 끝 삭제 splice(시작 index, 끝 index)

team.splice(1, 2, "OK 브리온") //시작 ~ 끝 삭제 후 값 추가 splice(시작 index, 끝 index, 추가할 값)

team.splice(3, 0, "피어엑스") //시작 index에  값 추가  splice(시작 index, 0, 추가할 값)

/**
 * 배열 내 요소 존재 여부 확인
 *
 * 배열.includes(요소);
 */

let value = team.includes('T1');

/**
 * 배열 내 요소의 인덱스 찾기
 *
 * 배열.indexOf(요소); 시작 부터 찾음
 * 배열.lastIndexOf(요소); 마지막 부터 찾음
 */

let index1 = team.indexOf('T1'); //0
let index2 = team.lastIndexOf('젠지'); //3

//⚠️ 요소가 존재하지 않는다면 -1을 응답한다.

//문제: 다음 배열에서 '라'를 모두 제거하세요
const arr = ['가','라','다','라','마','라']

while(true) {
    if (!arr.includes('라')) {
        break;
    }

    let index = arr.indexOf('라');
    arr.splice(index, 1);
}

console.log(arr)

/**
 * 배열의 특정 요소 가져오기
 *
 * arr.at(index)
 */

arr.at(2); // 2번째 index의 요소를 가져온다.
arr.at(-1); // 배열의 끝 index부터 시작하여 요소를 가져온다.
arr.at(-2);