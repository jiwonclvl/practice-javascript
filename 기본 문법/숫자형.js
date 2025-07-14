/**
 * 숫자가 클 경우
 */
{
    const num1 = 50000
    const num2 = 5e4 //0이 4개 있다는 의미

    const num3 = 0.0005
    const num4 = 5e-4 //소수점 아래로 4자리

    //이외의 10진법, 16진법도 표현가능하다.
    const binary = 1111 //이진법 15

    //NaN은 Not a Number이지만 숫자형이다.
    typeof NaN //number로 나온다.

}

/**
 * 문자열로 입력된 숫자를 숫자형으로 바꾸는 방법
 *
 * parseInt(): 문자가 같이 있다면 숫자만 빼서 출력한다.
 * Number(): 숫자가 아닌 값이 포함되면 NaN을 반환한다.
 */
{
    const string = "1234" //문자형
    const int1 = parseInt(string) //숫자형
    const int2 = Number(string) //숫자형
}

/**
 * 문자열로 입력된 소수를 소수로 바꾸는 방법
 *
 * parseFloat()
 * Number()
 */

{
    const string = "3.14"
    const float1 = parseFloat(string)
    const float2 = Number(string)
}

/**
 * 값 입력하기
 *
 * prompt(): console에 입력하면 입력 창이 띄워진다.
 */
{
    prompt() //입력한 값이 문자로 출력됨
    parseInt(prompt()) //입력한 값이 숫자로 출력됨

}

/**
 * 연산하기
 *
 * +, -, *, /, %, **
 */
{
    const plus = 1 + 1 //결과: 2
    const minus = 2 - 1 //결과: 1
    const multi = 2 * 2//결과: 4
    const divide = 2 / 2 //결과: 1
    const remainder = 6 % 4 //결과: 2
    const square = 2 ** 3 //결과: 8
}

/**
 * 무한대 (infinity)
 */
{
    const infinity1 = 2 / 0 //양의 무한대 infinity
    const infinity2 = - 2 / 0 //음의 무한대 - infinity
}

