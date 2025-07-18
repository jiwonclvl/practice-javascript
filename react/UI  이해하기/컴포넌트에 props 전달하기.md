
## 컴포넌트에 props 전달

- React 컴포넌트는 props(property)를 통해 서로 통신을 합니다. 


> 💡 **props란?**
> 
> `상위 컴포넌트`가 하위 컴포넌트에 **값을 전달할 때 사용**하는 속성 (객체, 배열, 함수를 포함한 모든 값)
> 
> ⚠️ 상위 컴포넌트는 수정 가능하지만 **자식 컴포넌트는 읽기만 가능**한 단방향 데이터 흐름을 갖습니다.

<br>

### 전달 방법
**[전달 하지 않은 경우]**

```js
function Avatar() {
  return (
    <h1> Introduce </h1>
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

```

<br>

**[전달]**

```js
function Person({person, size}) {
    //내부에서 person 정보 사용 가능 
}


export default function Profile() {
  return (
    <Person 
        person={{name: "jiwon", age: 24}}
        size= {100}
    />
  );
}
```

> **⚠️ props 선언 시 `({ })` 형태를 사용해야 합니다.**  
> 
> `function Person({person, size})` 방식을 구조 분해 할당이라고 부릅니다. 

> 💡 `function Person(props)`로 받아와 props.name으로 접근해도 되지만 잘 사용하지 않고 보통 구조 분해 할당을 사용합니다. 

<br>

### prop 기본값 설정하기 

부모 컴포넌트에서 값을 지정해 주지 않아도 기본 값을 주길 원한다면 변수 바로 뒤에 `=`을 통해 설정해 줄 수 있습니다. 

```js
function Person({person, size = 100}) {
    //내부에서 person 정보 사용 가능 
}


export default function Profile() {
  return (
    <Person 
        person={{name: "jiwon", age: 24}}
    />
  );
}
```

> **💡 null 또는 0으로 전달될 경우 기본값은 사용되지 않습니다.** 


<br>

### 동일한 prop 반복적으로 전달 (spread)

spread 문법은 제한적으로 사용해야합니다. 

```js
function Person(props) {
    //내부에서 person 정보 사용 가능 
}

const me = {name: "jiwon", age: 24}

export default function Profile() {
  return (
    <Person {...me}/>
  );
}
```

<br>

### 중첩 컴포넌트에 prop 전달

```js
<Card>
    <Person /> //card 컴포넌트 내에 person 컴포넌트 사용
</Card>
```

컴포넌트가 중첩되는 경우에는 부모 컴포넌트가 **children이라는 prop**를 받게 됩니다. 

```js
function Card({children}) {
    return (
      <div className = "card">
          {children}
      </div>    
    );
}
```

Card 컴포넌트는 `children이라는 porp`로 Person컴포넌트를 받아 렌더링 할 수 있습니다. 

<br>

### props 주의 사항

`props`는 고정되어 있지만 않기 때문에 **시간에 따라 다른 props를 받을 수 있습니다.** 

> 🗨️ **컴포넌트가 props를 변경해야 한다면? (사용자와의 상호작용)** 
>
> ➡️ 부모 컴포넌트에 <ins>새로운 객체를 전달하도록 요청</ins>해야 합니다. 

다만 그럴 경우 props는 버려지고 `자바스크립트 엔진`은 **기존 props가 차지했던 메모리를 회수**하게 됩니다. 

따라서 사용자 입력에 반응해야 하는 경우에 <ins>set state</ins>를 사용해야 합니다. (추후 다룰 예정입니다.)

<br>

### 공식 문서 문제 

**[1. 컴포넌트 추출하기](https://ko.react.dev/learn/passing-props-to-a-component)**

**[수정본]** 
<details>
<summary> App.js 코드보기</summary>

```js
import { getImageUrl } from './utils.js';

function Profile({person, imageId}) {
  return (
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl({imageId})}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: 4 </b>
            {person.awrds}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discoverd}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        person = {{
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          awrds: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discoverd: "polonium (chemical element)"
          }}
        imageId = {'szV5sdG'}
      />
      <Profile 
        person = {{
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          awrds: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discoverd: "a method for measuring carbon dioxide in seawater"
          }}
        imageId = {'YfeOqp2'}
      />
    </div>
  );
}

```

</details>

<details>
<summary> utils.js 코드보기</summary>

```js
export function getImageUrl({imageId, size = 's'}) {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}
```

</details>

<br>

[**3. children prop에 JSX 전달하기**](https://ko.react.dev/learn/passing-props-to-a-component)

**[수정본]**
<details>
<summary> App.js 코드보기</summary>

```js
function Photo () {
    return (
        <>
            <h1>Photo</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/OKS67lhm.jpg"
                alt="Aklilu Lemma"
                width={70}
                height={70}
            />
        </>
    );
}

function About () {
    return (
        <>
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </>
    );
}


function Card ({children}) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    {children[0]}
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    {children[1]}
                </div>
            </div>
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Photo />
            <About />
        </Card>
    );
}

```

</details>