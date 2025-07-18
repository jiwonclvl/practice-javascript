## 객체 State

State는 숫자형, boolean 값뿐만 아니라 객체도 사용가능합니다.

> 💡 **원시값은 불변성을 가집니다.**
>
> `숫자형`, `boolean형` 등의 자료형은 값 자체 수정이 불가능하고 값을 바꾸려면 **새 값을 생성해서 교체하는 방식**입니다.

➡️ 객체의 경우 참조 값이기 때문에 내부 요소는 변경이 가능합니다.

### ⚠️ <ins>React는 state를 불변한 것처럼 다뤄야 바뀐 것을 감지</ins>할 수 있습니다.

```js
const [position, setPosition] = useState({ x: 0, y: 0 });

position.x = 5; //인식 못함
```

| 타입  | 예시                     | React에서 사용 시                     |
| --- | ---------------------- |  -------------------------------- |
| 원시값 | `1`, `'hello'`, `true` | `setState(새값)`으로 교체              |
| 참조값 | `{x: 0}`, `[1, 2, 3]`  | ❌ 직접 변경 X, 새로 만들어 교체해야 React가 인식 |

> 💡 **지역 변경(local mutation)**
>
> 지역 변경이란 방금 만든 객체를 바로 수정하는 것을 의미합니다.
>
> ```js
> const nextPosition = {};          // 새로 만든 객체
> nextPosition.x = e.clientX;       // 지역적으로 수정 (local mutation)
> nextPosition.y = e.clientY;
>
> setPosition(nextPosition);        // React는 새 객체를 받음
> ```
>
> 지역 변경으로 수정은 가능합니다.

<br>



## 스프레드 문법

종종 **한 필드만 수정하고 나머지 필드는 유지시키고 싶은 경우**가 있습니다.

다만, `state`는 객체도 새로 생성해야 하기 때문에 해당 예시의 경우 <ins>이전 값들을 복사해야 합니다.

```js
setPerson({
  ...person, // 이전 필드를 복사
  firstName: e.target.value // 새로운 부분은 덮어쓰기
});
```


> ⚠️ **스프레드 문법은 얕은 복사가 진행됩니다.**

<br>


### 이벤트 핸들러에 특정 프로퍼티 명시(e.target.필드)

```js
function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
```

- `e.target`은 **이벤트가 발생한 HTML요소**를 가르킵니다


- inpuet 태그에서 이벤트가 발생하면 ➡️ 이벤트 대상은 input 태그


- `e.target.name`을하면 input에 설정된 name 속성 값을 가져옵니다.


<br>



## Immer

Immer는 JavaScript에서 불변성(immutability) 을 더 쉽게 다룰 수 있도록 도와주는 라이브러리입니다. 

**[사용법]**

- package.json에 dependencies로 use-immer를 추가


- npm install을 실행


- `import { useState } from 'react'`를 `import { useImmer } from 'use-immer'`로 교체

```js
const [person, updatePerson] = userImmer({
    address: "주소",
    profile: {
        name: "seojiwon"
    }})

updatePerson(draft => {
  draft.profile.name = 'jiwon';
});
```

> 💡 **draft는 Proxy 타입**


<br>

## React에서 state 변경이 권장되지 않는 이유

### 1. 디버깅이 쉬워진다
불변성을 지키면 이전 값과 변경 후 값을 비교하거나 **로그를 추적하기가 훨씬 쉬워집니다.**

### 2. 성능 최적화가 쉬워진다
React는 `prevState === newState`로 값이 바뀌었는지 빠르게 확인할 수 있습니다. 


### 3. 새로운 기능(예: 스냅샷, 메모리 등)을 쓸 수 있다
React의 `일부 기능`은 **state가 변경되지 않는다는 전제**로 만들어졌습니다.

➡️ 값을 직접 바꾸면 <ins>최신 React 기능을 쓸 수 없게 될 수 있습니다. 

### 4. 되돌리기/취소 기능 만들기 쉬움
이전 state를 메모리에 저장해두고 되돌리기가 가능합니다.


### 5. React의 구현이 단순해진다
state를 감시하거나 프록시로 감싸지 않아도 됩니다. 



