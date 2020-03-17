star = "★";

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg.indexOf("/트리만들기") == 0) {
    var slicedMsg = msg.substring(6);
    var msgNumber = Number(slicedMsg);
    var Builder = new java.lang.StringBuilder();
    var maxSpace = (msgNumber - 1);

    if (isNaN(slicedMsg) == true || slicedMsg.trim() == "") {
      replier.reply("숫자를 입력하세요.\n예시: /트리만들기 10");
      return;
    }

    for (var line = 0; line < msgNumber; line++) {
      for (var space = 0; space < maxSpace; space++) {
        Builder.append(" ");
      }
      for (var stars = 0; stars < line; stars++) {
        Builder.append(star);
      }
      Builder.append("\n");
      maxSpace--;
    }
    replier.reply("트리입니다.\n" + Builder.toString());
  }
}
