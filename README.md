## React 16.8 hooks tutorial

hooks는 v16.8에 새로 도입된 기능이다.

### 1. useState

함수형 컴포넌트에서도 상태 관리를 할 수 있다.
상태의 기본값을 넣어준다. `useState(0)` 은 기본값을 0으로 설정하겠다는 의미이다.
이 함수가 호출되고 나면 배열을 반환하느데, 배열의 첫번째 원소는 상태 값이고 두번째 원소는 상태를 설정하는 함수이다.
이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고(상태값이 바뀌면서) 컴포넌트는 렌더링 된다.

#### 1.1 useState를 여러번 사용하기

Info.js 참고
관리할 상태가 여러개인 경우에도, useState로 편하게 관리할 수 있다.

### 2. useEffect

리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정해준다. 클래스형 컴포넌트 라이프사이클중 `componentDidMount` 와 `componentDidUpdate` 라고 할수 있다.

#### 2.1 useEffect 마운트 될 때만 실행하고 싶을 때

함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

```
useEffect(() => {
  console.log('마운트 될 때만 실행됩니다')
}, [])
```

[참고자료](https://velog.io/@velopert/react-hooks)
