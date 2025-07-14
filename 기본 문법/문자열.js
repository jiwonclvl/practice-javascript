/**
 * 문자열 (string)
 */
const string1 = '작은 따옴표'
const string2 = "큰 따옴표"
const string3 = `백틱`


//백틱의 경우 줄 바꿈을 할 수 있다.
const string4 = `백틱

                        줄바꿈

                        `

//\n을 사용하여 줄바꿈 할 수 있다.
const string5 = "안녕하세요.\n저는 누구누구입니다."

/**
 * typeof: 타입을 알려준다.
 */

typeof string1 //string형
typeof string2 //string형
typeof "" //string형


/**
 * 문자열 연산하기
 */
const stringOperation = "문자열 1" + "문자열2"