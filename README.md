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
```javascript
var a = [0, 1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  var item = a[i];
  console.log(item);
}
 

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
 

const a = [0,1,2,3,4,5];
const b = a.filter(function(item){
    return item > 3;
});
console.log(b);
```


```javascript
```

