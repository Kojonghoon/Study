//★ 문자열의 다양한 표현식

//1. 역따옴표	--> 백틱(`)
//문자열을 출력할 때 문자열내에 좀 더 쉽세 변수를 삽입하거나 표현식(연산)을 넣어 줄 수 있다.
//`너는 홍길동과 강감찬 중 누가 더 강하다고 생각하니?`
let name1 = "홍길동"
let name2 = "강감찬"

let str = "너는 " + name1 + "과 " + name2 + " 중 누가 더 강하다고 생각하니?"
// alert(str)

let str2 = "너는 ${name1}과 ${name2} 중 누가 더 강하다고 생각하니?"
// alert(str2)

let str3 = `너는 ${name1}과 ${name2} 중 누가 더 강하다고 생각하니?`
// alert(str3)


//2. 문자열내에 표현식(연산)을 삽입
window.alert(`3과 6을 곱하면 = ${3 * 6}`)