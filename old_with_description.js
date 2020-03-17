if (msg.indexOf("/트리만들기") == 0) { // /트리만들기가 앞에있을경우
  보조msg = Number(msg.substring(6)); // msg에서 "/트리만들기" 부분을 잘라버림.
  baseString = ""; // ★과 공백을 넣을 변수
  countString = 1; //
  countSString = 1; //
  space = 0; //공백 변수
  spacelit = (보조msg - 1); // 공백의 개수
  if (isNaN(msg.substring(6)) == true || msg.substring(6) == "" || msg.substring(6) == " ") { //숫자여부 판단
    replier.reply("숫자를 입력하세요.\n예시: /트리만들기 10");
  } else {

    while (countString < 보조msg + 1) { //이게 뭐더라...
      while (countSString < countString + 1) { //
        while (space < spacelit) { //공백채우기
          baseString = baseString + " ";
          space++;
        }
        baseString = baseString + "★"; //별추가
        countSString = countSString + 1;
      }
      baseString = baseString + "\n";
      countString = countString + 1;
      countSString = 1;
      space = 0;
      spacelit = spacelit - 1;
    }
    replier.reply("트리입니다.\n"+baseString); //결과물 전송
  }
}
