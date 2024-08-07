# Algorithm

해당 문서는 [Udemy JavaScript Data Structures & Algorithms](https://www.udemy.com/course/best-javascript-data-structures/) 기반으로 작성 중임

## Big O Notation

### 1. 빅오표기법이 필요한 이유

**_같은 기능을 하는 여러 접근 방법이 있을 때, 우리는 어떤 게 더 낫다고 판단할 수 있을까?_**

- 코드의 성능에 대한 정확한 측정 단위
- trade-off와 관련한 기술적 의사결정시 유용
- 코드가 잘 작동하지 않을 때, 비효율적인 포인트를 찾아내는데에 도움을 줌
- 덜 중요하지만, 면접에 나옴!

속도, 메모리, 가독성 등 여러 판단 기준이 있지만, 먼저 속도에 초점을 두고 생각해보자.

### 2. 시간 복잡도

#### 왜 빅오 표기법을 쓸까?

- 코드의 실행 시간을 재는 방법도 있다.  
   이는 실행 기기마다 다르게 측정되고, 같은 기기여도 여러번 측정할 때 모두 같은 값이 나오지 않는다. 또한 매우 빠른 알고리즘의 경우엔 속도 측정이 정확하지 않을 수 있다.
- 연산을 직접 세는 방법도 있다.
  ```javascript
  (n * (n + 1)) / 2;
  ```
  이 코드는 1번의 곱셈, 1번의 덧셈, 1번의 나눗셈으로 총 3번 연산한다.  
   다만 이렇게 하나씩 세는 건 매우 힘든 과정이고, 실제론 정확한 숫자는 신경쓰지 않고 n에 비례하여 생각한다. 이것이 빅오 표기법!

#### 예시로 살펴보기

```javascript
// 밑의 두 코드는 1부터 n까지의 모든 숫자를 더해 반환하는 기능을 한다.
// 1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// 2)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

- 1번 함수는 n의 입력값과 관계없이 언제나 3번의 연산을 한다. 이때 빅오 표기법에서 정확한 숫자는 필요하지 않고 n에 비례해서만 생각하기 때문에 **`O(1)`** 이라고 표기한다.
- 2번 함수에서 연산 자체는 7번? 정도 한다. 하지만 n번의 반복을 도는 반복문이 있어, n의 입력값에 따라 7 \* n의 연산을 하게 될 것이다. 이 때에 정확한 숫자는 신경 쓰지 않고 **`O(n)`** 이라고 표기한다.

다른 예시도 살펴보자.

```javascript
// 1)
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

// 2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

- for문을 기준으로 바라보면 되는데, 1번 함수는 `O(n)`의 연산을 두 번 한다. 이도 역시 그냥 `O(n)`이라고 표기한다.
- 2번 함수는 `O(n)`의 for문 안에 또 다른 `O(n)`의 for문이 있다. 이는 당연히 `O(n^2)`이다.

### 3. 공간 복잡도

#### Rule of thumb

- 대부분의 원시 타입(boolean, number, undefined, null...)은 상수 공간이다.
- 문자열은 O(n)의 공간을 필요로 한다. (여기서 n은 문자열의 길이)
- 참조 타입은 일반적으로 O(n)의 공간 복잡도를 가진다. 이때 n은 배열의 길이나 객체의 키 갯수

#### 예시로 살펴보기

```javascript
// 1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 2)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

- 1번 함수에서 `total`, `i`가 새롭게 할당되었으나 원시 타입이므로 `O(1)`의 공간 복잡도를 가진다.
- 2번 함수에선 `arr.length` 만큼의 길이를 갖는 새로운 배열 `newArr`가 새롭게 만들어졌으므로 `O(n)`(n은 arr.length)의 공간 복잡도를 가진다.

### 4. Logarithms

#### Rule of thumb

- 대략적으로, 1보다 작거나 같은 값을 얻기 전까지 2로 나눌 수 있는 횟수를 측정한다.
  - 8을 2로 3번 나누면 1이 되므로, log(8) = 3
  - 25를 2로 5번 나누면 0.78...이 되므로, log(25) ≈ 4.64
  - 따라서 O(log n)은 n이 커져도 큰 차이가 없다. (로그함수 그래프)

### 결론

<img width="443" alt="Screenshot 2024-08-03 at 16 34 36" src="https://github.com/user-attachments/assets/6c93cfc0-f396-451d-a699-d5386d77e8cc">

수학적인 걸 떠나서 `O(n^2) > O(nlog n) > O(n) > O(log n) > O(1)` 이런 순서로 비교적 비효율적이라고 기억해두면 된다!



## Analyzing Performance of Arrays and Objects

### 1. 객체

순서가 없는 key-value pairs.

#### 언제 사용할까?

- 정렬, 순서가 필요하지 않을 때
- 빠른 접근, 삽입, 삭제가 필요할 때

#### Big O로 바라보기

- 삽입: `O(1)`
- 삭제: `O(1)`
- 검색: `O(n)`
- 접근: `O(1)`
- methods
   - hasOwnProperty: `O(1)`
   - Object.keys: `O(n)`
   - Object.values: `O(n)`
   - Object.entries: `O(n)`

### 2. 배열

#### 언제 사용할까?

- 정렬, 순서가 필요할 때

#### Big O로 바라보기

- 삽입과 삭제는 재정렬이 필요하기 때문에 target 위치에 따라 다름
- 검색: `O(n)`
- 접근: `O(1)`
- methods
   - push: `O(1)`
   - pop: `O(1)`
   - shift: `O(n)`
   - unshift: `O(n)`
   - concat: `O(n)`
   - slice: `O(n)`
   - splice: `O(n)`
   - sort: `O(n * log n)`
   - forEach/map/filter/reduce/etc.: `O(n)`
 
### 결론

순서가 필요하면 배열, 필요하지 않다면 객체를 이용하자!  
배열 앞쪽 삽입/삭제의 비효율성을 보완해줄 자료 구조들을 배울 것이다!
