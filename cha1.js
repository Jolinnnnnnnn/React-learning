/*react 
1.用组件创建ui，代码复用，后期维护开发，降低组件间的耦合性
2.状态管理公式 状态管理=状态+状态管理器
状态=数据，一般state发生变化，组件会重新渲染（可以用拦截，使得组件不发生变化）
状态管理器=操作状态的方法，一般通过状态管理器来操作状态
3.单向数据流 即对不可变的数据状态使用单向变换
通过setState方法，可以更新状态，但是状态不会立即更新，而是会先缓存，然后通过异步的方式更新状态  
工具包toolkit
*/

/*
用useState和useReducer定义组件内部的state，state存储在fiber节点（VDOM)中   
每一个组件都有一个与之对应的js对象即fiber节点，不同fiber节点无法通信状态
共享状态：状态提升（公共父级，通过props将state传递给子组件，影响范围较广）
react组件外部状态管理：redux，contextAPI
second1
*/

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}