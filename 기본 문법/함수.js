/**
 * 함수
 * 
 * 방법1
 * function() {}
 *
 * 방법2
 * () => {}
 * 
 * 위의 2방법 모두 이름을 붙이지 않은 익명함수라고 한다. 
 * -> 익명함수는 딱 한번 활용하는 경우에 사용한다. 
 */

function a() {};
const b = function (){};
const c = () => {};

/**
 * return 
 * 
 * 함수의 종료를 의미하기도 한다. 
 */
function example() {
    return "반환";
}

/**
 * 매개변수(parameter)와 인수(argument) 
 */

function ex(x, y) {
    let parameter1 = x;
    let parameter2 = y;

    console.log("매개변수1:" + parameter1);
    console.log("매개변수2:" + parameter2);

    //arguments: 함수 호출 시 사용된 인수를 배열 형식으로 출력시킨다. 
    console.log(arguments)
}

ex(5, 7);

//문제 매개변수 x, y, z를 받아 곱한 값을 반환하는 multiply함수를 만들어 보세요. 단 화살표 함수로 만드세요.
const multiply = (x, y, z) => {
    return x * y * z;
}

multiply(2,3,4);

/**
 * 메서드란 객체의 속성 값으로 함수를 넣은 것을 말한다. 
 * 
 * 즉 객체 안에 들어 있는 함수를 메서드라고 한다. 
 */

const example = {
    method : () => {
        console.log("메서드");
    }
}

example.method();