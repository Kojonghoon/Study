//★ : if 조건문 - 한 라인 작성 시 주의사항

//1. 꼭 기억하자!
//if 조건식이 참일 때 실행되는 라인이 두 라인 이상이면 주의!! 
//	--> 자바도 마찬가지
//괄호 없이 사용하려고 할 때...
let c = 400;
if (c == 300) {
	alert("300입니다.")
	alert("대단해요~")
}
else {
	alert("300이 아닙니다.")
}


//2. 설령 else절 없이 if문만 사용한다 하더라고 
//	--> 두 라인 이상의 코드를 실행하는 거라면 
//	--> 반드시 코드 블록을 써준다.