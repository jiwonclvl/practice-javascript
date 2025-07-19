## 공식 문서 문제 

[문제 보러가기](https://ko.react.dev/learn/updating-arrays-in-state#challenges)

### 장바구니 항목 업데이트

> **문제: ”+” 버튼을 누르면 해당 숫자가 증가하도록 handleIncreaseClick 로직을 채워보세요.**

```js
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    //항목 채우기
    const newList = products.map(product =>
    
    //입력받은 id의 count 수 증가시키기
    productId === product.id ? 
        {...product, count: product.count + 1} :
        product
    )
      
  setProducts(newList);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

```

<br>

### 장바구니 항목 삭제하기

> **문제: ”-“를 누르면 상품이 장바구니에서 자동으로 제거됩니다. 0이 표시되지 않도록 합니다.**

```js
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    })
    //filter를 통해 값이 0인 값은 표시하지 않도록 수정
    .filter(product => {
    if (product.count === 0) {
      return null;
    } else {
      return product;
    }
    })         
)}

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() =>
          handleDecreaseClick(product.id)}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
```

<br>

### 항목 삽입, 수정, 삭제 

> **문제: odos를 편집하거나 삭제하는 기능이 동작하지 않습니다. 비변경 함수를 사용하도록 handleAddTodo, handleChangeTodo 그리고 handleDeleteTodo를 다시 작성해보세요.**

```js
import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {

        const newTodos = [
            ...todos,
            { id: nextId++, title: title, done: false }, //새로운 값 추가
        ];
        setTodos(newTodos)
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(todo => {
            if (todo.id === nextTodo.id) { //순회하면서 특정 id의 값 변경
                return {
                    id: todo.id,
                    title: nextTodo.title,
                    done: nextTodo.done
                }
            } else {
                return todo;
            }
        }))
    }

    function handleDeleteTodo(todoId) {
        let newTodoList = todos.filter(todo => { //id가 같은 경우는 제외해서 새로운 배열 생성 
            return todo.id !== todoId
        });

        setTodos(newTodoList);
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

```

> 💡 Immer 사용으로 값 수정하기
> 
> 
> ```js
> function handleChangeTodo(nextTodo) {
>        updateTodos(draft => {
>          const todo = draft.find(t => t.id === nextTodo.id); //id가 존재하는지 찾고 해당 값 변경
>
>          todo.title =  nextTodo.title
>          todo.done =  nextTodo.done
>          
>        })
>    }
> ```