    //전역변수 선언과 동시에 초기화
    var cnt = 0
    var $score = null
    var $fire = null
    var play = false  // 플래그변수
    var timerID = 0

    $(document).ready(function () {
      //요소 최기화
      init()
      //이벤트 등록
      initEvent();
    })

    //전역에서 사용ㅇ할 요소를 찾아오기
    function init() {
      $score = $("#score")
      $fire = $("#fire")
    }
    //이벤트 등록하기
    function initEvent() {
      $("#start").click(function () {
        startGame();
      })
      //물고기를 클릭을 하면 점수가 증가
      $("#fire").click(function () {
        addScore();
      })
    }
    //startGame()구현
    function startGame() {
      //플래그 변수로 false일 때 게임을 시작할 수 있게끔 만든다.      
      if (play == false) {
        //게임이 종료가 되었는지 체크하는 함수 호출
        checkEndGame();
        play = true
        timerID = setInterval(function () {
          //파이리 움직이기
          moveFire();
        }, 1000)
      }
    }
    //점수를 증가시키는 addScore()구현
    function addScore() {
      if (play == true) {
        cnt++
        $score.html(cnt)
      }
    }
    //파이리 움직이게 하는 moveFire()구현
    function moveFire(){
      //파이리 크기 120&70
      //패널의 크기 600*400
      //파이리 x이동 영역 0~480(600-120)
      //파이리 y이동 영역 0~330(400-70)
      var x = Math.floor(Math.random() * 480)
      var y = Math.floor(Math.random() * 330)

      $fire.css({
        left: x,
        top: y
      })
    }

    function checkEndGame() {
      //게임이 5초 뒤에 종료가 되게끔 한다.
      setTimeout(function () {
        play = false
        //물고기 움직이는 타이머를 제거 함
        clearInterval(timerID)
        alert("게임종료")
      }, 10000)
    }