/**
 * 조건문의 기본 형식
 *
 * if (조건식) {
 *    동작문 1
 *    동작문 2
 *    동작문 3
 * }
 *
 */

if (true) {
    console.log("조건문 성립"); //출력됨
}

if (false) {
    console.log("조건문 성립 X"); //출력되지 않음
}

/**
 * if-else
 *
 * if (조건식) {
 *    동작문 1
 * } else {
 *     동작문2
 * }
 *
 */

let condition = 1;

if (condition < 5) {
 console.log("condition 5보다 작은 경우")
} else {
 console.log("condition이 5보다 큰 경우")
}

/**
* 중첩 if문 (최대한 지양하는 것이 좋다.)
*
* if (first) {
*     동작문1
*     .
*     .
*
*     if (seconed) {
*         동작문2
*         .
*         .
*
*     }
* }
*/

//중첩 if문을 통해서 2번의 과정을 거침.
// 아래 코드에서의 문제점은 하나의 if문을 통해 표현가능한 것을 더욱 복잡하게 작성했다는 점
if (condition < 5) {
    if (condition > 3) {
     console.log("5보다 작고 3보다 큰 경우");
    }
}

//수정
if (3 < condition && condition < 5) {
    console.log("5보다 작고 3보다 큰 경우");
}

/**
 * switch문
 *
 * switch(조건식) {
 *    case 비교 조건식:
 *        동작문
 *    default:
 *        동작문
 * }
 *
 * 조건식과 비교 조건식이 같은 경우 동작문을 실행한다.
 */

let fruit = '사과'

//case가 사과인 경우에만 출력이 되어야 하지만 아래와 같이 작성 시 사과 아래의 case문까지 실행된다.
//break를 추가하여 해결 할 수 있다.
switch (fruit) {
    case '배':
        console.log("배 입니다.");
    case '사과':
        console.log("사과 입니다.");
    case '귤':
        console.log("귤 입니다.");
    case '파인애플':
        console.log("파인애플 입니다.");
    default:
        console.log("과일이 아닙니다.");
}

//수정
switch (fruit) {
    case '배':
        console.log("배 입니다.");
        break;
    case '사과':
        console.log("사과 입니다.");
        break;
    case '귤':
        console.log("귤 입니다.");
        break;
    case '파인애플':
        console.log("파인애플 입니다.");
        break;
    default:
        console.log("과일이 아닙니다."); //어떤 조건에도 해당하지 않는 경우 출력된다.
        break;
}

/**
 * 조건부 연산자(삼항 연산자)
 *
 * 조건식 ? 참일 경우의 실행되는 식 : 거짓일 경우 실행되는 식
 */

let value1 = 1 > 0 ? "참" : "거짓"; //value는 참이 된다.

/**
 * 중첩 조건부 연산자
 */

let condition1 = true;
let condition2 = false;

//나중에 여러 중첩 조건문이 추가된다고 한다면 아래의 방법은 많이 헷갈릴 것 같다는 생각이 듬.
//따라서 가능하다면 가독성을 위해 괄호를 사용하거나 들여쓰기를 하는 것이 좋을 것 같다는 생각이 든다.
let value2 = condition1 ? (condition2 ? "조건 1, 2 참" : "조건1 참") :  "조건 1 거짓";

let value3 = condition1
    ? condition2
        ? "condition1,2 참"
        : "condition 1참"
    : "condition1 거짓"

/**
 * 퀴즈
 *
 * let cond = true;
 * let value = '';
 *
 * if(cond) {
 *     value = '참'
 * } else {
 *     value = '거짓'
 * }
 *
 * 위의 코드를 삼항 연산자로 변환하기
 */

let cond = true;
let result = '';

result = cond ? '참' : '거짓';