window.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelectorAll('p');
  const truncatedTextLength = 120;

  for (let i = 0; i < p.length; i += 1) {
    let initialText = p[i].textContent;
    let truncatedText = p[i].textContent.slice(0, truncatedTextLength) + ' ...';
    let buttons = document.querySelectorAll('button');
    let button = buttons[i];
    button.style.display = 'block';

    if (initialText.length > truncatedTextLength) {
      p[i].textContent = truncatedText;
    } else {
      button.style.display = 'none';
    }

    button.addEventListener('click', () => {
      if (button.textContent === 'Show more') {
        button.textContent = 'Show less';
        p[i].textContent = initialText;
      } else {
        button.textContent = 'Show more';
        p[i].textContent = truncatedText;
      }
    }); 
  } 
});