/**
 * boolean
 *
 * true/false(참/거짓)를 나타낸다.
 */

5 > 3 //true

5 < 3 //false

NaN == NaN //false
NaN != NaN //true

/*
*  형변환이 이루어져 true: 1, false:0이 되어 아래 조건이 성립된다.
 */
true > false //true

/**
 * 문자간의 비교도 가능하다. (문자의 크기는 아스키코드 참고)
 *
 * charCodeAt(문자): 문자 크기 확인하는 방법
 */
'a' < 'b' //true

'a'.charCodeAt() //97
'b'.charCodeAt() //98
'&'.charCodeAt() //65286

/**
 * 자동 형변환 예시
 */

//문자열이 숫자로 형변환되어 ture를 출력한다.
'3' < 5

//abc를 숫자형으로 바꾸면 NaN이 나오면서 false를 출력한다.
'abc' < 5

