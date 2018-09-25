import Asciidoctor from 'asciidoctor.js';

function component() {
  var element = document.createElement('div');
  var asciidoctor = Asciidoctor();
  var content = "http://asciidoctor.org[*Asciidoctor*] " +
    "running on http://opalrb.org[_Opal_] " +
    "brings AsciiDoc to the browser!";
  element.innerHTML = asciidoctor.convert(content);
  return element;
}

document.body.appendChild(component());
