const person = {
    name : {
        first: '서',
        last: '원',
    },
    age: 24 
} 

const firstName = person.name.first; //서
const middleName = person.name.middle //undefined

//const birthDay = person.birthDay.year ->person 객체에 birthDay가 존재하지 않기 때문에 Error발생
//이를 해결하기 위해서 나온 것이 옵셔널 체이닝이다. 

const birthDay = person.birthDay?.year; //객체에 사용 (메서드에도 사용가능)

//배열의 경우에는 ?.을 붙여서 사용할 수 있다.
const arr = person.array?.[0] 
