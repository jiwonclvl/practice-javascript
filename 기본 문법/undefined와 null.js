/**
 * 비어있는 값을 나타내는 방법
 */

//사용자의 요청에 응답 값이 없을 때 undefined을 응답한다.
!!undefined //false

typeof (undefined) //undefined

undefined == null //true

undefined === null //false

/**
 * ⚠️ typeof(null) -> null이 아닌 object 자료형이 응답된다.
 *
 * null과 object를 다른 자료형이지만 언어적 오류로 인해 object로 표현된다.
 *
 * 다만 이는 JavaScript 언어 설계 당시의 오류로 알려져 있으며 이후에도 하위 호환성 문제로 인해 수정되지 않고 있다고 한다.
 */

