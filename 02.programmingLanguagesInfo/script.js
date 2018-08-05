window.addEventListener('DOMContentLoaded', function() {
  var p = document.getElementsByTagName('p');
  var initialText;
  var truncatedText;
  var button;

  Array.prototype.slice.call(p).forEach(para => {
    initialText = para.textContent;
    truncatedText = para.textContent.slice(0, 120) + ' ...';
    para.textContent = truncatedText;
    button = para.nextElementSibling;

    button.addEventListener('click', function() {
      if (this.textContent === 'Show more') {
        this.textContent = 'Show less';
        para.textContent = initialText;
      } else {
        this.textContent = 'Show more';
        para.textContent = truncatedText;
      }     
    })
  });
});