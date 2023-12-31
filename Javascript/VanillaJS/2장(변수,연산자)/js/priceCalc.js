function showPrice() {
  //사용자가 입력한 값을 두 개의 변수에 저장함
  var oPrice = document.querySelector("#originalPrice").value;
  var rate = document.querySelector("#rate").value;

  //두개의 값이 음수가 아니라면... 실행하라.
  if (oPrice > 0 && rate > 0) {
    var savePrice = oPrice * (rate / 100);
    var resultPrice = oPrice - savePrice;
  }

  document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " +
    oPrice + "원이고, 할인율은 " + rate + "% 입니다. " + savePrice + "원을 "
    + "절약한 " + resultPrice + "원에 살 수 있습니다."
}