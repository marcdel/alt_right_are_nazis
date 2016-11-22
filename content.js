var isTextNode = function(node) {
  return node.nodeType === 3;
}

var getAllDomElements = function() {
  return document.getElementsByTagName('*');
}

var processElements = function(elements) {
  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      processChildNodes(element);
  }
}

var processChildNodes = function(element) {
  for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      processNode(element, node);
  }
}

var processNode = function(parentElement, node) {
  if (!isTextNode(node)) { return; }

  var text = node.nodeValue;
  var replacedText = replaceText(text);

  if (replacedText !== text) {
      parentElement.replaceChild(document.createTextNode(replacedText), node);
  }
}

var replaceText = function(text) {
  return text.replace(/Alt Right/gi, 'Neo Nazis')
             .replace(/Alt-Right/gi, 'Neo-Nazis')
             .replace(/Alternative Right/gi, 'Neo Nazis')
             .replace(/National Policy Institute/gi, 'Nazi Party')
             .replace(/Breitbart/gi, 'Reich Ministry of Public Enlightenment')
             .replace(/Breitbart News Network/gi, 'Reich Ministry of Public Enlightenment')
             .replace(/Richard Spencer/gi, 'Hipster Hitler');
}

var elements = getAllDomElements();
processElements(elements);
