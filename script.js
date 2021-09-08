window.addEventListener("load", main);

function main() {
  var button = document.getElementById("nav-usernameMenu");
  var spans = button.getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].hasAttribute("title")) {
      var title = spans[i].getAttribute("title")
      if (!title.startsWith("AWSReservedSSO"))  break;

      var splittedTitle= title.split("/")[1].split("@");
      var newTitle = splittedTitle[0] + " @ " + splittedTitle[2];

      spans[i].innerHTML = newTitle;
      break;
    }
  }
}

