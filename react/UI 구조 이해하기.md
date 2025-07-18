## 트리 구조 

React는 여러 중첩 컴포넌트로 이루어져 있습니다. 그런데 그 **많은 컴포넌트 구조를 어떻게 이해할까요?**

➡️ React는 `트리 구조`를 통해 **컴포넌트 간의 관계를 이해**합니다. 
 
>  💡브라우저는 HTML(DOM), CSS (CSSOM)을 모델링하기 위해 트리 구조를 사용합니다. 
> 
> <img width="922" height="230" alt="Image" src="https://github.com/user-attachments/assets/877c15b2-bcc5-4904-aee4-e1be645e7c81" />

<br>

### 렌더 트리 

- 렌더 트리는 컴포넌트 간의 부모-자식 관계를 나타낸 구조입니다.
- React에서는 컴포넌트들이 서로 중첩되며 렌더링 트리를 형성합니다.
- **컴포넌트 단위로 구성**되며. <ins>HTML 태그 자체는 렌더 트리에 포함되지 않습니다. 


<img width="752" height="352" alt="Image" src="https://github.com/user-attachments/assets/1804dc41-932e-475a-9099-14bf96746658" />

**[App.js]**
```js
import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

//App -> root 노드
export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" /> //App의 자식
      <InspirationGenerator> //App의 자식
          <Copyright year={2004} /> //InspirationGenerator의 자식 
      </InspirationGenerator>
    </>
  );
}
```

[InspirationGenerator.js]

```js
import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} /> //InspirationGenerator의 자식
        <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
```

<br>

### 모듈 의존성 트리 

- 각 노드의 모듈을 불러와서(import)형성하는 트리를 의미합니다. 
- 트리를 구성하는 노드는 컴포넌트가 아닌 모듈로 이루어져 있습니다. 
- 이 트리는 번들러(Webpack, Vite 등) 가 사용하는 중요한 구조입니다.
- 트리가 커지면 `번들링을 할 때` 클라이언트가 다운로드 해야하는 JS 용량이 커지며, 렌더 속도가 지연됩니다. 

> 💡 번들러는 이 의존성 트리를 따라 필요한 모든 모듈을 모아서 하나의 큰 파일로 묶습니다 ➡️ 번들링 

<br>

#### 번들링(Bundling)이란?
- 여러 .js 파일을 웹에서 하나하나 다운로드하면 느려지기 때문에, 하나의 파일로 뭉쳐서(번들로) 전달하는 작업입니다.


- React 앱이 커질수록 의존성 트리도 커지고, 번들도 커지게 됩니다. 따라서, 번들러 최적화도 중요합니다. 

<img width="906" height="337" alt="Image" src="https://github.com/user-attachments/assets/07a06401-900d-411c-8da1-39b60f4a0bde" />


<br>

#### 렌더 트리와의 차이점

| 항목           | 렌더 트리                           | 모듈 의존성 트리               |
| ------------ | ------------------------------- | ----------------------- |
| 노드           | React 컴포넌트                      | JS 모듈 (파일)              |
| 기준           | 어떤 컴포넌트가 다른 컴포넌트를 렌더하는가         | 어떤 파일이 다른 파일을 import하는가 |
| 비컴포넌트 모듈 포함  | ❌ 포함 안 함 (예: `inspirations.js`) | ✅ 포함                    |
| JSX 자식 포함 여부 | JSX 구조를 기준으로 함                  | import 여부만 기준           |
| 용도           | UI 구조 파악                        | 번들링과 최적화, 코드 구조 분석에 유용  |

