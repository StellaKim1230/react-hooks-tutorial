## React 16.8 hooks tutorial

hooks는 v16.8에 새로 도입된 기능이다.

### 1. useState

함수형 컴포넌트에서도 상태 관리를 할 수 있다.
상태의 기본값을 넣어준다. `useState(0)` 은 기본값을 0으로 설정하겠다는 의미이다.
이 함수가 호출되고 나면 배열을 반환하느데, 배열의 첫번째 원소는 상태 값이고 두번째 원소는 상태를 설정하는 함수이다.
이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고(상태값이 바뀌면서) 컴포넌트는 렌더링 된다.

#### 1.1 useState를 여러번 사용하기
