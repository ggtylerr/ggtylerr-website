function showText(a,elem,l) {
  // Get the two text elements
  fr = elem.children[0];
  to = elem.children[1];
  console.log(to);
  
  // Replace text for "to" element
  to.innerHTML = a;
  console.log(to);

  // Change opacity
  fr.style.opacity = "0";
  to.style.opacity = "1";
  setTimeout(function() {
    fr.style.opacity = "1";
    to.style.opacity = "0";
  },l);
}

function copyToClip(txt,elem) {
  if (!navigator.clipboard) {
    // If the browser doesn't support copying directly via code, create a hidden textarea element, put text in there, select it, and copy the text from there.
    var textArea = document.createElement("textarea");
    textArea.value = txt;

    // Prevents scrolling to the textarea
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var cmd = document.execCommand('copy');
      var msg = cmd ? 'Copied!' : 'Couldn\'t copy, check console. CTRL+SHIFT+J or CTRL+OPT+J by default.';
      var l = cmd ? 2500 : 5000;
      showText(msg,elem.children[0].children[0].children[1],l);
    } catch (err) {
      console.error(`Couldn't copy text '${txt}' via fallback method, encountered error:\n${err}`);
    }

    document.body.removeChild(textArea);
    return;
  }
  navigator.clipboard.writeText(txt).then(function() {
    showText("Copied!",elem.children[0].children[0].children[1],2500);
  }, function(err) {
    console.error(`Couldn't copy text '${txt} via default method, encountered error:\n'${err}`);
    showText("Couldn\'t copy, check console. CTRL+SHIFT+J or CTRL+OPT+J by default.",elem.children[0].children[0].children[1],5000);
  });
}