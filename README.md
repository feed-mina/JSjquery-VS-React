# JSjquery-VS-React

# 쌩 HTML , CSS , Javascript와 JQuery VS React 코드를 비교해보자

## 1. Pure한 HTML , CSS , JS +JQuery

```html

   <script src="https://code.jquery.com/jquery-3.6.0.js" ></script>

```
### jquery를 cdn으로 삽입함으로써 js와 연결한다.

```javascript
$(function(){
    $("#create").on("submit", function(event){
        event.preventDefault();
    var value = $(this).find("input").val();
```
```javascript
    $("#todo-list").append(    
        '<li >' +
        "<span>" + 
        value+ 
        "</span>" +
        '<button type="button" class="complete">완료</button>'+
        '<button type="button" class="remove">삭제</button>' +
        "</li>"
      );
      $(this).trigger("reset");
    });
```
     
 
### javascript 안에서 html id값을 기준으로 변수를 받아 사용한다.
### 자바스크립트 안에 html 코드도 섞여 있어서 나중에 관리하기가 어렵다.

## React : jquery 이후 js/css/html로 분리하지 않고 한번에 파일을 관리하기 쉽게 만들수 있도록 변형된 자바스크립트 라이브러리이다.

### 리액트 에서는 ES6에서 나온 새로운 문법을 사용한다.
## Array
```javascript
var a = [0, 1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  var item = a[i];
  console.log(item);
} 
```
###ES6
```javascript
const b = [0,1,2,3,4,5]
b.forEach(function(item){
    console.log(item);
})
```

```javascript
var c = [0, 1, 2, 3, 4, 5];
var newC = [];
for (var i = 0; i < c.length; i++) {
  var item = c[i];
  newC.push(item * 2);
}

console.log(newC);
```
###ES6
```javascript
const a = [0,1,2,3,4,5];
const b = a.map(function(item){
    return item * 2;
})

console.log(b);
```


```javascript
var e = [0, 1, 2, 3, 4, 5];
var newE = [];
for (var i = 0; i < e.length; i++) {
  var item = e[i];
  if (item > 3) {
    newE.push(item);
  }
}

console.log(newE);
 ```
###ES6
```javascript
const a = [0,1,2,3,4,5];
const b = a.filter(function(item){
    return item > 3;
});
console.log(b);
```

## Allow function
```javascript
  function
function a(x, y) {
  return x + y;
}
console.log(a(1, 2));
```
###ES6
```javascript

const a = (x,y) => { return x+y; }
console.log(a(1,2))
```

##Destructuring Assignment

```javascript
const object = { x: 1, y: 2 };
const x = object.x;
const y = object.y;
console.log(x); // 1
console.log(y); // 2
```
###ES6
```javascript

const object = { x: 1, y: 2 };
const {x, y} = object
console.log(x); // 1
console.log(y); // 2


```

```javascript
const array = [0, 1];
const a = array[0];
const b = array[1];
console.log(a); // 0
console.log(b); // 1
```
###ES6
```javascript

const array = [0, 1];
const [a, b] = array;
console.log(a); // 0
console.log(b); // 1
```

### Shorthand property names
```javascript
// `"김민수"` 값을 갖는 변수 `username`을 선언하세요.
const username = '김민수';
// `21` 값을 갖는 변수 `age`를 선언하세요.
const age = 21;
// `Shorthand property names` 표현을 이용하여 `username`과 `age`를 갖는 객체를 생성합니다.
const student = {
    username:username,
    age:age
}
```
###ES6
```javascript

const student = {
    username,
    age
}
```

###Spread Syntax
```javascript
//함수 호출시
function sum(x, y, z) {
    return x + y + z;
}

const a = [1, 2, 3];
console.log(sum(...a)); 

//함수 선언시
function introduce(name, age, ...rest) { // 함수 선언 시 Spread Syntax는 마지막 인수에 한해 사용할 수 있습니다
    console.log("이름: " + name);
    console.log("나이: " + age);
    console.log("추가정보: " + rest);
}
introduce("김엘리스", 36, "안경 씀", "커피 좋아함", "게임 좋아함");

//배열 선언 시
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];
console.log(c); // 1,2,3,4,5,6

//객체 선언 시 
const a = { x: 1, y: 2, z: 3 };
const b = { v: 4, w: 5, x: 6 };
const c = { ...a, ...b };
console.log(c); // {x: 6, y: 2, z: 3, v: 4, w: 5}
```
###Template literals
```javascript
const text1 = "Hello" + name;
console.log("당신의 이름은 " + name + "이로군요!");
```
###ES6
```javascript

const text2 = `Hello ${name}`;
console.log(`당신의 이름은 ${name}이로군요!`);
```

###Optional chaining
```javascript
var x;
if(a && a.b && a.b.c){
  x = a.b.c;
}

const y = a?.b?.c;

//객체
const a = {
    b: {
        c: 1
    }
}
console.log(a?.b?.c); // 1
console.log(a?.x?.c); // undefined
console.log(a?.x.c); // Error
//배열
const a = [{x:1,y:2}, {x:3,y:4}];

console.log(a?.[1]?.x); // 3
console.log(a?.[2]?.x); // undefined
```
 