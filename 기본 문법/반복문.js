/**
 * while문
 *
 * while(조건식) {
 *     동작문
 * }
 *
 * 조건이 ture인 경우 동작문을 계속 반복한다.
 */

//⚠️ 조건식이 항상 참이기 때문에 무한 실행되는 문제가 발생
while(true) {
    console.log("반목문 무한 실행 중");
}

let num = 1;
while (num <= 100) {
    console.log(num + "번째 실행 중");
    num++;
}

/**
 * for문
 *
 * for (시작; 조건식; 종료식) {
 *     동작문;
 * }
 */

//⚠️ 조건식이 항상 참이기 때문에 무한 실행되는 문제가 발생
for(;;) {
    console.log("무한 반복중");
}

for (i = 1; i <= 100; i++) {
    console.log(i + "번째 반복중");
}