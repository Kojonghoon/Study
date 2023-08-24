//★ : 자바스크립트 비교 연산자 - 정수 vs 실수 비교

//1. 꼭 기억하자!
//값 자체로 비교한다.
//소수점이 필요없으면 뺸다.
//	-->실수끼리의 연산의 결과
//	--> 10.0으로 나왔다면
//	--> 10.0실수를 10정수로 반환한다.
//다른 언어와는 다르게 JavaScript는 정수롸 실수를 각각의 자료형으로 구분하지 않는다
//단, 구분하는 메서드는 제공한다.
//	--> 정수인지 아닌지 이런 구분은 가능


//2. 실습
// alert(`10==10.0 비교결과 : ${10 == 10.0}`)		//true	--> 10.0을 출력하면 10으로 출력
// alert(`10 === 10.0 비교결과 : ${10 === 10.0}`)	//true(정수든 실수든 둘다 자료형은 Number)

//3. 정수, 실수 --> 자료형 출력
// alert(`숫자 10의 자료형은 = ${typeof 10}`)		//number
// alert(`숫자 10.0의 자료형은 = ${typeof 10.0}`)	//number

//4. 정수 구분하기 -->Number.isInteger()
// alert(`1은 정수인가요? = ${Number.isInteger(1)}`)		//true
// alert(`0.1은 정수인가요? = ${Number.isInteger(0.1)}`)	//false

// let pi = 3.14
// alert(`변수 pi는 정수인가요? = ${Number.isInteger(pi)}`)	//false


//5. 값 구분시 주의사항!
// alert(`10.0은 정수인가? = ${Number.isInteger(10.0)}`)	//true
// alert(`10.0의 출력값은 = ${10.0}이고, 결과 값은 정수인가? = ${Number.isInteger(10.0)}`)	//10, true

alert(`3.14+6.86 = ${3.14 + 6.86}`)	//10