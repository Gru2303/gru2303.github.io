function copyText(content) {
  var textElement = document.createElement("textarea");
  if (((textElement.value = content), document.body.appendChild(textElement), textElement.select)) {
    textElement.select();
    var copyStatus = document.getElementsByClassName("copyStatus");
    $(copyStatus).finish().fadeTo(0, 1);
    try {
        $(copyStatus).text("copied");
        document.execCommand("copy", $(copyStatus).fadeTo(1200, 0));
    } catch (exception) {
        $(copyStatus).text("failed to copy " + content);
    } finally {
    }
  }
  document.body.removeChild(textElement);
}

function openLink(content) {
  window.open(content, '_blank');
}

function setLink(content) {
  window.location.replace(content);
}