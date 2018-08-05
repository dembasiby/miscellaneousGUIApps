window.addEventListener("DOMContentLoaded", () => {
  var figures = document.getElementsByTagName('figure');
  var timer;
  var caption;

  Array.prototype.slice.call(figures).forEach(figure => {
    figure.addEventListener('mouseenter', (e) => {
      timer = setTimeout(() => {
        caption = e.target.lastElementChild;
        caption.style.display = 'block';
      }, 2000)
    });

    figure.addEventListener('mouseleave', () => {
      clearTimeout(timer);
      caption.style.display = 'none';
    });
  });
});

