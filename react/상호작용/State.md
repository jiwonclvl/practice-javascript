## State

컴포넌트는 사용자와의 **상호작용에 따라 화면의 내용을 동적으로 변경해야 하는 경우**가 많습니다.

➡️ React는 이러한 변화를 관리하기 위해 컴포넌트 내부에 `상태(State)를 저장`할 수 있도록 합니다.

> 👉🏻 State는 컴포넌트가 **동적으로 변하는 데이터를 관리할 수 있는 방법**이며,
<ins>State가 변경되면 해당 컴포넌트는 자동으로 다시 렌더링되어 화면이 업데이트</ins>됩니다.

<br>

### 값 변경이 감지되지 않는 이유

- 지역 변수는 렌더링 간에 유지되지 않기 때문에 값의 변화가 적용되지 않습니다. 


따라서, 값을 업데이트 시키고 싶은 경우에는 두가지가 필요합니다. 

- 렌더링 사이에 데이터 유지 ➡️ **state 변수 추가**
- 새로운 데이터로 컴포넌트를 렌더링 하도록 유발 ➡️ **state setter 함수 사용**

<br>

### state 변수 추가

**1. 모듈 선언**

`import {useState} from 'react;`

**2. state 변수 및 setter 함수 선언**

`const [index, setIndex] = userState(0)`

`index`는 **state 변수**이고 `setIndex`는 **setter함수**입니다. 

**[예시]**

```js
import { useState } from 'react'

export default function Test() {
    const [index, setIndex] = useState(0); //index를 0으로 초기화 한다는 의미입니다. 
    
    function handleButton() {
        return setIndex(index + 1);
    }
    
    return (
        <>
          <h1>
              {index} 번 버튼을 눌렀습니다.
          </h1>
          <button onClick={handleButton}>
                버튼
          </button>
        </>
    );
}
```

<img width="537" height="132" alt="Image" src="https://github.com/user-attachments/assets/d543cf81-2719-4fc2-a3d0-375e15c5a5d1" />

<br>

## 훅

- useState처럼 **'use'로 시작하는 모든 함수를 훅**이라고 부릅니다. 


- 렌더링 중일 때만 사용할 수 있는 특별한 함수입니다. 


- 컴포넌트의 최상단 or 커스텀 훅에서만 호출 가능합니다. 


- `if문`, `반복문`, `중첩 함수` 내부에서는 **호출할 수 없습니다.** 

<br>

###  React의 훅 관리 방법

아래와 같이 여러개의 state가 선언되어 있는 상황에서 변수명도 없고, 식별자도 없는 useState()가 어떤 값을 가리키는지 어떻게 알 수 있을까요?

```js
const [first, setFirst] = useSate(); 
const [second, setSecond] = useSate();
```

➡️ React는 컴포넌트가 렌더링 될 때 useState()가 몇번째로 호출되었는지 기억합니다. (**호출 순서 기억**)


> 💡 **순서를 기억하기 때문에 조건문이나 for문에 사용시 React가 순서를 헷갈려할 수 있습니다. 따라서 state는 최상단에만 호출해야합니다.** 

<br>

## State 특징 (스냅샷)

버튼을 클릭했을 때 화면에 출력되는 number의 값은 1입니다.

```js
import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1); // number는 아직 0 ➝ setNumber(1) 
                setNumber(number + 1); // number는 아직 0 ➝ setNumber(1)
                setNumber(number + 1); // number는 아직 0 ➝ setNumber(1)
            }}>+3</button>
        </>
    )
}
```

setter의 경우 즉시 실행되지 않고 렌더링 시 바꿀 값으로 예약합니다.

위의 코드에서는 단순히 numner(=0)을 1로 변경하겠다는 예약만 한 상태가 됩니다.

> **🗨️ 그렇다면 렌더링 전 값에 여러 작업을 수행하고 싶을 때는 어떻게 해야할까요?**
> 
> ➡️ 업데이터 함수(updater function)

<br>

## State 특징 (업데이트 큐)

다름 렌더링을 예약하기 전에 값에 대해 여러 작업을 수행하고 싶은 경우에는 `setNumber(n => n + 1)`를 사용합니다.

```js
import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1); // number + 1 작업 큐에 추가 
                setNumber(n => n + 1); // number + 1 작업 큐에 추가 
                setNumber(n => n + 1); // number + 1 작업 큐에 추가 
            }}>+3</button>
        </>
    )
}
```

React는 state 큐에 추가된 작업을 순회하며 작업을 수행하고 최종 결과를 저장해 반환합니다.

>  💡**명명 규칙**
> 
> 업데이터 함수의 인수 이름은 **state변수의 첫글자로 지정**하는 것이 일반적입니다. 

<br>




<br>

## 공식 문서 문제

**[2. state 큐를 직접 구현해 보세요.](https://ko.react.dev/learn/queueing-a-series-of-state-updates)**

```js
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  //큐 순회
  for (let i = 0; i < queue.length; i++) {
    let value = queue[i]; 

    //큐의 요소가 함수인 경우
    if ('function' === typeof value) {
      value(finalState);
    } else {
      finalState = value; 
    }
    
  }

  return finalState;
}
```

