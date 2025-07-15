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

/**
 * break와 continue
 */

//num이 10인 경우 반복문 종료
let num = 1;
while (num <= 100) {

    if (num === 10) {
        break;
    }

    console.log(num + "번째 실행 중");
    num++;
}

//조건에 만족하는 continue 아래의 코드는 건너뛰고 반복문의 첫 로직을 시작하게 된다.
let i = 1;
while (i <= 100) {

    if ((i % 2) === 0) {
        console.log(i + "번째는 짝수 입니다.");
        i++;
        continue;
    }

    console.log(i + "번째는 홀수 입니다.");
    i++;
}

/**
 * 중첩 반복문 (구구단 만들기)
 */

for (let i = 1; i < 10; i++) {
    console.log(i + "단")
    for (let j = 1; j < 10; j++) {
        console.log(i + " * " + j + " = " + i*j);
    }
}

//문제: 구구단을 출력하되 결과에 짝수는 나오지 않도록 하기
for (let i = 1; i < 10; i++) {
    if ((i % 2) === 0) {
        continue;
    }

    console.log(i + "단")
    for (let j = 1; j < 10; j++) {
        if ((i*j % 2) === 0) {
            continue;
        }
        console.log(i + " * " + j + " = " + i*j);
    }
}

/**
 * 문제: 별찍기1
 *
 * *****
 * ****
 * ***
 * **
 * *
 */
for (let i = 5; i > 0; i--) {
    console.log("*".repeat(i));
}

/**
 * 문제: 별찍기2
 *
 * *********
 * *******
 * *****
 * ***
 * *
 */
for (let i = 9; i > 0; i--) {
    if ((i % 2) === 0) {
        continue;
    }
    console.log("*".repeat(i));
}

/**
 * 문제: 별찍기3
 *
 *     *
 *    **
 *   ***
 *  ****
 * *****
 */
let star = "*";
let space = " ";
for (let i = 1; i < 6; i++) {
    console.log(space.repeat(5 - i) + "*".repeat(i));
}