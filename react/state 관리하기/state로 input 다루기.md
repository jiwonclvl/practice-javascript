## 선언형 UI vs 명령형 UI 

사용자와 상호작용하는 UI를 만들 때, 액션(예: 입력, 클릭 등)에 따라 화면이 어떻게 변할지를 설계하는 방식에는 크게 **명령형**과 **선언형** 두 가지가 있습니다.

### 명령형 UI (Imperative UI)
UI의 변화 과정을 직접 명령하는 방식입니다.

**[로그인 예시]**

1. 아이디와 비밀번호가 입력되면 버튼 활성화


2. 버튼 클릭 시 로그인 요청 후 버튼 비활성화


3. 요청 실패시 오류 메세지 응답


⚠️ 다만, 이런한 명령형은 그저 명령에 따르기만 할 뿐 **잘못된 응답을 해도 명령에 따라 동작하는 문제가 생길 수 있습니다.** 


React는 위와 같은 문제를 해결하기 위해 UI를 직접 조작하지 않고 단순히 선언만 하는 <ins>선언적 방식의 UI 방식을 지향해야 합니다. 

<br>

### 선언형 UI(Declarative UI)

#### 컴포넌트의 state 시각화

코드를 작성하기 이전에 상태에 따른 UI화면을 미리 설계한 후 코드 구현을 하는 것이 좋습니다. 

**[예시]**

| 상태 (State)   | UI 모습                              |
| ------------ |------------------------------------|
| `Empty`      | 입력창은 비어 있고, 제출 버튼은 비활성화됨           |
| `Typing`     | 사용자가 입력 중이고, 제출 버튼은 활성화됨           |
| `Submitting` | 버튼은 비활성화되고, 로딩 스피너(로딩 표시)가 나타남     |
| `Success`    | 폼은 사라지고 메인 화면으로 이동                 |
| `Error`      | `Typing` 상태와 비슷하지만, 빨간색 오류 메시지가 나타남 |

```js
let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];
```

“상태 기반으로 UI를 설계하면 코드를 구조화하기 쉽고 직관적입니다. 

<br>

#### state 변경 트리거

state 변경에 대한 트리거는 2가지가 있습니다. 

- 휴먼 input: 버튼, 입력 등
- 컴퓨터 input: 타임 아웃, 이미지 로딩, 네트워크 지연 등

위의 예시를 바탕으로 생각해보면, 사용자가 입력란에 내용을 입력하면 상태는 `Empty` ➡️ `Typing`으로 변경되어야 하고, 제출 중 네트워크 요청이 실패하면 상태는 `Error`로 전환되어야 합니다. 이처럼 각 상태 간의 전환 흐름과 조건을 함께 고려해야 합니다.


위의 각 상태들은 userState를 통해 관리하는 것이 좋습니다. 

```js
const [isEmpty, setIsEmpty] = useState(true);
const [isTyping, setIsTyping] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);
```

<br>

#### 불필요한 state 제거 

isSuccess, isError, isSubmitting처럼 서로 동시에 참이 되면 안 되는 상태들이 있으면, **이 상태들이 충돌하거나 버그의 원인**이 됩니다.

따라서, 해당 경우에는 조건문이나 하나의 단일 상태(status enum 등)로 표현하는 것이 버그를 줄이는 좋은 방법입니다. 