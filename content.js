var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Alt Right/gi, 'Neo Nazis')
                                   .replace(/Alt-Right/gi, 'Neo-Nazis')
                                   .replace(/Alternative Right/gi, 'Neo Nazis')
                                   .replace(/National Policy Institute/gi, 'Nazi Party')
                                   .replace(/Breitbart/gi, 'Reich Ministry of Public Enlightenment')
                                   .replace(/Breitbart News Network/gi, 'Reich Ministry of Public Enlightenment')
                                   .replace(/Richard Spencer/gi, 'Hipster Hitler');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
