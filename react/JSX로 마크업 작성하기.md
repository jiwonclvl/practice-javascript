## 마크업이란?

`<h1>`, `<li>`와 같은 **태그로 이루어져 있는** 문서나 UI 구조를 나타내는 방식으로 대표적으로는 <ins>HTML</ins>과 <ins>XML</ins> 등이 있습니다. 

<br>

## JSX

JavaScript의 **확장 문법**으로 JavaScript 파일을 <ins>HTML 파일과 비슷하게 마크업을 작성</ins>할 수 있도록 해줍니다. (HTML보다 엄격)

> 💡 **JSX와 React는 서로 다른 별개의 개념입니다.**
> 
> JSX: JavaScript의 확장된 문법
> 
> React: JavaScript의 라이브러리

JSX를 사용할 때에는 몇가지의 규칙을 반드시 지켜주어야 합니다. 

### 규칙

#### 1. 하나의 root 요소로 반환하기

한 컴포넌트에서 **여러 개의 요소를 반환**하려면, 하나의 <ins>부모 태그로 감싸 주어야 합니다. 

➡️ `<div>` 혹은 `<> (Fragment)`

> 💡 Fragment (빈 태그)
> 
> HTML 트리 구조에 흔적을 남기지 않고 그룹화 해줍니다. 


<br>

🗨️ **감싸야 하는 이유**

JSX 태그 하나는 React 내부에서 JavaScript 객체 하나로 변환됩니다. 

```js
<h1>Hello</h1> -> React.createElement('h1', null, 'Hello')로 변환됩니다.
```

컴포넌트(함수)는 하나의 값만 return 하기 때문에 아래와 같이 2개를 return하면 문제가 발생합니다.

```js
function Method() {
    return (
        <h1>Hello</h1> //객체 1
        <p>World</p>  //객체2
    );
}
```

따라서 `<div>`나 `<>` 등의 태그로 감싸서 반환해야 오류가 나지 않습니다. 

```js
function Method() {
    return (
        <>
            <h1>Hello</h1> //객체 1
            <p>World</p>  //객체2
        </>
    );
}
```


<br>

#### 2. 모든 태그는 닫아주기

닫아주는 태그를 반드시 사용해야합니다. 


<br>

#### 3. 대부분 캐멀케이스 사용하기

예시: helloWorld, className

> 💡 역사적 이유로  `aria-*`와 `data-*`는 HTML에서와 동일하게 대시를 사용합니다. 


<br>

### JSX 변환기 

[변환기](https://transform.tools/html-to-jsx) 

변환기를 사용하여 HTML과 SVG를 JSX로 편안하게 변환할 수 있습니다. 