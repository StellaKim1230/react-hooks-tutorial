## React 16.8 hooks tutorial & 컴포넌트 만들기

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
useEffect는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라진다.

#### 2.1 useEffect 마운트 될 때만 실행하고 싶을 때

함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

```
useEffect(() => {
  console.log('마운트 될 때만 실행됩니다')
}, [])
```

#### 2.2 특정 값이 업데이트 될 때만 실행하고 싶을 때

```
useEffect(() => {
  console.log(name)
}, [name])
```

#### 2.3 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶을 때 useEffect에서 뒷정리(cleanup) 함수를 반환해줘야 한다

useEffect 안에서 함수를 리턴한다.

### 3. useContext

Context 의 용도

- 주로, 애플리케이션에서 전역적으로 데이터가 사용되어야 할 때 사용됩니다.
- redux, react-router, styled-components 등의 기존에 이 Context API를 기반으로 구현이 되었다.

Context 의 생성

- createContext 함수를 호출하면 Provider 와 Consumer 라는 컴포넌트들이 반환된다. Provider 는 Context 에서 사용할 값을 설정할 때 사용하고, Consumer 는 나중에 우리가 설정한 값을 불러와야 할 때 사용한다.

### 4. useReducer

useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook이다.
userReducer 파일

- useState와 비슷하게 return 배열의 첫번째는 state가, 두번째는 state를 변경하는 함수가 있다.
- useState의 state를 변경하는 함수는 넘긴 값을 그대로 다음 state로 사용하지만, useReducer의 state를 변경하는 함수는
  reducer를 거치면서 추가적으로 가공한 state로 사용 할 수 있다.

### 5. useMemo

첫 번째 파라미터로 콜백 함수를 받고 두 번째 파라미터로 배열을 받아 memoize된 return 값을 반환해주는 hook이다.
함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.

### 6. userCallback

useMemo와 비슷한 함수이다. 이벤트 핸들러 한수를 필요할 때만 생성할 수 있다. Average 컴포넌트에서 onChange, onInsert 함수를 선언해주고 이 함수는 컴포넌트가 리렌더링 될 때마다 함수들이 새로 생성된다. 컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아지면 최적화 해주는 것이 좋다.

useCallback의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파랄미터에는 배열을 넣어준다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시한다.

함수 내부에서 기존의 상태 값을 의존해야 할 때는 꼭 두번째 파라미터 안에 포함을 시켜줘야 한다. Average 컴포넌트인 경우 onChange의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기 때문에 배열이 비어 있어도 상관 없다. 하지만 onInsert 함수는 기존의 number와 list를 조회해서 nextList를 생성하기 떄문에 배열 안에 number와 list를 꼭 넣어주어야 한다.

### 7. useRef

함수형 컴포넌트에서 ref를 쉽게 사용 할 수 있게 해준다.

### 8. 커스텀 hook

여러 컴포넌트에서 비슷한 기능을 공유하게 되는 일이 발생한다면 hook을 작성하여 로직을 재사용 할 수 있다.

[참고자료](https://velog.io/@velopert/react-hooks)
