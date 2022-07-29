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

