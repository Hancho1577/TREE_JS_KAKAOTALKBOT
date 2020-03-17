if (msg.indexOf("/트리만들기") == 0) {
  보조msg = Number(msg.substring(6));
  baseString = "";
  countString = 1;
  countSString = 1;
  space = 0;
  spacelit = (보조msg - 1);
  if (isNaN(msg.substring(6)) == true || msg.substring(6) == "" || msg.substring(6) == " ") {
    replier.reply("숫자를 입력하세요.\n예시: /트리만들기 10");
  } else {
    while (countString < 보조msg + 1) {
      while (countSString < countString + 1) {
        while (space < spacelit) {
          baseString = baseString + " ";
          space++;
        }
        baseString = baseString + "★";
        countSString = countSString + 1;
      }
      baseString = baseString + "\n";
      countString = countString + 1;
      countSString = 1;
      space = 0;
      spacelit = spacelit - 1;
    }
    replier.reply("트리입니다.\n"+baseString);
  }
}
