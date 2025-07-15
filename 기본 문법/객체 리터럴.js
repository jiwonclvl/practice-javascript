/**
 * 배열이나 함수가 아닌데 특정 모습을 나타내는 것들을 객체 리터럴이라고 부른다. 
 */
const person = {
    name: '이름',
    age: 24,
    birthDay: "2002.10.22",
    gender: "Female", //,를 추가해도 오류가 나지 않기 때문에 나중에 값이 추가되는 것을 고려해서 ,를 입력시켜주는 것이 좋다.  
}

//값에 접근하기
//방법1
person.age

//방법2 (리터럴 내 특수 문자로 이루어진 요소가 있을 경우 사용한다.)
person['age'] //대괄호를 쓸 때에는 반드시 ''를 붙여주어야 한다. 

//⚠️ 아래와 같이 ''를 붙이지 않으면 우리가 원하는 것은 name 필드임에도 age필드에 접근된다.  
let name = 'age';
person[name];

//객체 수정
person.name = '서지원';

//객체 삭제
delete person.birthDay