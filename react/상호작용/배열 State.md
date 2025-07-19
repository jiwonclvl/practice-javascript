## 공식 문서 문제 

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