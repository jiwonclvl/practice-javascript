**[App.js]**
```js
function TableOfContents() {
    return ( 
        <article> 
            <h1>컴포넌트에 대해 알아보자.</h1>
            <ol>
                <li>컴포넌트란?</li> 
                <li>컴포넌트의 역할</li>
                <li>컴포넌트 사용방법</li>
            </ol>
        </article>
    );
}

export default function Test() {
    return (
        <section>
            <h1> 컴포넌트 내보내기 테스틑 </h1>
            <TableOfContents/>  
        </section>
    );
}

```
🗨️ **만약 위의 코드에 10개 100개의 컴포넌트가 추가된다면?**

➡️ 컴포넌트를 찾기 어려워지며 파일이 방대해질 수 있습니다.

따라서, 컴포넌트를 별도의 파일로 만들어 **다른 파일에서 해당 파일을 import**할 수 있도록하여 위와 같은 문제를 해결하는 것이 좋습니다.


<br>

### 별도의 파일로 관리하기

- 컴포넌트를 추가할 JS 파일 추가


- 새로 만든 파일에서 컴포넌트 export (default 또는 [named export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export#using_named_exports) 방식)
    

- 컴포넌트를 사용할 파일에 import


**[Test.js]**

<details>
<summary>📘 TableOfContents 컴포넌트 코드 보기</summary>

```js
function TableOfContents() {
    return ( 
        <article> 
            <h1>컴포넌트에 대해 알아보자.</h1>
            <ol>
                <li>컴포넌트란?</li> 
                <li>컴포넌트의 역할</li>
                <li>컴포넌트 사용방법</li>
            </ol>
        </article>
    );
}

export default function Test() {
    return (
        <section>
            <h1>컴포넌트 내보내기 테스트</h1>
            <TableOfContents/>  
        </section>
    );
}
```
</details> 

<br>

**[App.js]**

```js
<!-- React의 경우 파일 확장자 생략이 가능하지만 사용하는 것이 표준에 가까운 방식입니다 -->
import Test from './Test.js';

export default function App() {
    return (
        <Test />
    );
}
```

<br>

### Default와 Named Export

javaScript에서는 2가지 방식으로 export를 할 수 있습니다.

| 방법        | default                             | named                                |
|-----------|-------------------------------------|--------------------------------------|
| 사용        | 파일에 **오직 하나**만 존재 가능                | 파일에 **여러개** 존재 가능                    |
| export 방식 | export default function Button() {} | export function Button(){}           |
| import 방식 | import Button from `./button.js`;   | import { Button } from `./button.js` |
