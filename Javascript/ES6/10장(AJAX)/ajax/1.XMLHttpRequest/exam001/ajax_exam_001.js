// AJAX 실습1

// 1. 생성
// 자바스크립트를 이용하여 서버에
// 	--> 뭐좀 달라고
// 	--> 요청
// 	--> 이걸 조금 어려운 말로
// 	--> HTTP request만든다.생성한다.
// 이런 요청을 전문적으로 하는 애가 있다는데 ?
// 	--> XMLHttpRequest
// 	--> 그럼 써야겠죠 ?
// 	--> 이걸 조금 어려운 말로
// 	--> XMLHttpRequest객체의 인스턴스를 만든다.생성한다.
//생성은 new로 한다.
let xhr = new XMLHttpRequest();


//2. 요청
//이제 요청을 해야겠죠?
//	--> 그런데 포를 쏠려면 포문을 열어야 겠죠?
//	--> open이 연다라는 뜻
//	--> 여세요.
xhr.open("GET", "./data_001.txt")


//3. 최종 요청2
xhr.send();


