window.onload = function () {
  var elements = {
    applyButton : document.getElementById('apply'),
    outputArea  : document.getElementById('output').querySelector('textarea'),
    inputArea   : {
      css  : document.getElementById('input').querySelector('#css'),
      html : document.getElementById('input').querySelector('#html')
    }
  };
  var css = {
    styleArray   : null,
    completeHTML : null,

    parse: function () {
      var style  = elements.inputArea.css.value;
      styleArray = style.split("}");
      for ( i in styleArray ) {
        styleArray[i] = styleArray[i].split("{");
      }
    },
    apply: function () {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = elements.inputArea.html.value;
      for( i in styleArray ) {
        var currentElement = styleArray[i];
        if (currentElement.length == 2) {
          var element = {
            selector : currentElement[0].trim(),
            style    : currentElement[1].trim()
          };
          element.nodes = wrapper.querySelectorAll(element.selector);
          for ( var i=0;  i<element.nodes.length; i++ ) {
            element.nodes[i].setAttribute("style", element.style);
            element.nodes[i].removeAttribute("class");
            element.nodes[i].removeAttribute("id");
          }
        }
      }
      completeHTML = wrapper.innerHTML;
    },
    appear: function () {
      elements.outputArea.value = completeHTML;
    }
  }

  elements.applyButton.onclick = function() {
    css.parse();
    css.apply();
    css.appear();
  };
}

